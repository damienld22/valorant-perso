import styles from "./CardItem.module.css";

interface CardItemProps {
  image: string;
  title: string;
  onClick: () => void;
}

export function CardItem(props: CardItemProps) {
  return (
    <div onClick={props.onClick} className={styles.container}>
      <p className={styles.text}>{props.title}</p>
      <img className={styles.image} src={props.image} alt={props.title} />
    </div>
  );
}
