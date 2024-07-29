import { createContext, PropsWithChildren, useEffect, useState } from "react";

interface DropdownGroupContextInterface {
  activeDropdown: string | null;
  setActiveDropdown: (id: string | null) => void;
  isAnyDropdownActive: boolean;
  setIsAnyDropdownActive: (isActive: boolean) => void;
}

export const DropdownGroupContext = createContext<
  DropdownGroupContextInterface | undefined
>(undefined);

const DropdownGroup = ({ children }: PropsWithChildren) => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isAnyDropdownActive, setIsAnyDropdownActive] = useState(false);

  useEffect(() => {
    setIsAnyDropdownActive(activeDropdown !== null);
  }, [activeDropdown]);

  return (
    <DropdownGroupContext.Provider
      value={{
        activeDropdown,
        setActiveDropdown,
        isAnyDropdownActive,
        setIsAnyDropdownActive,
      }}
    >
      {children}
    </DropdownGroupContext.Provider>
  );
};

export default DropdownGroup;
