import { useParams } from "react-router-dom";
import { Page } from "../components/Page/Page";
import { Title } from "../components/Title/Title";
import { useMap } from "../hooks/useMap";
import { useAgents } from "../hooks/useAgents";
import { useAgentScorePerMap } from "../hooks/useAgentScorePerMap";
import { AgentStats } from "../components/AgentStats/AgentStats";
import { useState } from "react";

export function MapDetails() {
  const { id } = useParams();
  const { data } = useMap(id as string);
  const { agents } = useAgents();
  const { scores } = useAgentScorePerMap(data.displayName?.toLowerCase());
  const [typeFilter, setTypeFilter] = useState("all");

  return (
    <Page>
      <Title title={data.displayName} />

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

      <>
        {scores.length > 0 &&
          agents
            .filter(
              (elt) =>
                elt.role.displayName === typeFilter || typeFilter === "all"
            )
            .map((agent) => (
              <AgentStats
                key={agent.uuid}
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
