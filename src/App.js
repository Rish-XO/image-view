import React, { useState } from "react";
import "./App.css";

function App() {
  const [layout, setLayout] = useState(1); // Default layout: 1 image

  const images = [
    "https://images.unsplash.com/photo-1711144035142-42d005a8ad48?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1711345545708-8113c939c63b?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1696406519677-9b8ca4b1cf59?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1711251855398-dade56b02b78?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  // Function to handle layout change
  const handleLayoutChange = (event) => {
    setLayout(parseInt(event.target.value));
  };

  const renderImages = () => {
    if (layout === 1) {
      return (
        <div className="image-container">
          <img src={images[0]} alt="Image 1" />
        </div>
      );
    } else if (layout === 2) {
      return (
        <>
          <div className="image-container">
            <img src={images[0]} alt="Image 1" />
          </div>
          <div className="image-container">
            <img src={images[1]} alt="Image 2" />
          </div>
        </>
      );
    } else if (layout === 3) {
      return images.slice(0, 3).map((imageUrl, index) => (
        <div key={index} className="image-container">
          <img src={imageUrl} alt={`Image ${index + 1}`} />
        </div>
      ));
    } else if (layout === 4) {
      return images.map((imageUrl, index) => (
        <div key={index} className="image-container">
          <img src={imageUrl} alt={`Image ${index + 1}`} />
        </div>
      ));
    }
  };

  return (
    <div>
      <label htmlFor="layoutSelect">Select Layout:</label>
      <select id="layoutSelect" value={layout} onChange={handleLayoutChange}>
        <option value={1}>1 Image</option>
        <option value={2}>2 Images</option>
        <option value={3}>3 Images</option>
        <option value={4}>4 Images</option>
      </select>

      <div className={`image-grid layout-${layout}`}>{renderImages()}</div>
    </div>
  );
}

export default App;
