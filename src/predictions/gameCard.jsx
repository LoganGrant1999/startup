import React, { useEffect, useState } from 'react';


export function GameCard(props) {

    const [hasVoted, setVoted] = useState(false)
    const [prediction, setPrediction] = useState("")
    const [loser, setLoser] = useState("")
    const userName = localStorage.getItem("userName") || "No UserName Saved";
    const userVote = props.userVotes.find((vote) => vote.game === props.gameName);

    useEffect(() => {
        if (userVote) {
            setPrediction(userVote.vote);
            setLoser(userVote.loser);
            setVoted(true);
        }
    }, [userVote]);


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
        if (!prediction) return;

        const formattedDate = formatDate(props.date);

        const newVote = { name: userName, vote: prediction, loser: loser, date: formattedDate, game: `${props.team1} vs ${props.team2}`};
        
        try {
        const response = await fetch('/api/votes', {
          method: 'POST',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify(newVote),
        });

        if (response.status == 200) {
            setVoted(true);  
        }
        else {
            console.log('error')   
        } 
    } 
    catch (error) {
        console.error('error')
        }
      }

    const selection = (team) => {
        setPrediction(team);
        setLoser(team === props.team1 ? props.team2 : props.team1);
    };


    return(
        <div className="card">
            <p class='date'>{formatDate(props.date)}</p>
            <form>
                <input type="radio" id={props.game + props.team1} name={`${props.team1}-vs-${props.team2}`} onChange={() => selection(props.team1)} checked={prediction === props.team1} disabled={hasVoted}/>
                <label htmlFor={props.game + props.team1}>{props.team1}</label>

                <br /><br />

                <img src={props.upcoming_game} alt="upcoming matchup" />
                <br /><br />

                <input type="radio" id={props.game + props.team2} name={`${props.team1}-vs-${props.team2}`} onChange={() => selection(props.team2)}checked={prediction === props.team2} disabled={hasVoted}/>

                <label htmlFor={props.game + props.team2}>{props.team2}</label>
                <br /><br />

                {!hasVoted ? (<input class='submit' type="button" value="Submit Choice" onClick={saveVote} disabled={!prediction} />) : ( <p>Vote Submitted! ✅</p> )}

            </form>
        </div>
    );
};