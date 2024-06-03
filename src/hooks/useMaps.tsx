import { useQuery } from "@tanstack/react-query";
import { Map } from "../types/Map";

const ENDPOINT = "https://valorant-api.com/v1/maps";

export function useMaps() {
  const { data, isSuccess } = useQuery({
    queryKey: ["maps"],
    queryFn: () => fetch(ENDPOINT).then((res) => res.json()),
  });

  if (isSuccess) {
    const maps = data.data.map(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (map: any) =>
        ({
          uuid: map.uuid,
          displayName: map.displayName,
          listViewIcon: map.listViewIcon,
        } as Map)
    ) as Map[];

    return { maps };
  } else {
    return { maps: [] };
  }
}
