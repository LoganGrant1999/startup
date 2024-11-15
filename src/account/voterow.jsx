import React from 'react';

export function VoteRow({ vote }) {
  const { pick, loser } = vote;
  return (
    <tr>
      <td>- You predicted the {pick} would beat the {loser}!</td>
    </tr>
  );
}