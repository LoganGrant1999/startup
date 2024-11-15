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
        setVotes(storeVotes.slice(-5).reverse());
      }
    }

    useEffect(() => {
      freshVotes();
    }, []);

    return (
    <main>

      <h1 className="streak">You've made {votes.length} game predictions!</h1>
      <p><span className="email">Account Email:</span> logan@fanvote.click</p>

      <h3>Voter History:</h3>

      {/* Placeholder for database data of user voting history */}

      <table>
        <thead>
        </thead>
        <tbody>
          {votes.length > 0 ? (
            votes.map((vote, index) => (
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

      <Link className="log-out" to="/">Log Out</Link>
      
    </main>
  );
}

export default Account;
