async function saveVote() {
  if (!prediction) return;

  const newVote = {
    name: userName,
    vote: prediction,
    loser: loser,
    game: `${props.team1} vs ${props.team2}`,
  };

  try {
    const response = await fetch('/api/votes', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(newVote),
    });

    if (response.ok) {
      setVoted(true);
      predictionSocket.sendMessage(GameEvent.NewVote, newVote);
    } else {
      const errorText = await response.text();
      console.error('Error submitting vote:', errorText);
    }
  } catch (error) {
    console.error('Error submitting vote:', error);
  }
}
