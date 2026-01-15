import type { ArtifactState } from "../../types/artifact";
import ArtifactStats from "./ArtifactStats";
import MaxLevelMessage from "./MaxLevel";
import EnhancementControls from "./Enhancement";

export default function StatsMenu({
  artifactData,
  showAfter,
  handleRollToMax,
  handleNewArtifact,
}: {
  artifactData: ArtifactState;
  showAfter: boolean;
  handleRollToMax: () => void;
  handleNewArtifact: () => void;
}) {
  const level = showAfter ? 20 : 0;

  return (
    <div className="flex min-h-screen w-200 flex-col justify-between p-10 pt-12 pl-0">
      <ArtifactStats
        artifactData={artifactData}
        level={level}
        showAfter={showAfter}
      />

      {showAfter ? (
        <MaxLevelMessage handleNewArtifact={handleNewArtifact} />
      ) : (
        <EnhancementControls onEnhance={handleRollToMax} />
      )}
    </div>
  );
}
