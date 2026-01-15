import { cn } from "../../lib/utils";
import { Sparkle } from "lucide-react";
import type { ArtifactState } from "../../types/artifact";

export default function ArtifactStats({
  artifactData,
  level,
  showAfter,
}: {
  artifactData: ArtifactState;
  level: number;
  showAfter: boolean;
}) {
  return (
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
        <div className="flex items-center gap-3.5 pl-1.5">
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
              <p className="w-4 text-center text-white/60">
                {substat.rolls > 0 ? (
                  <p className="rounded-full bg-amber-200 text-xs text-yellow-700">
                    {substat.rolls}
                  </p>
                ) : (
                  "•"
                )}
              </p>
              <div>{substat.name}</div>
            </div>
            <p>{substat.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
