import { useQuery } from "@tanstack/react-query";
import { Map } from "../types/Map";

const ENDPOINT = "https://valorant-api.com/v1/maps";

const WANTED_MAPS = [
  "split",
  "ascent",
  "bind",
  "lotus",
  "icebox",
  "breeze",
  "sunset",
];

export function useMaps() {
  const { data, isSuccess } = useQuery({
    queryKey: ["maps"],
    queryFn: () => fetch(ENDPOINT).then((res) => res.json()),
  });

  if (isSuccess) {
    const maps = data.data as Map[];
    return {
      maps: maps.filter((map) =>
        WANTED_MAPS.includes(map.displayName.toLowerCase())
      ),
    };
  } else {
    return { maps: [] };
  }
}
