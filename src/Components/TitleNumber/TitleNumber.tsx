import styles from './TitleNumber.module.css'

interface TitleNumberProp {
  showText: string,
  showNum: number,
}

function TitleNumber (props: TitleNumberProp) {
  return (
    <div className={styles.title}>
      <h3 className={styles.title__name}>{props.showText}</h3>
      <h2 className={styles.title__number}>{props.showNum}</h2>
    </div>
  );
}

export default TitleNumber;