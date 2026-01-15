import { Diamond } from "lucide-react";
import Circlet from "../../assets/Circlet.png";
import Feather from "../../assets/Feather.png";
import Flower from "../../assets/Flower.png";
import Goblet from "../../assets/Goblet.png";
import Sands from "../../assets/Sands.png";
import MenuItem from "./MenuItem";
import ArtifactDisplay from "./ArtifactDisplay";
import Mora from "../../assets/Mora.png";

const ARTIFACT_DATA = {
  Flower: {
    image: Flower,
    title: "Flower of Life / Lightkeeper's Pledge",
  },
  Feather: {
    image: Feather,
    title: "Plume of Death / Nightingale's Tail Feather",
  },
  Sand: {
    image: Sands,
    title: "Sands of Eon / Undying One's Mourning Bell",
  },
  Goblet: {
    image: Goblet,
    title: "Goblet of Eonothem / A Horn Unwinded",
  },
  Circlet: {
    image: Circlet,
    title: "Circlet or Logos / Dyed Tassel",
  },
} as const;

export default function MainMenu({ artifactType }: { artifactType: string }) {
  const artifactData =
    ARTIFACT_DATA[artifactType as keyof typeof ARTIFACT_DATA] ||
    ARTIFACT_DATA.Flower;

  return (
    <div className="flex w-full flex-col items-center justify-center">
      <div className="absolute top-8 left-24 flex items-center gap-3 text-amber-100/70">
        <p>{artifactData.title}</p>
      </div>
      <div className="absolute top-20 left-10 flex flex-col gap-3 text-xl text-white/60">
        <MenuItem Icon={Diamond} label="Details" />
        <MenuItem Icon={Diamond} label="Enhance" isActive />
        <MenuItem Icon={Diamond} label="Reshape" />
      </div>
      <div className="absolute top-8 right-24 flex flex-row items-center rounded-full bg-black/30 px-2 py-0.5">
        <img src={Mora} alt="Mora" className="mr-2 size-4" />
        <p className="text-sm text-gray-100">123456789</p>
      </div>
      <ArtifactDisplay imageSrc={artifactData.image} altText={artifactType} />
    </div>
  );
}
