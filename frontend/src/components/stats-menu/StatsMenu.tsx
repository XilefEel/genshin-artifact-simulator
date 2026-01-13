import type { ArtifactState } from "../../types/artifact";
import ArtifactStats from "./ArtifactStats";
import MaxLevelMessage from "./MaxLevel";
import EnhancementControls from "./Enhancement";

export default function StatsMenu({
  artifactData,
  showAfter,
  handleRollToMax,
}: {
  artifactData: ArtifactState;
  showAfter: boolean;
  handleRollToMax: () => void;
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
        <MaxLevelMessage />
      ) : (
        <EnhancementControls onEnhance={handleRollToMax} />
      )}
    </div>
  );
}
