const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const express = require('express');
const { peerProxy } = require('./peerProxy');
const DB = require('./database.js');
const uuid = require('uuid');

const app = express();
const authCookieName = 'token';

const port = process.argv[2] || 3000;

app.use(express.json());
app.use(express.static('public'));
app.use(cookieParser());

app.set('trust proxy', true);

const apiRouter = express.Router();
app.use('/api', apiRouter);

apiRouter.post('/auth/create', async (req, res) => {
  if (await DB.getUser(req.body.email)) {
    res.status(409).send({ msg: 'Existing user' });
  } else {
    const user = await DB.createUser(req.body.email, req.body.password);
    setAuthCookie(res, user.token);
    res.send({ id: user._id });
  }
});

apiRouter.post('/auth/login', async (req, res) => {
  const user = await DB.getUser(req.body.email);
  if (user && (await bcrypt.compare(req.body.password, user.password))) {
    setAuthCookie(res, user.token);
    res.send({ id: user._id });
  } else {
    res.status(401).send({ msg: 'Unauthorized' });
  }
});

apiRouter.delete('/auth/logout', (_req, res) => {
  res.clearCookie(authCookieName);
  res.status(204).end();
});

const secureApiRouter = express.Router();
apiRouter.use(secureApiRouter);

secureApiRouter.use(async (req, res, next) => {
  const authToken = req.cookies[authCookieName];
  const user = await DB.getUserByToken(authToken);
  if (user) {
    req.user = user;
    next();
  } else {
    res.status(401).send({ msg: 'Unauthorized' });
  }
});

secureApiRouter.post('/votes', async (req, res) => {
  try {
    const vote = { ...req.body, ip: req.ip };
    const existingVote = await DB.getVoteByUserAndGame(vote.name, vote.game);

    if (existingVote) {
      return res.status(400).send({ msg: 'Already Voted' });
    }

    await DB.addVote(vote);

    app.locals.wss.clients.forEach((client) => {
      if (client.readyState === 1) {
        client.send(JSON.stringify({ type: 'new-vote', payload: vote }));
      }
    });

    res.status(200).send(vote);
  } catch (error) {
    console.error('Error in /votes:', error);
    res.status(500).send({ msg: 'Internal Server Error' });
  }
});

secureApiRouter.get('/votes', async (req, res) => {
  const votes = await DB.getVotes();
  res.send(votes.filter((vote) => vote.name === req.user.email));
});

app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

function setAuthCookie(res, authToken) {
  res.cookie(authCookieName, authToken, {
    secure: true,
    httpOnly: true,
    sameSite: 'strict',
  });
}

const server = app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

app.locals.wss = peerProxy(server);
