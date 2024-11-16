import React from 'react';

import Button from 'react-bootstrap/Button';
import { MessageDialog } from './messageDialog';

export function Unauthenticated(props) {
  const [userName, setUserName] = React.useState(props.userName);
  const [password, setPassword] = React.useState('');
  const [displayError, setDisplayError] = React.useState(null);

  async function loginUser() {
    loginOrCreate(`/api/auth/login`);
  }

  async function createUser() {
    loginOrCreate(`/api/auth/create`);
  }

  async function loginOrCreate(endpoint) {
    const response = await fetch(endpoint, {
      method: 'post',
      body: JSON.stringify({ email: userName, password: password }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    if (response?.status === 200) {
      localStorage.setItem('userName', userName);
      props.onLogin(userName);
    } else {
      const body = await response.json();
      setDisplayError(`⚠ Error: ${body.msg}`);
    }
  }

  return (
    <>
      <div className='login-screen'>
        <div>
          <div className='input-group mb-3'>
            <span className='input-group-text'>@</span>
            <input className='form-control' type='text' value={userName} onChange={(e) => setUserName(e.target.value)} placeholder='your@email.com' />
          </div>
          <div className='input-group mb-3'>
            <span className='input-group-text'>🔒</span>
            <input className='form-control' type='password' onChange={(e) => setPassword(e.target.value)} placeholder='password' />
          </div>
          <div className='button-group'>
            <Button className='left-button' variant='primary' onClick={() => loginUser()} disabled={!userName || !password}>
              Login
            </Button>
            <Button variant='secondary' onClick={() => createUser()} disabled={!userName || !password}>
              Create
            </Button>
          </div>
        </div>  
      </div>

      <p className="description">
      FanVote brings the excitement of live sports to your fingertips by letting you vote in real-time on who you think will win upcoming and ongoing games. Whether it's soccer, basketball, or any other major sport, users can see live updates, and engage in friendly competition with others. FanVote transforms sports watching into an interactive experience, making it fun to see how your votes stack up against your friends and the rest of the world. 
      </p>


    <MessageDialog message={displayError} onHide={() => setDisplayError(null)} />   
  </>
  );
}
