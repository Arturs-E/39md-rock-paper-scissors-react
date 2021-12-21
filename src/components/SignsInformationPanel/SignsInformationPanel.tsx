import React, { FC } from 'react';
import { GameData } from '../../data/game-data';
import './SignsInformationPanel.scss';

type SignsInformationPanelProps = {
  signDescription: GameData | undefined;
}

const SignsInformationPanel:FC<SignsInformationPanelProps> = ({ signDescription }) => (
  <div className="nes-container is-dark with-title game-signs-information">
    <h3 className="title game-signs-information__heading">Sign info</h3>
    {signDescription && (
      <>
        <h4 className="game-signs-information__title">{signDescription.name}</h4>
        <div className="game-signs-information__list-wrapper">
          <span>Wins against:</span>
          <ul className="nes-list is-disc game-signs-information__list">
            {signDescription.winsAgainst.map((value) => (<li key={value}>{value}</li>))}
          </ul>
        </div>
        <div className="game-signs-information__list-wrapper">
          <span>Loses against:</span>
          <ul className="nes-list is-circle game-signs-information__list">
            {signDescription.losesAgainst.map((value) => (<li key={value}>{value}</li>))}
          </ul>
        </div>
      </>
    )}
  </div>
);

export default SignsInformationPanel;
