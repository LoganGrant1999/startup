
import React from 'react';
import { useState } from 'react';

export function GameCard(props) {

    const [hasVoted, setVoted] = useState(false)

    const updateHasVoted = () => {
        setVoted(true)
    }

    return(
        <div className="card">
            <form>
                <input type="radio" id="selection1" name={`${props.team1}-vs-${props.team2}`}/>
                <label htmlFor="selection1">{props.team1}</label>

                <br /><br />

                {/* Placeholder for calling to 3rd-party sports game API */}
                <img src={props.upcoming_game} alt="upcoming matchup" />
                <br /><br />

                <input type="radio" id="selection2" name={`${props.team1}-vs-${props.team2}`}/>

                <label htmlFor="selection2">{props.team2}</label>
                <br /><br />

                {!hasVoted ? ( <input type="button" value="Submit Choice" onClick={updateHasVoted} /> ) : ( <p>Vote Sumbitted! ✅</p> )}

            </form>
        </div>
    );
}

