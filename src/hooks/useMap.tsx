import { useQuery } from "@tanstack/react-query";
import { Map } from "../types/Map";

const ENDPOINT = "https://valorant-api.com/v1/maps";

export function useMap(id: string): { data: Map } {
  const { data, isSuccess } = useQuery({
    queryKey: [`map/${id}`],
    queryFn: () => fetch(`${ENDPOINT}/${id}`).then((res) => res.json()),
  });

  if (isSuccess) {
    return {
      data: data.data,
    };
  } else {
    return { data: {} as Map };
  }
}
