const { MongoClient } = require('mongodb');
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
// const client = new MongoClient(url);
const client = new MongoClient(url, { tls: true, serverSelectionTimeoutMS: 3000, autoSelectFamily: false, });

const db = client.db('fanvote');
const userCollection = db.collection('user');
const votesCollection = db.collection('votes');

(async function testConnection() {
    await client.connect();
    await db.command({ ping: 1 });
})().catch((ex) => {
    console.log(`Unable to connect to database with ${url} because ${ex.message}`);
    process.exit(1);
});
  
function getUser(email) {
    return userCollection.findOne({ email: email });
}
  
function getUserByToken(token) {
    return userCollection.findOne({ token: token });
}
  
async function createUser(email, password) {
    const passwordHash = await bcrypt.hash(password, 10);
  
    const user = {
      email: email,
      password: passwordHash,
      token: uuid.v4(),
    };
    await userCollection.insertOne(user);
  
    return user;
}

async function addVote(vote) {
    await votesCollection.insertOne(vote);
    return vote;
}

async function getVotes() {
    return await votesCollection.find().toArray();
}

async function getVoteByUserAndGame(name, game) {
    console.log(`Checking for existing vote: name=${name}, game=${game}`);
    return await votesCollection.findOne({ name, game });
 }

async function getUserVotes(name) {
    return await votesCollection.find({name: name}).toArray()
}

module.exports = {
    getUser,
    getUserByToken,
    createUser,
    addVote,
    getVotes,
    getVoteByUserAndGame,
    getUserVotes
};