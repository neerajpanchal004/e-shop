'use client';
import React, { useState, useEffect } from 'react';


const images = [
'https://cdn.pixabay.com/photo/2017/05/09/13/31/spring-2298279_1280.jpg',
  'https://cdn.pixabay.com/photo/2017/04/09/18/54/shoes-2216498_1280.jpg',
  'https://cdn.pixabay.com/photo/2016/03/27/07/12/apple-1282241_1280.jpg',
  'https://cdn.pixabay.com/photo/2017/06/20/22/14/man-2425121_1280.jpg',
  'https://cdn.pixabay.com/photo/2022/05/08/08/58/feet-7181596_1280.jpg',
  'https://cdn.pixabay.com/photo/2015/06/25/17/21/smart-watch-821557_1280.jpg'
];

const ImageSlider = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []); 

  const goToPrevImage = () => {
    setCurrentImage((prevImage) => (prevImage - 1 + images.length) % images.length);
  };

  const goToNextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  return (
    <>
    <div className="relative w-full max-w-screen-xl mx-auto">
      <div className="relative overflow-hidden object-fill">
        <img
          src={images[currentImage]}
          alt={`Image ${currentImage + 1}`}
          className="w-full h-[300px] transition-transform duration-500 transform object-cover"
        
        />

      </div>
      <div className="flex items-center justify-center mt-4"> {images.map((image, index) => (<button key={index} onClick={() => goToImage(index)} className={`w-3 h-3  rounded-full border border-gray-300 mx-1 ${currentImage === index ? 'bg-gray-500' : 'bg-white'}`} />))} </div>

    </div>
    </>
  );
};

export default ImageSlider;




