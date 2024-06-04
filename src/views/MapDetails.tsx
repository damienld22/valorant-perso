import { useParams } from "react-router-dom";
import { Page } from "../components/Page/Page";
import { Title } from "../components/Title/Title";
import { useMap } from "../hooks/useMap";
import { useAgents } from "../hooks/useAgents";
import { useAgentScorePerMap } from "../hooks/useAgentScorePerMap";
import { AgentStats } from "../components/AgentStats/AgentStats";

export function MapDetails() {
  const { id } = useParams();
  const { data } = useMap(id as string);
  const { agents } = useAgents();
  const { scores } = useAgentScorePerMap(data.displayName?.toLowerCase());

  return (
    <Page>
      <Title title={data.displayName} />

      <img style={{ width: "80vw" }} src={data.splash} alt={data.displayName} />

      <>
        {scores.map((score) => (
          <AgentStats
            key={score.playerName}
            score={score}
            agent={
              agents.find(
                (elt) =>
                  elt.displayName.toLowerCase() ===
                  score.playerName.toLowerCase()
              )!
            }
          />
        ))}
      </>
    </Page>
  );
}
