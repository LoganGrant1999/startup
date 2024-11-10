import React from 'react';
import './login.css';
import { Link } from 'react-router-dom';

export function Login() {
  return (
    <main class="container-fluid text-center">

    <div class="login">
      <div>
        <h1>Welcome to FanVote</h1>
      </div>
      
      <form>

        <div class="input-group mb-3">
          <span class="input-group-text">@</span>
          <input class="form-control" type="text" placeholder="your@email.com" />
        </div>

        <div class="input-group mb-3">
          <span class="input-group-text">🔒</span>
          <input class="form-control" type="password" placeholder="password" />
        </div>

        <Link to="/predictions">
          <button type="submit" className="btn btn-primary me-2" id="login-button">Login</button>
        </Link>

        <Link to="/predictions">
          <button type="submit" className="btn btn-secondary" id="create-button">Create</button>
        </Link>

      </form>

    </div>

    <p>
      FanVote brings the excitement of live sports to your fingertips by letting you vote in real-time on who you think will win upcoming and ongoing games.
      Whether it's soccer, basketball, or any other major sport, users can see live updates, engage in friendly competition with others, and track the accuracy
      of their predictions. FanVote transforms sports watching into an interactive experience, making it fun to see how your votes stack up against your friends
      and the rest of the world.
    </p>

  </main>
  );
}

export default Login;
