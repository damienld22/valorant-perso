import styles from "./Title.module.css";

interface Props {
  title: string;
}

export function Title({ title }: Props) {
  return <h1 className={styles.title}>{title}</h1>;
}
