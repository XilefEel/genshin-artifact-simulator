export default function ArtifactDisplay({
  imageSrc,
  altText,
}: {
  imageSrc: string;
  altText: string;
}) {
  return (
    <div className="rounded-full bg-yellow-300/50 p-6">
      <img src={imageSrc} className="size-48" alt={altText} />
    </div>
  );
}
