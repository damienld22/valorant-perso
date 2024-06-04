import { useParams } from "react-router-dom";
import { Page } from "../components/Page/Page";
import { Title } from "../components/Title/Title";
import { useMap } from "../hooks/useMap";
import { useAgents } from "../hooks/useAgents";
import styles from "./MapDetails.module.css";

export function MapDetails() {
  const { id } = useParams();
  const { data } = useMap(id as string);
  const { agents } = useAgents();

  return (
    <Page>
      <Title title={data.displayName} />

      <img style={{ width: "80vw" }} src={data.splash} alt={data.displayName} />

      <div>
        {agents.map((agent) => (
          <div key={agent.uuid} className={styles.container}>
            <div className={styles["agent-item"]}>
              <p>{agent.displayName}</p>
              <img
                className={styles["agent-image"]}
                src={agent.displayIconSmall}
                alt={agent.displayName}
              />
            </div>

            <p className={styles.score}>80%</p>
          </div>
        ))}
      </div>
    </Page>
  );
}
