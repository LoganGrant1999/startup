
import React, { useEffect, useState } from 'react';


export function GameCard(props) {

    const [hasVoted, setVoted] = useState(false)
    const [prediction, setPrediction] = useState("")
    const [loser, setLoser] = useState("")
    const [date, setDate] = useState("")
    const userName = localStorage.getItem("userName") || "No UserName Saved";
    const formattedDate = formatDate(props.data);

    function formatDate(dateString) {
        if (!dateString) return 'Invalid Date';
        const date = new Date(dateString);
        if (isNaN(date.getTime())) return 'Invalid Date'; 
        return new Intl.DateTimeFormat('en-US', {
          month: 'short',
          day: 'numeric',
          year: 'numeric',
        }).format(date);
    }
    

    async function saveVote() {
        const newVote = { name: userName, vote: prediction, loser: loser, date: formattedDate, game: `${props.team1} vs ${props.team2}`};
        await fetch('/api/votes', {
          method: 'POST',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify(newVote),
        });
      }

    const selection = (team) => {
        setPrediction(team)
            if (team === props.team1) {
                setLoser(props.team2)
            }
            else {
                setLoser(props.team1)
            }
        }

    const updateHasVoted = () => {
        if (prediction) {
            const votes = JSON.parse(localStorage.getItem("votes")) || [];
            votes.push({
                name: userName,
                game: `${props.team1} vs ${props.team2}`,
                pick: prediction,
                loser: loser,
                date: formattedDate
            });

        localStorage.setItem("votes", JSON.stringify(votes));
        setVoted(true);
        }
    };


    return(
        <div className="card">
            <p className='date'>{formatDate(props.date)}</p>
            <form>
                <input type="radio" id="selection1" name={`${props.team1}-vs-${props.team2}`} onChange={() => selection(props.team1)}/>
                <label htmlFor="selection1">{props.team1}</label>

                <br /><br />

                {/* Placeholder for calling to 3rd-party sports game API */}
                <img src={props.upcoming_game} alt="upcoming matchup" />
                <br /><br />

                <input type="radio" id="selection2" name={`${props.team1}-vs-${props.team2}`} onChange={() => selection(props.team2)}/>

                <label htmlFor="selection2">{props.team2}</label>
                <br /><br />

                {!hasVoted ? (<input className='submit' type="button" value="Submit Choice" onClick={updateHasVoted} />) : (<>{(() => {saveVote();console.log("Vote Submitted!");return null;})()}<p>Vote Submitted! ✅</p></>)}

            </form>
        </div>
    );
};