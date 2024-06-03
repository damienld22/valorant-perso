import { Map } from "../../types/Map";
import { CardItem } from "../CardItem/CardItem";

interface Props {
  maps: Map[];
}

export function MapsList({ maps }: Props) {
  return (
    <div>
      {maps.map((map) => (
        <CardItem
          key={map.uuid}
          image={map.listViewIcon}
          title={map.displayName}
        />
      ))}
    </div>
  );
}
