import {
  faHandPaper, faHandRock, faHandScissors, faHandLizard, faHandSpock,
} from '@fortawesome/free-regular-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

type GameData = {
  name: string;
  winsAgainst: string[];
  losesAgainst: string[];
  // imgSrc: string;
  icon: IconDefinition;
}

const gameData: GameData[] = [
  {
    name: 'rock',
    winsAgainst: ['scissors', 'lizard'],
    losesAgainst: ['paper', 'spock'],
    // imgSrc: './assets/signs/rock.jpg',
    icon: faHandRock,
  },
  {
    name: 'paper',
    winsAgainst: ['rock', 'spock'],
    losesAgainst: ['scissors', 'lizard'],
    // imgSrc: './assets/signs/paper.jpg',
    icon: faHandPaper,
  },
  {
    name: 'scissors',
    winsAgainst: ['paper', 'lizard'],
    losesAgainst: ['rock', 'spock'],
    // imgSrc: './assets/signs/scissors.jpg',
    icon: faHandScissors,
  },
  {
    name: 'lizard',
    winsAgainst: ['spock', 'paper'],
    losesAgainst: ['rock', 'scissors'],
    // imgSrc: './assets/signs/lizard.jpg',
    icon: faHandLizard,
  },
  {
    name: 'spock',
    winsAgainst: ['scissors', 'rock'],
    losesAgainst: ['lizard', 'paper'],
    // imgSrc: './assets/signs/spock.jpg',
    icon: faHandSpock,
  },
];

export { gameData };
export type { GameData };