import Circlet from "../assets/Circlet.png";
import Feather from "../assets/Feather.png";
import Flower from "../assets/Flower.png";
import Goblet from "../assets/Goblet.png";
import Sands from "../assets/Sands.png";

export default function MainMenu({ artifactType }: { artifactType: string }) {
  const getArtifactImage = () => {
    switch (artifactType) {
      case "Flower":
        return Flower;
      case "Feather":
        return Feather;
      case "Sand":
        return Sands;
      case "Goblet":
        return Goblet;
      case "Circlet":
        return Circlet;
      default:
        return Flower;
    }
  };

  return (
    <div className="flex w-full flex-col items-center justify-center">
      <div className="rounded-full bg-yellow-300/50 p-4">
        <img src={getArtifactImage()} className="size-48" />
      </div>
    </div>
  );
}
