import React from 'react';
import './predict.css';

export function Predictions() {
  return (
    <main>
      <div className="user-and-leaderboard">
        <div className="user">
          <h3>Player: Current User</h3>
          <div>
            <label htmlFor="count">Prediction Streak:</label>
            <input type="text" id="count" value="--" readOnly />
          </div>
        </div>

        <div className="leaderboard">
          <h3 className="leader-title">Leaderboard</h3>
          <ul className="scores">
            <li className="user-name">Kelly has predicted 6 in a row!</li>
            <li className="user-name">Chris has predicted 4 in a row!</li>
            <li className="user-name">Jake has predicted 3 in a row!</li>
          </ul>
        </div>
      </div>

      <h1 className="upcoming">Upcoming Games</h1>

      <div className="container">
        <div className="card">
          <form>
            <input type="radio" id="selection1" name="game1" value="BYU" />
            <label htmlFor="selection1">BYU</label>
            <br /><br />

            {/* Placeholder for calling to 3rd-party sports game API */}
            <img src="byu-vs-baylor.png" alt="BYU versus Baylor matchup" />
            <br /><br />
          </form>

          <form>
            <input type="radio" id="selection2" name="game1" value="Baylor" />
            <label htmlFor="selection2">Baylor</label>
            <br /><br />

            <input type="button" value="Submit Choice" />
          </form>
        </div>

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
  );
}

export default Predictions;
