import { useQuery } from "@tanstack/react-query";

export function useProposedAgentPerMap(mapName: string) {
  const { data, isSuccess } = useQuery({
    queryKey: ["proposedAgents", mapName],
    queryFn: () =>
      fetch(`/valorant-perso/data/best-agents-per-map.json`).then((res) =>
        res.json()
      ),
    enabled: !!mapName,
  });

  if (isSuccess) {
    const agents = data[mapName.toLowerCase()] as string[];
    return { agents };
  } else {
    return { agents: [] as string[] };
  }
}
