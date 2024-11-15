import React, { useEffect } from 'react';
import './profile.css';
import { Link } from 'react-router-dom';
import { VoteRow } from './voterow';


export function Account() {
    const [votes, setVotes] = React.useState([]);

    const freshVotes = () => {
      const votesText = localStorage.getItem('votes')
      if (votesText) {
        const storeVotes = JSON.parse(votesText);
        setVotes(storedVotes.slice(0,5));
      }
    }

    useEffect(() => {
      freshVotes();
    }, []);

    return (
    <main>

      <h1 className="streak">You've made 5 game predictions!</h1>
      <p><span className="email">Account Email:</span> logan@fanvote.click</p>

      <h3>Voter History:</h3>

      {/* Placeholder for database data of user voting history */}

      <table>
        <thead>
          <tr>
            <th>
              Your Vote History: 
            </th>
          </tr>
        </thead>
        <tbody>
          {votes.lenth > 0 ? (
            votes.map((votes, index) => (
              <VoteRow key={index} pick={pick} loser={loser}/>

            ))
          ) : (
            <tr>
              <td>
                You haven't made any predictions!
              </td>
            </tr>
          )}
        </tbody>
      </table>


      <div className="image-box" id="image">
        <img src="sports-banner.jpg" alt="banner of multiple sports being played" />
      </div>

      <Link className="log-out" to="/">Log Out</Link>
      
    </main>
  );
}

export default Account;
