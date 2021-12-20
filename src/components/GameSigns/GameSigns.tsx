import React, { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { GameData, gameData } from '../../data/game-data';
import Button from '../Buttons/Button';
import './GameSigns.scss';

type GameSignsProps = {
  onMouseEnter: (value: GameData) => void;
  onMouseLeave: () => void;
  onClick: (value: string) => void;
}

const GameSigns:FC<GameSignsProps> = ({ onMouseEnter, onMouseLeave, onClick }) => (
  <div className="game-sign-buttons-wrapper">
    <div className="game-sign-buttons">
      {
        gameData.map((button, index) => (
          <Button
            key={button.name}
            additionalClasses={`button--game-sign game-sign-buttons__${index}`}
            onMouseEnter={() => onMouseEnter(button)}
            onMouseLeave={() => onMouseLeave()}
            onClick={() => onClick(button.name)}
          >
            <FontAwesomeIcon icon={button.icon} className="game-sign-icon" />
          </Button>
        ))
      }
    </div>
  </div>
);

export default GameSigns;
