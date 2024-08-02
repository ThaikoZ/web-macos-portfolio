import { ReactNode } from "react";

interface Props {
  onClick?: () => void;
  children: ReactNode;
}

const CardContainer = ({ children, onClick }: Props) => {
  return (
    <div
      className="flex flex-col justify-center items-center text-center gap-1.5 text-sm font-medium"
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default CardContainer;
