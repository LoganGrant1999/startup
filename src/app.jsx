import React from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Predictions } from './predictions/predictions';
import { Account } from './account/account';
import { AuthState } from './login/authState';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';


function App() {
  const [userName, setUserName] = React.useState(localStorage.getItem('userName') || '');
  const currentAuthState = userName ? AuthState.Authenticated : AuthState.Unauthenticated;
  const [authState, setAuthState] = React.useState(currentAuthState);

  return (
    <BrowserRouter>
      <div className="body">
        <header>
          <h1>FanVote</h1>
          <nav className="navbar navbar-dark">
            <div className="navbar-brand"></div>
            <menu className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" to=''>Home</NavLink>
              </li>
              {authState === AuthState.Authenticated && (
                <li className='nav-item'>
                  <NavLink className='nav-link' to='predictions'>
                    Predictions
                  </NavLink>
                </li>
              )}
               {authState === AuthState.Authenticated && (
                <li className='nav-item'>
                  <NavLink className='nav-link' to='account'>
                    Account
                  </NavLink>
                </li>
              )}
            </menu>
          </nav>
          <hr />
        </header>
        
        <main>
          <Routes>
          <Route
            path='/'
            element={
              <Login
                userName={userName}
                authState={authState}
                onAuthChange={(userName, authState) => {
                  setAuthState(authState);
                  setUserName(userName);
                }}
              />
            }
            exact
          />
            <Route path='/predictions' element={<Predictions userName={userName} />} />
            <Route path="/account" element={<Account />} />
          </Routes>
        </main>

        <footer className="bg-dark text-white-50">
          <div className="container-fluid">
            <span className="text-reset">Logan Gibbons</span>
            <a className="text-reset" href="https://github.com/LoganGrant1999/startup.git">GitHub</a>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

function NotFound() {
  return <main className='container-fluid bg-secondary text-center'>404: Return to sender. Address unknown.</main>;
}

export default App;