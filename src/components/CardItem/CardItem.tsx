import styles from "./CardItem.module.css";

interface CardItemProps {
  image: string;
  title: string;
}

export function CardItem(props: CardItemProps) {
  return (
    <div className={styles.container}>
      <p className={styles.text}>{props.title}</p>
      <img className={styles.image} src={props.image} alt={props.title} />
    </div>
  );
}
