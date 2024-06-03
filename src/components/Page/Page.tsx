import styles from "./Page.module.css";

interface Props {
  children: React.ReactNode;
}

export function Page({ children }: Props) {
  return <div className={styles.container}>{children}</div>;
}
