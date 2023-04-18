import React from 'react';
import FileDragAndDrop from './components/FileDragAndDrop';
import dropLogo from './assets/image.svg';

function App() {
  const handleUpload = (files) => {
    console.log(files);
  };

  return (
    <div className='w-[402px] h-[469px] rounded-xl p-4 shadow-2xl bg-[#FFFFFF] font-primary text-center flex flex-col justify-around items-center'>
      <h1 className='text-lg '>Upload Your Image</h1>
      <p className='text-xs text-[#828282]'>File should be Jpeg, Png,...</p>
      <FileDragAndDrop onUpload={handleUpload} />
      <p className='text-[#BDBDBD]'>Or</p>
      <label
        htmlFor='uploadBtn'
        className='px-4 py-2 bg-[#2F80ED] text-white rounded-md cursor-pointer'
      >
        Choose Files
      </label>
      <input type='file' id='uploadBtn' className='hidden' accept='image/*' />
    </div>
  );
}

export default App;
