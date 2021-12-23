import React, { useState } from 'react'

export default function UploadForm() {

    // state for file upload
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);

    // file type check
    const types = ['image/png', 'image/jpeg'];

    // on upload file
    const changeHandler = (e) => {
        let selected = e.target.files[0];

        // save file data
        if (selected && types.includes(selected.type)) {
            setFile(selected);
            setError('');
        }
        else {
            setFile(null);
            setError('Only png or jpeg is valid!');
        }
    }

    return (
        <div>
            <div className="container">
                <form action="">
                    <input type="file" onChange={ changeHandler } />
                    {/* show error */}
                    {
                        error && <div className='error text-danger'>{ error }</div>
                    }
                </form>
            </div>
        </div>
    )
}
