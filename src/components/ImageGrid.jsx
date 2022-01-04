import React from 'react';
import useFirestore from '../hooks/useFirestore';

export default function ImageGrid() {
    const { docs } = useFirestore('images');

    return (
        <section className='image-grid-area pt-5'>
            <div className="container">
                <div className='row'>
                    {
                        docs && docs.map(doc => (
                            <div className="col-md-4 mb-3" key={doc.id}>
                                <img src={doc.url} alt="" className='img-fluid h-100' />
                            </div>
                        ))
                    }
                </div> 
            </div>
        </section>
    )
}
