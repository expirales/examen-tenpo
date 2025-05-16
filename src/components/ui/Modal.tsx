import React, { useEffect } from "react";
import "./Modal.scss";
type ModalProps = {
  title?: string;
  onClose: () => void;
  children: React.ReactNode;
};

const Modal = ({ title = "Info", onClose, children }: ModalProps) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    document.body.style.position = "relative";

    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
    };
  }, []);

  return (
    <div className="cnt-modal">
      <div className="overlay" onClick={onClose} />
      <div className="content">
        <div className="cnt-modal-header">
          <h2 className="title">{title}</h2>
          <button className="close-btn" onClick={onClose}>
            ×
          </button>
        </div>
        <div className="body">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
