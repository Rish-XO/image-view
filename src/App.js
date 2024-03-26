import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

function App() {
  const [layout, setLayout] = useState(1); // Default layout: 1 image

  const images = [
    "https://images.unsplash.com/photo-1710964932529-bd0b2e48c5ea?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1710961716370-dfff65e2ba0c?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1710961716370-dfff65e2ba0c?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1711109631427-f90f9d83364b?q=80&w=2535&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
    } else if (layout == 2) {
      return (
        <div>
          <div className="image-container">
            <img src={images[0]} alt="Image 1" />
          </div>
          <div className="image-container">
            <img src={images[1]} alt="Image 2" />
          </div>
        </div>
      );
    } else if (layout == 3) {
      return images.slice(0, 3).map((imageUrl, index) => (
        <div key={index} className="image-container">
          <img src={imageUrl} alt={`Image ${index + 1}`} />
        </div>
      ));
    } else if (layout == 4) {
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
