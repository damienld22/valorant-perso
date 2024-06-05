import { Title } from "../Title/Title";
import styles from "./Page.module.css";

interface Props {
  children: React.ReactNode;
  title: string;
  withBackButton?: boolean;
}

export function Page({ children, title, withBackButton }: Props) {
  return (
    <div className={styles.container}>
      <Title title={title} withBackButton={withBackButton} />
      <div className={styles.content}>{children}</div>
    </div>
  );
}
