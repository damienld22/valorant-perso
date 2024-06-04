import { useQuery } from "@tanstack/react-query";
import { Map } from "../types/Map";

const ENDPOINT = "https://valorant-api.com/v1/maps";

export function useMaps() {
  const { data, isSuccess } = useQuery({
    queryKey: ["maps"],
    queryFn: () => fetch(ENDPOINT).then((res) => res.json()),
  });

  if (isSuccess) {
    const maps = data.data as Map[];
    return { maps };
  } else {
    return { maps: [] };
  }
}
