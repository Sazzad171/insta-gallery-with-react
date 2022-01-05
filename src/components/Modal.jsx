import React from "react";
import ReactDOM from "react-dom";
import RcModal from "react-modal";

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
};

export default function Modal() {

    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

  return (
    <div>
        <button onClick={openModal}>Open Modal</button>
        <RcModal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
        >
            <button onClick={closeModal}>close</button>
            <h2>This is a Modal</h2>
        </RcModal>
    </div>
  );
}
