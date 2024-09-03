import React from "react";
import { useRef } from "react";
import { X } from "lucide-react";
import Dvideo from "../../assets/video.mp4";

const VideoBox = ({ textOverlays, setSelectedOverlay, deleteOverlay }) => {
  const videoRef = useRef(null);

  return (
    <div className="w-2/3 bg-gray-300 p-4 relative">
      <video ref={videoRef} className="w-fit h-fit" controls>
        <source src={Dvideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {textOverlays.map((overlay) => (
        <div
          key={overlay.id}
          style={{
            position: "absolute",
            left: `${overlay.x}px`,
            top: `${overlay.y}px`,
            width: `${overlay.width}px`,
            height: `${overlay.height}px`,
            cursor: "move",
          }}
          onClick={() => setSelectedOverlay(overlay)}
        >
          <div className=" w-full h-full">
            <p
              style={{
                fontFamily: overlay.font,
                fontSize: `${overlay.size}px`,
                color: overlay.color,
                fontWeight: overlay.bold ? "bold" : "normal",
                fontStyle: overlay.italic ? "italic" : "normal",
                textDecoration: overlay.underline ? "underline" : "none",
              }}
            >
              {overlay.text}
            </p>
          </div>
          <button
            className="absolute -top-4 -right-6 bg-red-500 text-white p-1 rounded"
            onClick={() => deleteOverlay(overlay.id)}
          >
            <X size={16} />
          </button>
        </div>
      ))}
    </div>
  );
};

export default VideoBox;
