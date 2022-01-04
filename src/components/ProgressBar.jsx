import React from 'react';
import { useEffect } from "react";

// bootstrap
import { ProgressBar } from 'react-bootstrap';

// import useStorage for file upload status
import useStorage from '../hooks/useStorage';

export default function ProgresBar({file, setFile}) {
  const {url, progress} = useStorage(file);

  useEffect(() => {
    if (url) {
      setFile(null);
    }
  })

  return (
    <div className='progressbar-area'>
      <ProgressBar animated now={progress} />
    </div>
  )
}
