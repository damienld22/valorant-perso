import { useQuery } from "@tanstack/react-query";
import { ScorePerMapPlayer } from "../types/ScorePerMap";

export function useAgentScorePerMap(mapName: string) {
  const { data, isSuccess } = useQuery({
    queryKey: ["scores", mapName],
    queryFn: () =>
      fetch(`/valorant-perso/data/${mapName}-scores.json`).then((res) =>
        res.json()
      ),
    enabled: !!mapName,
  });

  if (isSuccess) {
    const scores = data as ScorePerMapPlayer[];
    return { scores };
  } else {
    return { scores: [] as ScorePerMapPlayer[] };
  }
}
