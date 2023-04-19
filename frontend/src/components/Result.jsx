import React from 'react';
import Tick from '../assets/tick.svg';
import { toast } from 'react-hot-toast';

function Result({ filename, url }) {
  const src = `${url}/images/${filename}`;

  function handleClick() {
    navigator.clipboard.writeText(src);
    toast('Copied To Clipboard!', {
      icon: 'ℹ️',
    });
  }
  return (
    <div className='w-[500.36px] h-[500.36px] shadow-xl rounded-xl flex flex-col justify-around p-2 items-center font-primary font-medium'>
      <div className='w-8 h-8 bg-[#219653] rounded-full mx-auto'>
        <img src={Tick} className='h-full w-full' />
      </div>
      <h1 className='text-lg'>Uploaded Successfully!</h1>
      <img
        src={src}
        className='aspect-video w-11/12 mx-auto rounded-lg object-cover'
      />
      <div className='w-11/12 mx-auto bg-[#E0E0E0] p-2 rounded-lg flex justify-around'>
        <input
          type='text'
          readOnly
          value={src}
          className='w-2/3 text-[#4F4F4F] outline-none bg-transparent text-xs'
        />
        <button
          className='bg-[#2F80ED] px-4 py-3 text-white rounded-lg'
          onClick={handleClick}
        >
          Copy Link
        </button>
      </div>
    </div>
  );
}

export default Result;
