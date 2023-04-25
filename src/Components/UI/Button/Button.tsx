import React from 'react';
import styles from './Button.module.css'

interface ButtonProps {
  title: string,
  isButtonDisabled: boolean,
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

function Button(props: ButtonProps) {

  return (
    <button
      className={`${styles.button} ${props.isButtonDisabled ? styles.buttonHidden : ''}`}
      onClick={props.onClick}>
      {props.title}
    </button>
  );
}

export default Button;