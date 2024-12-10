import React, { useState } from "react";

const carousel = () => {
  const images = [
    "https://images.pexels.com/photos/10981731/pexels-photo-10981731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/10980903/pexels-photo-10980903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/10981730/pexels-photo-10981730.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const previousSlide = () => {
    const isFirstImage = currentIndex === 0;
    console.log("isFirstImage..",isFirstImage);
    
    const newIndex = isFirstImage ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastImage = currentIndex === images.length - 1;
    const lastIndex = isLastImage ? 0 : currentIndex + 1;
    setCurrentIndex(lastIndex);
  };

  return (
    <div>
      <img
        src={images[currentIndex]}
        width="500"
        style={{
          width: "100%",
          height: "auto",
          borderRadius: "10px",
          boxShadow:
            "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
          transition: "opacity 0.5s ease-in-out",
        }}
        alt=""
      />
      <button
        style={{
          position: "absolute",
          top: "50%",
          left: "10px",
          transform: "translateY(-50%)",
          backgroundColor: "rgba(0,0,0,0.5)",
          color: "white",
          border: "none",
          borderRadius: "50%",
          fontSize: "1.2em",
          cursor: "pointer",
        }}
        onClick={previousSlide}
      >
        &#10094;
      </button>
      <button
        style={{
          position: "absolute",
          top: "50%",
          right: "10px",
          backgroundColor: "rgba(0,0,0,0.5)",
          color: "white",
          fontSize: "1.2em",
          border: "none",
          borderRadius: "50%",
          cursor: "pointer",
        }}
        onClick={nextSlide}
      >
        &#10095;
      </button>
      <div
        style={{
          position: "absolute",
          bottom: "10px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: "5px",
        }}
      >
        {images.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrentIndex(index + 1)}
            style={{
              height: "10px",
              width: "10px",
              border: "none",
              backgroundColor: currentIndex === index ? "black" : "gray",
              borderRadius: "50%",
              display: "inline-block",
              cursor: "pointer",
            }}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default carousel;
