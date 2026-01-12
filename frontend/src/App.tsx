import "./App.css";
import BackgroundEffects from "./components/BackgroundEffects";
import StatsMenu from "./components/StatsMenu";

export default function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-linear-to-tr from-yellow-800 via-yellow-700 to-yellow-950">
      <BackgroundEffects />
      <div className="relative z-10 flex min-h-screen">
        <StatsMenu />
      </div>
    </div>
  );
}
