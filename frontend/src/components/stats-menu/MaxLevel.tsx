export default function MaxLevelMessage({
  handleNewArtifact,
}: {
  handleNewArtifact: () => void;
}) {
  return (
    <>
      <div className="flex h-full flex-col items-center justify-between py-5">
        <div className="h-0.5 w-full rounded-full bg-white/20" />
        <p className="text-yellow-400">Max level reached</p>
        <div className="h-0.5 w-full rounded-full bg-white/20" />
      </div>
      <div className="flex flex-row justify-end">
        <button
          onClick={handleNewArtifact}
          className="w-1/2 cursor-pointer rounded-full bg-orange-100 px-5 py-2 text-sm text-gray-700 disabled:opacity-50"
        >
          Roll new artifact
        </button>
      </div>
    </>
  );
}
