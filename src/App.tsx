import { MapsList } from "./components/MapsList/MapsList";
import { Page } from "./components/Page/Page";
import { Title } from "./components/Title/Title";
import { useMaps } from "./hooks/useMaps";

function App() {
  const { maps } = useMaps();

  return (
    <Page>
      <Title title="Choix de la carte" />

      <MapsList maps={maps} />
    </Page>
  );
}

export default App;
