import React from 'react';
import useFirestore from '../hooks/useFirestore';

export default function ImageGrid() {
    const { docs } = useFirestore('images');

    return (
        <div className='row'>
            <div className="col-md-4 mb-3">

            </div>
        </div> 
    )
}
