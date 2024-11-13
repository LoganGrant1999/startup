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
            <div>
              <label htmlFor="count">Prediction Streak:</label>
              <input type="text" id="count" value="--" readOnly />
            </div>
          </div>

          <div className="leaderboard" id="leaderboard-color">
            <h3 className="leader-title">Leaderboard</h3>
            <ul className="scores">
              <li className="user-name">- Kelly has predicted 6 in a row!</li>
              <li className="user-name">- Chris has predicted 4 in a row!</li>
              <li className="user-name">- Jake has predicted 3 in a row!</li>
            </ul>
          </div>
        </div>

        <h1 className="upcoming">Upcoming Games</h1>

        <div className="container">
          <GameCard team1="BYU" team2="Baylor"/>
          {/* <GameCard team1="Knicks" team2="Hornets"/>
          <GameCard team1="Bengals" team2="Panthers"/>
          <GameCard team1= "Royals" team2="Braves"/> */}
          <div className="card">
            <form>
              <input type="radio" id="selection3" name="game2" value="Knicks" />
              <label htmlFor="selection3">Knicks</label>
              <br /><br />

              {/* Placeholder for calling to 3rd-party sports game API */}
              <img src="knicks-vs-hornets.png" alt="Knicks versus Hornets matchup" />
              <br /><br />

              <input type="radio" id="selection4" name="game2" value="Hornets" />
              <label htmlFor="selection4">Hornets</label>
              <br /><br />

              <input type="button" value="Submit Choice" />
            </form>
          </div>

          <div className="card">
            <form>
              <input type="radio" id="selection5" name="game3" value="Bengals" />
              <label htmlFor="selection5">Bengals</label>
              <br /><br />

              {/* Placeholder for calling to 3rd-party sports game API */}
              <img src="bengals-vs-panthers.png" alt="Bengals versus Panthers matchup" />
              <br /><br />

              <input type="radio" id="selection6" name="game3" value="Panthers" />
              <label htmlFor="selection6">Panthers</label>
              <br /><br />

              <input type="button" value="Submit Choice" />
            </form>  
          </div>

          <div className="card">
            <form>
              <input type="radio" id="selection7" name="game4" value="Royals" />
              <label htmlFor="selection7">Royals</label>
              <br /><br />

              {/* Placeholder for calling to 3rd-party sports game API */}
              <img src="royals-vs-braves.png" alt="Royals versus Braves matchup" />
              <br />

              <input type="radio" id="selection8" name="game4" value="Braves" />
              <label htmlFor="selection8">Braves</label>
              <br /><br />

              <input type="button" value="Submit Choice" />
            </form>
          </div>
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
