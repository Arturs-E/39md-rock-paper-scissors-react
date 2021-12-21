import React, { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './TurnResults.scss';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { TurnInformation } from '../../App';

type TurnResultsProps = {
  turnInformation: TurnInformation | undefined;
  getTurnIcon: (value: string) => IconDefinition;
}

const TurnResults:FC<TurnResultsProps> = ({ turnInformation, getTurnIcon }) => (
  <div className="turn-result-container">
    <div className="nes-container is-dark with-title">
      <h3 className="title">PLAYER</h3>
      <div className="turn-result">
        {turnInformation && (
          <FontAwesomeIcon
            icon={getTurnIcon(turnInformation.player)}
            className="game-sign-icon"
            style={{ transform: 'rotateY(180deg)', color: turnInformation.playerIconColor }}
          />
        )}
      </div>
    </div>
    <div className="turn-result-wrapper">
      {turnInformation?.result === 'wins' && 'Player wins!'}
      {turnInformation?.result === 'losses' && 'SKYNET wins!'}
      {turnInformation?.result === 'ties' && "It's a tie!"}
    </div>
    <div className="nes-container is-dark with-title">
      <h3 className="title">SKYNET</h3>
      <div className="turn-result">
        {turnInformation && (
          <FontAwesomeIcon
            icon={getTurnIcon(turnInformation.computer)}
            className="game-sign-icon"
            style={{ color: turnInformation.computerIconColor }}
          />
        )}
      </div>
    </div>
  </div>
);

export default TurnResults;
