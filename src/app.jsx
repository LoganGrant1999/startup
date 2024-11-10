import React from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Predictions } from './predictions/predictions';
import { Account } from './account/account';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

export default function App() {
  return (
    <BrowserRouter>
      <div className="body">
        <header>
          <h1>FanVote</h1>
          <nav className="navbar navbar-dark">
            <div className="navbar-brand"></div>
            <menu className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/predictions">Predictions</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/account">My Account</NavLink>
              </li>
            </menu>
          </nav>
          <hr />
        </header>
        
        <main>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/predictions" element={<Predictions />} />
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