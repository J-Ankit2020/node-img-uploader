import React, { useState } from 'react';
import Home from './components/Home';
import Loading from './components/Loading';
import Result from './components/Result';
import { Toaster, toast } from 'react-hot-toast';
function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [isUploaded, setisUploaded] = useState(false);
  const [filename, setFilename] = useState('');
  const url = 'https://image-uploader-hwyt.onrender.com';

  const handleUpload = async (file) => {
    setIsLoading(true);
    const formData = new FormData();
    formData.append('image-file', file);

    const res = await fetch('https://image-uploader-hwyt.onrender.com/upload', {
      method: 'POST',
      body: formData,
    });
    const data = await res.json();
    console.log(data);
    if (!data.success) {
      setIsLoading(false);
      toast.error(data.message);
      setisUploaded(false);
    } else {
      const { image } = data;
      setFilename(image.filename);
      setIsLoading(false);
      setisUploaded(true);
    }
  };

  return (
    <>
      <Toaster />
      {isLoading && <Loading />}
      {!isLoading && !isUploaded && <Home onUpload={handleUpload} />}
      {!isLoading && isUploaded && <Result filename={filename} url={url} />}
    </>
  );
}

export default App;
