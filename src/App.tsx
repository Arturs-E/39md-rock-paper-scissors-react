import React, { useState } from 'react';
import './App.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  gameData, GameData, lostTurnSound, navigationSound,
} from './data/game-data';
import { getRandomSignName, getTurnResult } from './helpers/helper-functions';
import GameSigns from './components/GameSigns/GameSigns';
import Score from './components/Score/Score';
import SignsInformationPanel from './components/SignsInformationPanel/SignsInformationPanel';

const initialScore = {
  wins: 0,
  ties: 0,
  losses: 0,
};
type TurnInformation = {
  player: string;
  computer: string;
  result: string;
  playerIconColor: string;
  computerIconColor: string;
}

const App = () => {
  const [score, setScore] = useState(initialScore);
  const [signDescription, setSignDescription] = useState<GameData>();
  const [turnInformation, setTurnInformation] = useState<TurnInformation>();

  const onMouseEnter = (sign: GameData) => {
    setSignDescription(sign);
    navigationSound.play();
  };

  const onMouseLeave = () => {
    setSignDescription(undefined);
  };

  const makeTurn = (playersSignName: string) => {
    const computerSignName = getRandomSignName();
    const turnResult = getTurnResult(playersSignName, computerSignName);

    const getIconColors = () => {
      if (turnResult === 'wins') {
        return { playerIconColor: '#92cc41', computerIconColor: '#e76e55' };
      } if (turnResult === 'losses') {
        return { playerIconColor: '#e76e55', computerIconColor: '#92cc41' };
      }
      return { playerIconColor: '#f7d51d', computerIconColor: '#f7d51d' };
    };

    setTurnInformation({
      player: playersSignName, computer: computerSignName, result: turnResult, ...getIconColors(),
    });

    if (turnResult === 'losses') {
      lostTurnSound.play();
    }

    setTimeout(() => {
      setScore({ ...score, [turnResult]: score[turnResult] + 1 });
      // setTurnInformation(undefined);
    }, 1000);
  };

  const getTurnIcon = (value: string) => gameData.find((sign) => sign.name === value)!.icon;

  return (
    <div className="App">
      <div className="content-container">
        <div className="heading-wrapper">
          <h1 className="heading1">ROCK, PAPER, SCISSORS, LIZARD, SPOCK</h1>
        </div>
        <Score score={score} />

        <div className="game-signs-information-wrapper">
          <GameSigns onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} onClick={makeTurn} />
          <SignsInformationPanel signDescription={signDescription} />
        </div>

        <div className="turn-result-container">
          <div className="nes-container is-dark with-title">
            <h3 className="title">PLAYER</h3>
            <div className="turn-result">
              {/* <img src="./assets/unnamed.png" alt="player-logo" className="turn-result-player-image" /> */}
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
              {/* <img src="./assets/cyberdyne.png" alt="player-logo" className="turn-result-player-image" /> */}
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

      </div>
    </div>
  );
};

export default App;
