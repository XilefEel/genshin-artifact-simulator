export default function MenuItem({
  Icon,
  label,
  isActive = false,
}: {
  Icon: any;
  label: string;
  isActive?: boolean;
}) {
  return (
    <div className="flex flex-row items-center gap-3">
      <Icon size={isActive ? 16 : 12} />
      <p className={isActive ? "pl-1 text-2xl text-gray-100" : ""}>{label}</p>
    </div>
  );
}
