import { gameData } from '../data/game-data';

const getRandomSignName = () => {
  const randomNumber = Math.floor(Math.random() * gameData.length);
  return gameData[randomNumber].name;
};

const getTurnResult = (playersSign: string, computersSign: string) => {
  const signIndex = gameData.findIndex((sign) => sign.name === playersSign);

  if (gameData[signIndex].winsAgainst.includes(computersSign)) {
    return 'wins';
  } if (gameData[signIndex].losesAgainst.includes(computersSign)) {
    return 'losses';
  }

  return 'ties';
};

export { getRandomSignName, getTurnResult };
