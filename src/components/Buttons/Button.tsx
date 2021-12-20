import React, { FC } from 'react';
import './Button.scss';

type ButtonProps = {
  additionalClasses?: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  onClick: () => void;
}

const Button:FC<ButtonProps> = ({
  children,
  additionalClasses,
  onMouseEnter,
  onMouseLeave,
  onClick,
}) => (
  <button
    className={`button ${additionalClasses}`}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;
