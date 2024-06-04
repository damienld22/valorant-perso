import { useNavigate } from "react-router-dom";
import { Map } from "../../types/Map";
import { CardItem } from "../CardItem/CardItem";

interface Props {
  maps: Map[];
}

export function MapsList({ maps }: Props) {
  const navigate = useNavigate();

  return (
    <div>
      {maps.map((map) => (
        <CardItem
          key={map.uuid}
          image={map.splash}
          title={map.displayName}
          onClick={() => navigate(`/maps/${map.uuid}`)}
        />
      ))}
    </div>
  );
}
