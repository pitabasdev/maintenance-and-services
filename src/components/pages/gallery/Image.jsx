import React from "react";
import "./Image.css"
// Define an array of image URLs
const images = [
  "https://via.placeholder.com/150",
  "https://via.placeholder.com/150",
  "https://via.placeholder.com/150",
  "https://via.placeholder.com/150",
  "https://via.placeholder.com/150",
  "https://via.placeholder.com/150",
];

// Image component
const ImageGrid = ({ src }) => {
  return (
    <div className="image-container">
      <img className="image" src={src} alt="placeholder" />
      <div className="overlay"></div>
    </div>
  );
};

// Image grid component
const Image = () => {
  return (
    <div className="grid-container">
      {images.map((image, index) => (
        <ImageGrid key={index} src={image} />
      ))}
    </div>
  );
};

export default Image;
