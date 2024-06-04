import { Agent } from "../../types/Agent";
import { ScorePerMapPlayer } from "../../types/ScorePerMap";
import styles from "./AgentStats.module.css";

interface AgentStatsProps {
  agent: Agent;
  score: ScorePerMapPlayer;
}

export function AgentStats(props: AgentStatsProps) {
  return (
    <div key={props.score.playerName} className={styles.container}>
      <div className={styles["agent-item"]}>
        <p>{props.score.playerName}</p>
        <img
          className={styles["agent-image"]}
          src={props.agent.displayIconSmall}
          alt={props.score.playerName}
        />
        <p className={styles.role}>{props.agent.role.displayName}</p>
      </div>

      <p className={styles.score}>{props.score.victoryPercentage}%</p>
      <p className={styles.averageScore}>({props.score.averageScore} pts)</p>
    </div>
  );
}
