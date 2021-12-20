import React, { FC } from 'react';
import './Score.scss';

type ScoreProps = {
  score: {
    wins: number;
    ties: number;
    losses: number;
  }
}

const Score:FC<ScoreProps> = ({ score }) => (
  <div className="results-wrapper">
    <span>
      {`Wins: ${score.wins}`}
    </span>
    <span>
      {`Ties: ${score.ties}`}
    </span>
    <span>
      {`Losses: ${score.losses}`}
    </span>
  </div>
);

export default Score;
