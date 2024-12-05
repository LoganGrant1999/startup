import React, { useState, useEffect } from 'react';
import './predict.css';
import { GameCard } from './gameCard';
import { predictionSocket, GameEvent } from './predictionNotifier';

export function Predictions() {
  const userName = localStorage.getItem('userName') || 'No UserName Saved';
  const [games, setGames] = useState([]);
  const [userVotes, setUserVotes] = useState([]);

  useEffect(() => {
    const fetchGames = () => {
      fetch(`https://www.thesportsdb.com/api/v1/json/${import.meta.env.VITE_SPORTS_API_KEY}/eventsnextleague.php?id=4387`)
        .then((response) => response.json())
        .then((data) => {
          if (data.events && Array.isArray(data.events)) {
            const currentTime = new Date();
            const upcomingGames = data.events.filter((game) => {
              if (!game.dateEventLocal || !game.strTimeLocal) return false;
              const gameStart = new Date(`${game.dateEventLocal}T${game.strTimeLocal}`);
              game.adjustedDate = gameStart;
              return gameStart > currentTime;
            });
            setGames(upcomingGames);
          } else {
            console.error('Error fetching games', data);
          }
        })
        .catch(console.error);
    };

    const fetchUserVotes = () => {
      fetch('/api/votes')
        .then((response) => response.json())
        .then((votes) => setUserVotes(votes))
        .catch(console.error);
    };

    fetchGames();
    fetchUserVotes();

    const interval = setInterval(fetchGames, 60 * 60 * 1000);

    const handleWebSocketMessage = (message) => {
      if (message.type === GameEvent.NewVote) {
        setUserVotes((prev) => [message.payload, ...prev].slice(0, 5)); // Keep only the 5 most recent votes
      }
    };

    predictionSocket.addHandler(handleWebSocketMessage);

    return () => {
      clearInterval(interval);
      predictionSocket.removeHandler(handleWebSocketMessage);
    };
  }, []);

  return (
    <div className="body">
      <main>
        <div className="user-and-leaderboard">
          <div className="user">
            <h3>Player: {userName}</h3>
          </div>

          <div className="leaderboard" id="leaderboard-color">
            <h3 className="leader-title">Recent Votes:</h3>
            <ul className="scores">
              {userVotes.length > 0 ? (
                userVotes.map((vote, index) => (
                  <li key={index} className="user-name">
                    - {vote.name} predicted the {vote.vote} would beat the {vote.loser}!
                  </li>
                ))
              ) : (
                <li className="user-name">No recent votes yet.</li>
              )}
            </ul>
          </div>
        </div>

        <h1 className="upcoming">Upcoming Games</h1>

        <div className="container">
          {games.map((game) => (
            <GameCard
              key={game.idEvent}
              team1={game.strHomeTeam}
              team2={game.strAwayTeam}
              upcoming_game={game.strThumb || 'nba.png'}
              date={game.adjustedDate}
              gameName={`${game.strHomeTeam} vs ${game.strAwayTeam}`}
              userVotes={userVotes}
            />
          ))}
        </div>

        <br />

        <div className="image-box" id="image">
          <img src="banner.png" alt="banner of multiple sports being played" />
        </div>
      </main>
    </div>
  );
}

export default Predictions;

