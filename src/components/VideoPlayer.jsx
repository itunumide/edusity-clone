import video from '../assets/college-video.mp4'

const VideoPlayer = () => {
  return (
    <div>
      <video src={video} autoPlay muted controls></video>
    </div>
  )
}

export default VideoPlayer
