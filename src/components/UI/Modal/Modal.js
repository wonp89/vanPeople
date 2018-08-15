import React from "react";
import { DisplayModal } from "./ModalStyle";
import Aux from "../../../hoc/Aux/Aux";
import { Backdrop } from "../Backdrop/Backdrop";

const Modal = props => (
  <Aux>
    <Backdrop onClick={props.clicked} show={props.show} />
    <DisplayModal show={props.show}>{props.children}</DisplayModal>
  </Aux>
);

export default Modal;
