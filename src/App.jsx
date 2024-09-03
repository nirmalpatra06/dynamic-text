import React, { useState } from "react";
import VideoBox from "./components/video/VideoBox";
import Configuration from "./components/configuration/Configuration";

const Home = () => {
  const [textOverlays, setTextOverlays] = useState([]);
  const [selectedOverlay, setSelectedOverlay] = useState(null);

  const addTextOverlay = () => {
    const newOverlay = {
      id: Date.now(),
      text: "Add Text",
      x: 350,
      y: 200,
      width: 100,
      height: 50,
      font: "Arial",
      size: 16,
      color: "#ffff00",
      bold: false,
      italic: false,
      underline: false,
    };
    setTextOverlays([...textOverlays, newOverlay]);
    setSelectedOverlay(newOverlay);
  };

  const updateOverlay = (id, updates) => {
    setTextOverlays(
      textOverlays.map((overlay) =>
        overlay.id === id ? { ...overlay, ...updates } : overlay
      )
    );
    if (selectedOverlay && selectedOverlay.id === id) {
      setSelectedOverlay({ ...selectedOverlay, ...updates });
    }
  };

  const deleteOverlay = (id) => {
    setTextOverlays(textOverlays.filter((overlay) => overlay.id !== id));
    if (selectedOverlay && selectedOverlay.id === id) {
      setSelectedOverlay(null);
    }
  };

  return (
    <div className="flex h-screen">
      <VideoBox
        textOverlays={textOverlays}
        setSelectedOverlay={setSelectedOverlay}
        deleteOverlay={deleteOverlay}
      />

      <Configuration
        selectedOverlay={selectedOverlay}
        addTextOverlay={addTextOverlay}
        updateOverlay={updateOverlay}
      />
    </div>
  );
};

export default Home;
