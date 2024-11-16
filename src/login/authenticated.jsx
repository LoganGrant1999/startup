import React from 'react';
import { useNavigate } from 'react-router-dom';

import Button from 'react-bootstrap/Button';

import './authenticated.css';

export function Authenticated(props) {
  const navigate = useNavigate();

  function logout() {
    fetch(`/api/auth/logout`, {
      method: 'delete',
    })
      .catch(() => {
      })
      .finally(() => {
        localStorage.removeItem('userName');
        props.onLogout();
      });
  }
  return (
    <div>
      <div className='playerName'>{props.userName}</div>
      <div className='button-group'>
        <Button variant='primary' onClick={() => navigate('/predictions')}>
          Predict
        </Button>
        <Button variant='secondary' onClick={() => logout()}>
          Logout
        </Button>
      </div>
    </div>
  );
}
