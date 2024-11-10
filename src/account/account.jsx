import React from 'react';
import './profile.css';
import { Link } from 'react-router-dom';


export function Account() {
  return (
    <main>

      <h1 className="streak">Your current prediction streak is at 4!</h1>
      <p><span className="email">Account Email:</span> logan@fanvote.click</p>

      <h3>Voter History:</h3>

      {/* Placeholder for database data of user voting history */}
      <ul className='history'>

        <li className="list-text">
          - You correctly predicted the Saints would beat the Cowboys!
        </li>

        <li className="list-text">
          - You correctly predicted the Gamecocks would beat the Wildcats!
        </li>

        <li className="list-text">
          - You correctly predicted the Braves would beat the Royals!
        </li>

        <li className="list-text">
          - You correctly predicted the Saints would beat the Cowboys!
        </li>

        <li className="list-text">
          - You incorrectly predicted the Tigers would beat the Irish!
        </li>

      </ul>


      <div className="image-box" id="image">
        <img src="sports-banner.jpg" alt="banner of multiple sports being played" />
      </div>

      <Link className="log-out" to="/">Log Out</Link>
      
    </main>
  );
}

export default Account;
