import React, { useState } from 'react';
import './App.css'; 

const ImageLayout = () => {
  const [layout, setLayout] = useState(1); 

  // Array of image URLs
  const images = [
    "https://images.unsplash.com/photo-1711144035142-42d005a8ad48?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1711345545708-8113c939c63b?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1696406519677-9b8ca4b1cf59?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1711251855398-dade56b02b78?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  // Function to handle layout selection
  const handleLayoutChange = (selectedLayout) => {
    setLayout(selectedLayout);
  };

  return (
    <div className="image-layout">
      {/* Layout select buttons */}
      <div className="layout-select">
        <button onClick={() => handleLayoutChange(1)}>1</button>
        <button onClick={() => handleLayoutChange(2)}>2</button>
        <button onClick={() => handleLayoutChange(3)}>3</button>
        <button onClick={() => handleLayoutChange(4)}>4</button>
      </div>

      {/* Render images based on layout */}
      <div className={`image-container layout-${layout}`}>
        {images.slice(0, layout).map((imageUrl, index) => (
          <img key={index} src={imageUrl} alt={`Image ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default ImageLayout;
