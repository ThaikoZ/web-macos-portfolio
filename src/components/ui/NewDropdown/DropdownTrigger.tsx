import React, { PropsWithChildren, useContext } from "react";
import { DropdownContext } from "./Dropdown";
import { DropdownGroupContext } from "./DropdownGroup";

const DropdownTrigger = ({ children }: PropsWithChildren) => {
  const context = useContext(DropdownContext);
  const groupContext = useContext(DropdownGroupContext);

  if (!context) {
    throw new Error("DropdownTrigger must be used within a Dropdown");
  }
  if (!React.isValidElement(children)) {
    throw new Error("DropdownTrigger children must be a valid React element");
  }

  const { isOpen, toggle } = context;

  const { isAnyDropdownActive } = groupContext || {
    isAnyDropdownActive: undefined,
  };

  const handleMouseEnter = () => {
    if (isAnyDropdownActive && !isOpen) {
      toggle();
    }
  };

  return React.cloneElement(
    React.Children.only(children) as React.ReactElement,
    {
      onClick: toggle,
      onMouseEnter: handleMouseEnter,
      active: isOpen,
    }
  );
};

export default DropdownTrigger;
