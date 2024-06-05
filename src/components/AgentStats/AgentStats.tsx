import { Agent } from "../../types/Agent";
import { ScorePerMapPlayer } from "../../types/ScorePerMap";
import styles from "./AgentStats.module.css";

interface AgentStatsProps {
  agent: Agent;
  score: ScorePerMapPlayer;
  isBest: boolean;
}

export function AgentStats(props: AgentStatsProps) {
  return (
    <div key={props.score.playerName} className={styles.container}>
      <div className={styles["agent-item"]}>
        <p className={`${props.isBest && styles.isBest}`}>
          {props.score.playerName} {props.isBest && <span>&#11088;</span>}
        </p>
        <img
          className={styles["agent-image"]}
          src={props.agent.displayIconSmall}
          alt={props.score.playerName}
        />
        <p className={styles.role}>{props.agent.role.displayName}</p>
      </div>

      <p className={styles.score}>{props.score.victoryPercentage}%</p>
      <p className={styles.averageScore}>
        (moy: {props.score.averageScore} pts)
      </p>
    </div>
  );
}
