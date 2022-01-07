import React, { useEffect } from "react";
// react modal import
import RcModal from "react-modal";
// icon import
import { AiOutlineCloseCircle } from "react-icons/ai";

import { motion } from "framer-motion/dist/framer-motion"

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

export default function Modal({ modalData, setModalData }) {

    // modal default state
    const [modalIsOpen, setIsOpen] = React.useState(false);

    // fire modal
    useEffect(() => {
        setIsOpen(true);
    }, []);

    // close modal
    function closeModal() {
        setIsOpen(false);
        setModalData(null);
    }

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <RcModal
                ariaHideApp={false}
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
            >
                <p className="text-right">
                    <button className="btn" onClick={closeModal}> <AiOutlineCloseCircle /> </button>
                </p>
                <div>
                    <img src={ modalData } alt="" className="img-fluid" />
                </div>
            </RcModal>
        </motion.div>
    );
}