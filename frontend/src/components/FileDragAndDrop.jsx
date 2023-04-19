import React, { useEffect, useRef } from 'react';
import dropLogo from '../assets/image.svg';

function FileDragAndDrop({ onUpload }) {
  const drop = useRef(null);

  useEffect(() => {
    drop.current.addEventListener('dragover', handleDragOver);
    drop.current.addEventListener('drop', handleDrop);
  }, []);
  function handleDragOver(e) {
    e.preventDefault();
    e.stopPropagation();
  }
  function handleDrop(e) {
    e.preventDefault();
    e.stopPropagation();
    const { files } = e.dataTransfer;
    if (files && files.length > 1) return;

    if (files && files.length) {
      onUpload(files[0]);
    }
  }

  return (
    <div
      className='bg-[#F6F8FB] flex items-center justify-around flex-col w-10/12 border-dashed border-2 rounded-xl border-[#97BEF4] h-[218.9px] '
      ref={drop}
    >
      <img src={dropLogo} />
      <p className='text-[#BDBDBD]'>Drag & Drop your image here</p>
    </div>
  );
}

export default FileDragAndDrop;
