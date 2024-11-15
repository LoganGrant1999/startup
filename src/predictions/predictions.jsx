import React from 'react';
import './predict.css';
import {GameCard} from "./gameCard";


export function Predictions() {
  const userName = localStorage.getItem("userName") || "No UserName Saved";
  return (
    <div className='body'>
      <main>
        <div className="user-and-leaderboard">
          <div className="user">
            <h3>Player: {userName}</h3>
          </div>

          {/* Placeholders for websocket display of live user votes*/}
          <div className="leaderboard" id="leaderboard-color">
            <h3 className="leader-title">Recent Votes:</h3>
            <ul className="scores">
              <li className="user-name">- Kelly predicted the Bengals will win!</li>
              <li className="user-name">- Chris predicted the Braves will win!</li>
              <li className="user-name">- Jake predicted the Cougars will win!</li>
            </ul>
          </div>
        </div>

        <h1 className="upcoming">Upcoming Games</h1>

        <div className="container">
          {/* Placeholders for calling to 3rd-party sports game API */}
          <GameCard team1="BYU Cougars" team2="Baylor Bears" upcoming_game='byu-vs-baylor.png'/>
          <GameCard team1="Knicks" team2="Hornets" upcoming_game='knicks-vs-hornets.png'/>
          <GameCard team1="Bengals" team2="Panthers" upcoming_game='bengals-vs-panthers.png'/>
          <GameCard team1= "Royals" team2="Braves" upcoming_game='royals-vs-braves.png'/>
        </div>

        <br />

        <div className="image-box" id="image">
          <img src="sports-banner-color.png" alt="banner of multiple sports being played" />
        </div>
      </main>
    </div>  
  );
}

export default Predictions;
