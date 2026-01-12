import type { ArtifactState } from "../types/artifact";
import { cn } from "../lib/utils";
import { ChevronDown, Plus, Sparkle } from "lucide-react";

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
    <div className="flex min-h-screen w-200 flex-col justify-between p-8">
      <div className="flex flex-col text-gray-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <p className="text-lg">+{level}</p>
            {showAfter && (
              <p className="rounded-full bg-orange-500 px-2 py-0.5 text-xs text-gray-700">
                MAX
              </p>
            )}
          </div>

          {!showAfter && <p className="text-sm text-purple-300">0/3000</p>}
        </div>

        <div className="mb-2 flex items-center gap-2">
          <p className="text-xs text-purple-300">EXP</p>
          <div className="h-1 w-full rounded-full bg-purple-900/50" />
        </div>

        <div className="mb-2 h-0.5 w-full rounded-full bg-white/20" />

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
                "flex items-center justify-between border-t-2 border-white/10 px-2 py-1.5 pl-4",
                index % 2 === 1 && "bg-black/10",
              )}
            >
              <div className="flex items-center gap-4">
                <p className="text-white/60">•</p>
                <div>{substat.name}</div>
              </div>
              <p>{substat.value}</p>
            </div>
          ))}
        </div>
      </div>

      {showAfter ? (
        <div className="flex h-full items-center justify-center">
          <p className="text-yellow-400">Max level reached</p>
        </div>
      ) : (
        <div className="flex flex-col gap-2.5 text-sm">
          <div className="h-0.5 w-full rounded-full bg-white/20" />

          <p className="text-white/60">Enhancement Materials</p>

          <div className="flex flex-row gap-3">
            <button className="flex w-3/5 flex-row items-center justify-between rounded-full bg-orange-100 px-3 py-1.5 text-xs text-gray-700">
              <span>4-Star Materials and Under</span>
              <ChevronDown size={20} />
            </button>
            <button className="flex w-2/5 items-center justify-center rounded-full bg-orange-100 px-3 py-1.5 text-xs text-gray-700">
              Enhance to Next Tier
            </button>
          </div>

          <div className="flex flex-row gap-2">
            {Array.from({ length: 6 }, (_, index) => (
              <div
                key={index}
                className="flex h-19 w-16 flex-col overflow-hidden rounded bg-neutral-300"
              >
                <div className="flex size-16 items-center justify-center rounded-br-2xl bg-linear-to-b from-neutral-500 to-neutral-400">
                  <Plus className="text-gray-200" size={40} />
                </div>
              </div>
            ))}
          </div>

          <div className="h-0.5 w-full rounded-full bg-white/20" />

          <div className="flex flex-row items-center justify-between">
            <p className="text-amber-200">Required 6720 Mora</p>
            <button
              onClick={handleRollToMax}
              disabled={showAfter}
              className="w-1/2 cursor-pointer rounded-full bg-orange-100 px-3 py-2 text-gray-700 disabled:opacity-50"
            >
              {showAfter ? "Rolled to Max" : "Enhance to Max"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
