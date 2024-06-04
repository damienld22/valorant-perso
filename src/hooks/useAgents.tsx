import { useQuery } from "@tanstack/react-query";
import { Agent } from "../types/Agent";

const ENDPOINT =
  "https://valorant-api.com/v1/agents?isPlayableCharacter=true&language=fr-FR";

export function useAgents() {
  const { data, isSuccess } = useQuery({
    queryKey: ["agents"],
    queryFn: () => fetch(ENDPOINT).then((res) => res.json()),
  });

  if (isSuccess) {
    const agents = data.data as Agent[];
    return { agents };
  } else {
    return { agents: [] as Agent[] };
  }
}
