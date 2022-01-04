import { useState, useEffect } from 'react';

// import firebase config fle
import { projectStorage, projectFirestore } from '../firebase/config';

const useStorage = (file) => {
  // state
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    // references
    const storageRef = projectStorage.ref(file.name);
    const collectionRef = projectFirestore.collection('images');

    // upload file and show progress
    storageRef.put(file).on('state_changed', (snap) => {
      let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
      setProgress(percentage);
    }, (err) => {

      // set error status
      setError(err);

    }, async () => {
      
      // download url set
      const url = await storageRef.getDownloadURL();
      // save on db
      collectionRef.add({ url });
      setUrl(url);

    });
  }, [file]);

  return { progress, url, error }
}

export default useStorage;