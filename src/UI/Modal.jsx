import ReactDOM from "react-dom";
import "./Modal.css";

const Modal = (props) => {
  const Backdrop = () => {
    return <div className="backdrop" onClick={props.onClose}></div>;
  };

  const ModalOverlay = () => {
    return (
      <div className="modal">
        <div className="content">{props.children}</div>
      </div>
    );
  };

  const portalElement = document.getElementById("modal");

  return (
    <div>
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(<ModalOverlay />, portalElement)}
    </div>
  );
};

export default Modal;
