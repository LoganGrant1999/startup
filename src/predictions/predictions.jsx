import React from 'react';
import './predict.css';
import { GameCard } from "./gameCard";




export function Predictions() {
  const userName = localStorage.getItem("userName") || "No UserName Saved";
  const [games, setGames] = React.useState([]); 

  React.useEffect(() => {
    const fetchGames = () => {
      const API_KEY = import.meta.env.VITE_API_KEY;
      fetch(`https://www.thesportsdb.com/api/v1/json/${API_KEY}/eventsnextleague.php?id=4387`)
        .then((response) => response.json())
        .then((data) => {
          if (data.events) {
            const currentTime = new Date();
            const upcomingGames = data.events.filter(game => {
              const gameStart = new Date(`${game.dateEventLocal}T${game.strTimeLocal}`);
              return gameStart > currentTime;
            });
            setGames(upcomingGames);
          }
        })
        .catch((error) => {
          console.error("Couldn't find games:", error);
        });
    };

    fetchGames();

    const interval = setInterval(() => {
      fetchGames(); 
    }, 60 * 60 * 1000);

    return () => clearInterval(interval); 
  }, []); 


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
          {games.map((game)=> (
            <GameCard key={game.idEvent}
            team1={game.strHomeTeam}
            team2={game.strAwayTeam}
            upcoming_game={game.strThumb || 'nba.png'}
            date={new Date(game.dateEventLocal).setDate(new Date(game.dateEventLocal).getDate() + 1)}
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
