import React, { useState } from 'react';
import useFirestore from '../hooks/useFirestore';
import Modal from "./Modal";
import { motion } from "framer-motion/dist/framer-motion";

export default function ImageGrid() {
    const { docs } = useFirestore('images');

    // state for modal
    const [modalData, setModalData] = useState(null);

    // modal data
    const forModal = (url) => {
        setModalData(url);
    }

    return (
        <div className='image-grid-area pt-5'>
            <div className="container">
                <div className='row'>
                    {
                        docs && docs.map(doc => (
                            <motion.div className="col-md-4 mb-3" key={doc.id} onClick={ () => forModal(doc.url) }
                                whileHover={{ opacity: 0.8 }}
                            >
                                <img src={doc.url} alt="" className='img-fluid img-item h-100' />
                            </motion.div>
                        ))
                    }
                    { modalData && <Modal modalData={ modalData } setModalData={ setModalData } /> }
                    
                </div> 
            </div>
        </div>
    )
}
