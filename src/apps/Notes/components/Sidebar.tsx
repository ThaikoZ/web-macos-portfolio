import { PropsWithChildren } from "react";

const Sidebar = ({ children }: PropsWithChildren) => {
  return (
    <div className="min-w-[22rem] max-w-80 w-1/4 p-3.5 border-r-[1px] border-border">
      {children}
    </div>
  );
};

export default Sidebar;
