import { useNavigate } from "react-router-dom";
import styles from "./Title.module.css";

interface Props {
  title: string;
  withBackButton?: boolean;
}

export function Title({ title, withBackButton }: Props) {
  const navigate = useNavigate();

  return (
    <div className={styles.titleContainer}>
      {withBackButton && (
        <p className={styles.backButton} onClick={() => navigate("/")}>
          &#65513;
        </p>
      )}
      <h1 className={styles.title}>{title}</h1>
      {withBackButton && <p></p>}
    </div>
  );
}
