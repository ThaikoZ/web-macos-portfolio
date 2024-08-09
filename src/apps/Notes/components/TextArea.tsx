import { PropsWithChildren } from "react";

const TextArea = ({ children }: PropsWithChildren) => {
  return <div className="w-3/4 bg-notes-background">{children}</div>;
};

export default TextArea;
