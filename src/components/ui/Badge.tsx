interface Props {
  label: string;
}

const Badge = ({ label }: Props) => {
  return (
    <div className="bg-topbar-dropdown-badge-background rounded-xl px-3 py-0.5 text-xs h-full group-hover:bg-transparent">
      {label}
    </div>
  );
};

export default Badge;
