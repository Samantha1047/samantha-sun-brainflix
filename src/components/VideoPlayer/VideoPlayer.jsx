import "./VideoPlayer.scss";

const VideoPlayer = ({ currentVideo }) => {
  return (
    <section className="video-player">
      <video className="video-player__player" src={currentVideo.video} poster={currentVideo.image} controls>
        Your browser does not support the video tag.
      </video>
    </section>
  );
};

export default VideoPlayer;
