import { DeskContextProps, DeskContext } from "@/providers/DeskProvider";
import { useContext } from "react";

const useDesk = (): DeskContextProps => {
  const context = useContext(DeskContext);
  if (!context) {
    throw new Error("useDesk must be used within an DeskProvider");
  }
  return context;
};

export default useDesk;
