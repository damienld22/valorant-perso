import { MapsList } from "../components/MapsList/MapsList";
import { Page } from "../components/Page/Page";
import { useMaps } from "../hooks/useMaps";

function Maps() {
  const { maps } = useMaps();

  return (
    <Page title="Choix de la carte">
      <MapsList maps={maps} />
    </Page>
  );
}

export default Maps;
