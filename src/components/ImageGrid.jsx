import React, { useState } from 'react';
import useFirestore from '../hooks/useFirestore';
import Modal from "./Modal";

export default function ImageGrid() {
    const { docs } = useFirestore('images');

    // state for modal
    const [showModal, setShowModal] = useState(false);
    const [modalData, setModalData] = useState(null);

    // modal data
    const forModal = (url) => {
        setModalData(url);
        setShowModal(true);
    }

    return (
        <div className='image-grid-area pt-5'>
            <div className="container">
                <div className='row'>
                    {
                        docs && docs.map(doc => (
                            <div className="col-md-4 mb-3" key={doc.id} onClick={ () => forModal(doc.url) }>
                                <img src={doc.url} alt="" className='img-fluid h-100' />
                            </div>
                        ))
                    }
                    { showModal && <Modal modalData={ modalData } setModalData={ setModalData } setShowModal={ setShowModal } /> }
                    
                </div> 
            </div>
        </div>
    )
}
