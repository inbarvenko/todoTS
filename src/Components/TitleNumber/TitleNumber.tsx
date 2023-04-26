import React from 'react';
import styles from './TitleNumber.module.css'

interface Props {
  showText: string;
  showNum: number;
}

const TitleNumber: React.FC<Props> = (props) => {
  return (
    <div className={styles.title}>
      <h3 className={styles.title__name}>{props.showText}</h3>
      <h2 className={styles.title__number}>{props.showNum}</h2>
    </div>
  );
}

export default TitleNumber;