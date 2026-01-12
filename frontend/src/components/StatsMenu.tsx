import { useEffect, useState } from "react";
import type { ArtifactResponse, ArtifactState } from "../types/artifact";
import { generateArtifact } from "../lib/artifact";
import { cn } from "../lib/utils";
import { ChevronDown, Dot, Plus, Sparkle } from "lucide-react";

export default function StatsMenu() {
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
    <div className="flex min-h-screen w-125 flex-col justify-between p-8">
      <div className="flex flex-col text-gray-100">
        <div className="mb-2 h-0.5 w-full rounded-full bg-white/20" />
        <p className="mb-2">{artifactData.type}</p>

        <div className="flex justify-between bg-black/10 p-2 py-3 text-lg">
          <div className="flex items-center gap-2">
            <Sparkle size={20} className="text-white/60" />
            <p>{artifactData.main_stat.name}</p>
          </div>

          <p>{artifactData.main_stat.value}</p>
        </div>

        <div>
          {artifactData.substats.map((substat, index) => (
            <div
              key={substat.name}
              className={cn(
                "flex items-center justify-between border-t-2 border-white/10 pr-2",
                index % 2 === 1 && "bg-black/10",
              )}
            >
              <div className="flex items-center">
                <Dot size={36} className="text-white/60" />
                <p>{substat.name}</p>
              </div>
              <p>{substat.value}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-2.5 text-sm">
        <div className="h-0.5 w-full rounded-full bg-white/20" />

        <p className="text-white/60">Enhancement Materials</p>

        <div className="flex flex-row gap-3">
          <button className="flex w-3/5 flex-row items-center justify-between rounded-full bg-orange-100 px-3 py-1.5 text-gray-700">
            <span>3-Star Materials</span>
            <ChevronDown size={20} />
          </button>
          <button className="flex w-2/5 justify-center rounded-full bg-orange-100 px-3 py-1.5 text-gray-700">
            Auto Add
          </button>
        </div>

        <div className="flex flex-row gap-2">
          {Array.from({ length: 6 }, (_, index) => (
            <div
              key={index}
              className="flex size-16 flex-col overflow-hidden rounded"
            >
              <div className="flex flex-1 items-center justify-center bg-linear-to-b from-neutral-500 to-neutral-400">
                <Plus className="text-gray-200" size={40} />
              </div>
              <div className="h-2 bg-neutral-300" />
            </div>
          ))}
        </div>

        <div className="h-0.5 w-full rounded-full bg-white/20" />

        <div className="flex flex-row items-center justify-between">
          <p className="text-amber-200">Required 6720 Mora</p>
          <button
            onClick={handleRollToMax}
            disabled={showAfter}
            className="w-1/2 rounded-full bg-orange-100 px-3 py-2 text-gray-700 disabled:opacity-50"
          >
            {showAfter ? "Rolled to Max" : "Enhance to Max"}
          </button>
        </div>
      </div>
    </div>
  );
}
