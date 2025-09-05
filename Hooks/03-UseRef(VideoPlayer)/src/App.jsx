import React, { useRef, useState } from "react";
import "./App.css";

const App = () => {
  const videoRef = useRef();
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(1);

  const handlePlay = () => videoRef.current.play();
  const handlePause = () => videoRef.current.pause();
  const handleMute = () => {
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };
  const handleForward = () => (videoRef.current.currentTime += 10);
  const handleRewind = () => (videoRef.current.currentTime -= 10);
  const handleVolumeChange = (e) => {
    videoRef.current.volume = e.target.value;
    setVolume(e.target.value);
  };

  return (
    <div className="container">
      <h2>🎬 Cinematic Dark Video Player</h2>
      <video
        ref={videoRef}
        src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        className="video"
        type="video/mp4"
      ></video>

      <div className="controls">
        <button onClick={handleRewind}>⏪ 10s</button>
        <button onClick={handlePlay}>▶️ Play</button>
        <button onClick={handlePause}>⏸ Pause</button>
        <button onClick={handleForward}>⏩ 10s</button>
        <button onClick={handleMute}>{isMuted ? "🔇" : "🔊"}</button>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
          className="volume-slider"
        />
      </div>
    </div>
  );
};

export default App;
