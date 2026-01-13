import { useState, useEffect } from "react";
import "./App.css";
import BackgroundEffects from "./components/BackgroundEffects";
import MainMenu from "./components/main-menu/MainMenu";
import StatsMenu from "./components/stats-menu/StatsMenu";
import { generateArtifact } from "./lib/artifact";
import type { ArtifactResponse, ArtifactState } from "./types/artifact";

export default function App() {
  const [artifactStat, setArtifactStat] = useState<ArtifactResponse | null>(
    null,
  );
  const [showAfter, setShowAfter] = useState(false);

  const artifactData: ArtifactState | undefined = showAfter
    ? artifactStat?.after
    : artifactStat?.before;

  const fetchArtifact = async () => {
    const artifact = await generateArtifact();
    setArtifactStat(artifact);
    setShowAfter(false);
  };

  const handleRollToMax = () => {
    setShowAfter(true);
  };

  useEffect(() => {
    fetchArtifact();
  }, []);

  if (!artifactData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-linear-to-tr from-yellow-800 via-yellow-700 to-yellow-950">
      <BackgroundEffects />
      <div className="relative z-10 flex min-h-screen justify-between">
        <MainMenu artifactType={artifactData.type} />
        <StatsMenu
          artifactData={artifactData}
          showAfter={showAfter}
          handleRollToMax={handleRollToMax}
        />
      </div>
    </div>
  );
}
