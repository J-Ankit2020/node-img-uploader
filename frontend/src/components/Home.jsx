import React, { useState } from 'react';
import FileDragAndDrop from './FileDragAndDrop';

function Home({ onUpload }) {
  return (
    <div className='w-[402px] h-[469px] rounded-xl p-4 shadow-2xl bg-[#FFFFFF] font-primary text-center flex flex-col justify-around items-center'>
      <h1 className='text-lg '>Upload Your Image</h1>
      <p className='text-xs text-[#828282]'>File should be Jpeg, Png,...</p>
      <FileDragAndDrop onUpload={onUpload} />
      <p className='text-[#BDBDBD]'>Or</p>
      <label
        htmlFor='uploadBtn'
        className='px-4 py-2 bg-[#2F80ED] text-white rounded-md cursor-pointer'
      >
        Choose Files
        <input
          type='file'
          id='uploadBtn'
          className='opacity-0 w-0'
          accept='image/*'
          onChange={(e) => {
            onUpload(e.target.files[0]);
          }}
        />
      </label>
    </div>
  );
}

export default Home;
