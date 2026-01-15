import { ChevronDown, Plus } from "lucide-react";
import Mora from "../../assets/Mora.png";

export default function EnhancementControls({
  onEnhance,
}: {
  onEnhance: () => void;
}) {
  return (
    <div className="flex flex-col gap-2.5 text-sm">
      <div className="h-0.5 w-full rounded-full bg-white/20" />

      <p className="text-white/60">Enhancement Materials Consumed (0/15)</p>

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
            className="flex h-19 w-16 flex-col rounded bg-neutral-300"
          >
            <div className="flex size-16 items-center justify-center rounded-br-2xl bg-linear-to-b from-neutral-500 to-neutral-400">
              <Plus className="text-gray-200" size={40} />
            </div>
          </div>
        ))}
      </div>

      <div className="h-0.5 w-full rounded-full bg-white/20" />

      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-center">
          <p className="text-white/60">Required</p>
          <img src={Mora} alt="Mora" className="mx-3 size-5" />
          <p className="text-gray-100">0</p>
        </div>
        <button
          onClick={onEnhance}
          className="w-1/2 cursor-pointer rounded-full bg-orange-100 px-3 py-2 text-gray-700 transition-all duration-200 hover:bg-orange-100/80 active:scale-95 disabled:opacity-50"
        >
          Enhance to Max
        </button>
      </div>
    </div>
  );
}
