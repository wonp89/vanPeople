import React from "react";
import { DisplayModal } from "./ModalStyle";
import { Backdrop } from "./Backdrop";

const Modal = props => (
  <React.Fragment>
    <Backdrop onClick={props.modalClosed} show={props.show} />
    <DisplayModal loading={props.loading} show={props.show}>
      {props.children}
    </DisplayModal>
  </React.Fragment>
);

export default Modal;
