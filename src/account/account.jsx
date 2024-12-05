import React, { useEffect, useState } from 'react';
import './profile.css';
import { Link } from 'react-router-dom';
import { VoteRow } from './voterow';

export function Account() {

  const [votes, setVotes] = useState([]);
  useEffect(() => {
    const fetchVotes = () => {
      fetch('/api/votes')
        .then((response) => response.json())
        .then((allVotes) => {
          setVotes(allVotes);
        })
    };

    fetchVotes();
  }, []); 



    return (
    <main>

      <h1 className="streak">You've made {votes.length} game predictions!</h1>

      <h3>Voter History:</h3>

      <table>
        <thead>
        </thead>
        <tbody>
          {votes.length > 0 ? (
            votes.slice().reverse().slice(0,5).map((vote, index) => (
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
        <img src="basketball.png" alt="banner of multiple sports being played" />
      </div>

      
    </main>
  );
}

export default Account;
