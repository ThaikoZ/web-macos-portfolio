interface Props {
  label: string;
}

const Badge = ({ label }: Props) => {
  return (
    <div className="rounded-xl bg-dropdown-light-separator dark:bg-dropdown-dark-separator bg-opacity-15 dark:bg-opacity-20 px-3 py-0.5 text-xs h-full group-hover:bg-transparent">
      {label}
    </div>
  );
};

export default Badge;
