import React from "react";
import { ModalWrapper, Overlay } from "./Modal.style";

const Modal = ({ children }) => {
  return (
    <Overlay>
      <ModalWrapper>{children}</ModalWrapper>
    </Overlay>
  );
};

export { Modal };
