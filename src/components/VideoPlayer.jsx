import { useRef } from "react";
import video from "../assets/college-video.mp4";

const VideoPlayer = ({ playState, setPlayState }) => {
  const player = useRef(null);
  const closePlayer = (e) => {
    if (e.target === player.current) {
      setPlayState(false);
    }
  };
  return (
    <div
      className={`fixed flex justify-center items-center inset-0 w-full h-full bg-[rgba(0,0,0,0.9)]  z-10 ${
        playState ? "" : "hidden"
      }`}
      ref={player}
      onClick={closePlayer}
    >
      <video
        src={video}
        autoPlay
        muted
        controls
        className="w-[80%] h-[80%] border-4 border-white rounded-lg"
      ></video>
    </div>
  );
};

export default VideoPlayer;
