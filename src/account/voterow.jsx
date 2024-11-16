import React from 'react';

export function VoteRow({ vote }) {
  const { pick, loser } = vote;
  return (
    <tr>
      <td>- You predicted the {vote.vote} would beat the {vote.loser}!</td>
    </tr>
  );
}