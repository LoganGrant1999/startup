import React from 'react';
import './profile.css';

export function Account() {
  return (
    <main>

      <p className="streak">Your current prediction streak is at 4!</p>
      <p><span className="email">Account Email:</span> logan@fanvote.click</p>

      <h3>Voter History:</h3>

      {/* Placeholder for database data of user voting history */}
      <ul>

        <li className="list1">
          You correctly predicted the Saints would beat the Cowboys!
        </li>

        <li className="list2">
          You correctly predicted the Gamecocks would beat the Wildcats!
        </li>

        <li className="list3">
          You correctly predicted the Braves would beat the Royals!
        </li>

        <li className="list4">
          You correctly predicted the Hurricanes would beat the Hokies!
        </li>

        <li className="list5">
          You correctly predicted the Saints would beat the Cowboys!
        </li>

        <li className="list6">
          You incorrectly predicted the Tigers would beat the Irish!
        </li>

      </ul>

      <br /><br />

      <div className="image-box" id="image">
        <img src="sports-banner.jpg" alt="banner of multiple sports being played" />
      </div>

      <a className="log-out" href="index.html">Log Out</a>
    </main>
  );
}

export default Account;
