
import React from 'react';
import { useState } from 'react';

export function GameCard(props) {

    const [hasVoted, setVoted] = useState(false)

    const updateHasVoted = () => {
        setVoted(!hasVoted)
    }

    return(
        <div className="card">
                    <form>
                    <input type="radio" id="selection1" name="game1" value="BYU" />
                    <label htmlFor="selection1">{props.team1}</label>
                    <br /><br />

                    {/* Placeholder for calling to 3rd-party sports game API */}
                    <img src="byu-vs-baylor.png" alt="BYU versus Baylor matchup" />
                    <br /><br />
                    </form>

                    <form>
                    <input type="radio" id="selection2" name="game1" value="Baylor" />
                    <label htmlFor="selection2">{props.team2}</label>
                    <br /><br />

                    {!hasVoted ? <input type="button" value="Submit Choice" onClick={updateHasVoted} /> : <p>You've voted</p>}

                    </form>
                </div>
)}