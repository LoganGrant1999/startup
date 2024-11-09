import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

export default function App() {
  return (

    <div className="body">
       <header>
      <h1>FanVote</h1>
      <nav>
        <menu>
          <li><a href="index.html">Home</a></li>
          <li><a class="nav-link-active" href="#">Predictions</a></li>
          <li><a href="account.html">My Account</a></li>
        </menu>
      </nav>
      <hr />
    </header>

      <main>App components go here</main>  

      <footer class="bg-dark text-white-50">
        <div class="container-fluid">
          <span class="text-reset">Logan Gibbons</span>
          <a class="text-reset" href="https://github.com/LoganGrant1999/startup.git">GitHub</a>
        </div>
      </footer>
    </div>
      
  
  );
}

