import classes from "./Modal.module.css"
import {Fragment} from "react";
import ReactDOM from "react-dom";

function Backdrop() {
    return <div className={classes.backdrop}/>
}

function ModalOverlay(props) {
    return (
        <div className={classes.modal}>
            <div>{props.children}</div>
        </div>
    )
}

function Modal(props) {

    const portalElement = document.getElementById("overlays");

    return (
        <Fragment>
            {ReactDOM.createPortal(<Backdrop/>, portalElement)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
        </Fragment>
    )
}

export default Modal;