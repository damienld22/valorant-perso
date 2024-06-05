import { useParams } from "react-router-dom";
import { Page } from "../components/Page/Page";
import { useMap } from "../hooks/useMap";
import { useAgents } from "../hooks/useAgents";
import { useAgentScorePerMap } from "../hooks/useAgentScorePerMap";
import { AgentStats } from "../components/AgentStats/AgentStats";
import { useState } from "react";
import { useProposedAgentPerMap } from "../hooks/useProposedAgentPerMap";
import styles from "./MapDetails.module.css";

export function MapDetails() {
  const { id } = useParams();
  const { data } = useMap(id as string);
  const { agents } = useAgents();
  const { scores } = useAgentScorePerMap(data.displayName?.toLowerCase());
  const [typeFilter, setTypeFilter] = useState("all");
  const { agents: bestAgents } = useProposedAgentPerMap(
    data.displayName?.toLowerCase()
  );

  return (
    <Page title={data.displayName} withBackButton>
      <img style={{ width: "80vw" }} src={data.splash} alt={data.displayName} />

      <label htmlFor="select-type">Choix type</label>
      <select
        id="select-type"
        value={typeFilter}
        onChange={(evt) => setTypeFilter(evt.currentTarget.value)}
      >
        <option value="all">Tous</option>
        {[...new Set(agents.map((agent) => agent.role.displayName))].map(
          (type) => (
            <option key={type} value={type}>
              {type}
            </option>
          )
        )}
      </select>

      <p className={styles.legend}>&#11088; : Joueur préconisé pour la map</p>

      <>
        {scores.length > 0 &&
          agents
            .filter(
              (elt) =>
                elt.role.displayName === typeFilter || typeFilter === "all"
            )
            .sort((a, b) => {
              const scoreA = scores.find(
                (elt) =>
                  elt.playerName.toLowerCase() === a.displayName.toLowerCase()
              )!;
              const scoreB = scores.find(
                (elt) =>
                  elt.playerName.toLowerCase() === b.displayName.toLowerCase()
              )!;

              return scoreB.victoryPercentage - scoreA.victoryPercentage;
            })
            .map((agent) => (
              <AgentStats
                key={agent.uuid}
                isBest={bestAgents.includes(agent.displayName)}
                score={
                  scores.find(
                    (elt) =>
                      elt.playerName.toLowerCase() ===
                      agent.displayName.toLowerCase()
                  )!
                }
                agent={agent}
              />
            ))}
      </>
    </Page>
  );
}
