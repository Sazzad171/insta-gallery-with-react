import React, { useState } from 'react'

// import components
import ProgresBar from './ProgressBar'

// icon import
import { AiOutlinePlusCircle } from "react-icons/ai";

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
        <div className='file-upload-area'>
            <div className="container text-center">
                <div className="heading-area py-md-4 py-3">
                    <div className="container">
                        <h1 className='text-center text-red'>Your Picture Collections</h1>
                        <p className='text-center mb-0'>Here is your all picture collections which you are uploaded.</p>
                    </div>
                </div>

                <form action="">
                    <label htmlFor="imagefile">
                        <AiOutlinePlusCircle className='upload-icon' />
                        <input type="file" onChange={ changeHandler } id='imagefile' />
                    </label>
                    {/* show filename */}
                    {
                        file && <p> {file.name} </p>
                    }
                    {/* show error */}
                    {
                        error && <div className='error text-danger'>{ error }</div>
                    }
                    {/* show progress bar */}
                    {
                        file && <ProgresBar file={ file } setFile={ setFile } />
                    }
                </form>
            </div>
        </div>
    )
}
