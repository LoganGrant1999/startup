import React, { useEffect } from 'react';
import './profile.css';
import { Link } from 'react-router-dom';
import { VoteRow } from './voterow';


export function Account() {
    const [votes, setVotes] = React.useState([]);

    React.useEffect(() => {
      fetch('/api/votes')
      .then((response) => response.json())
      .then((votes) => {
        setVotes(votes);
      });
    }, []);

    return (
    <main>

      <h1 className="streak">You've made {votes.length} game predictions!</h1>

      <h3>Voter History:</h3>

      {/* Placeholder for database data of user voting history */}

      <table>
        <thead>
        </thead>
        <tbody>
          {votes.length > 0 ? (
            votes.slice().reverse().map((vote, index) => (
              <VoteRow key={index} vote={vote} />

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

      
    </main>
  );
}

export default Account;
