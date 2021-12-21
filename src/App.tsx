import React, { useState } from 'react';
import './App.scss';
import {
  gameData, GameData, lostTurnSound, navigationSound,
} from './data/game-data';
import { getRandomSignName, getTurnResult } from './helpers/helper-functions';
import GameSigns from './components/GameSigns/GameSigns';
import Score from './components/Score/Score';
import SignsInformationPanel from './components/SignsInformationPanel/SignsInformationPanel';
import TurnResults from './components/TurnResults/TurnResults';

const initialScore = {
  wins: 0,
  ties: 0,
  losses: 0,
};
export type TurnInformation = {
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
        <div className="content-wrapper">
          <Score score={score} />
          <div className="game-signs-information-wrapper">
            <GameSigns onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} onClick={makeTurn} />
            <SignsInformationPanel signDescription={signDescription} />
          </div>
          <TurnResults turnInformation={turnInformation} getTurnIcon={getTurnIcon} />
        </div>
      </div>
    </div>
  );
};

export default App;
