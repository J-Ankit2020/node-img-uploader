import React from 'react';
import '../styles/loader.css';
function Loading() {
  return (
    <div className='font-primary font-medium w-96 h-40 shadow-xl rounded-xl px-6 py-2 text-[#4F4F4F] flex flex-col justify-around items-baseline '>
      <h1 className='text-xl '>Uploading...</h1>
      <div className='loader-line text-justify'></div>
    </div>
  );
}

export default Loading;
