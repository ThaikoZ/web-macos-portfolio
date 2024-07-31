interface Props {
  label: string;
}

const Badge = ({ label }: Props) => {
  // FIXME: Badge bg color doesnt work
  return (
    <div className="bg-dropdown-badge rounded-xl px-3 py-0.5 text-xs h-full group-hover:bg-transparent">
      {label}
    </div>
  );
};

export default Badge;
