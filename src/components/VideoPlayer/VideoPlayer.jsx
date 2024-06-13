import React from "react";
import "./VideoPlayer.scss";

const VideoPlayer = ({ currentVideo }) => {
  return (
    <div className="video-player">
      <video className="video-player__player" src={currentVideo.video} poster={currentVideo.image} controls>
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
