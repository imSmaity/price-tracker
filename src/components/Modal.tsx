import React, { ReactNode } from "react";
import Button from "./Button";

interface IButton {
  title?: string;
  handleClick: () => void;
}

interface IModalProps {
  header?: string;
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  primaryButton: IButton;
  secondaryButton: IButton;
  className?: string;
}

const Modal = ({
  open,
  onClose,
  header,
  children,
  primaryButton,
  secondaryButton,
  className,
}: IModalProps) => {
  return (
    <div className={open ? "relative " + className : "hidden"}>
      {/* <div
        className={
          open
            ? "bg-[#0000002d] h-screen w-full absolute top-0 z-10 left-0"
            : ""
        }
      ></div> */}
      <div
        className={
          "flex flex-col p-4 gap-5 z-20 absolute bg-white rounded-md w-[300px] shadow-md"
        }
      >
        <div className={header ? "text-lg" : "hidden"}>{header}</div>
        {children}
        <div className="flex gap-2">
          <Button
            title={secondaryButton?.title || "Cancel"}
            handleClick={secondaryButton.handleClick}
            className="bg-secondary"
          />
          <Button
            title={primaryButton?.title || "Add"}
            handleClick={primaryButton.handleClick}
          />
        </div>
      </div>
    </div>
  );
};

export default Modal;
