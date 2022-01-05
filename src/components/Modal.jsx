import React, { useEffect } from "react";
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

export default function Modal({ modalData, setModalData, setShowModal }) {

    // modal default state
    const [modalIsOpen, setIsOpen] = React.useState(false);

    // fire modal
    useEffect(() => {
        setIsOpen(true);
    }, []);

    // close modal
    function closeModal() {
        setIsOpen(false);
        setShowModal(false);
        setModalData(null);
    }

    return (
        <div>
            <RcModal
                ariaHideApp={false}
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
            >
                <button onClick={closeModal}>close</button>
                <img src={ modalData } alt="" className="img-fluid" />
            </RcModal>
        </div>
    );
}