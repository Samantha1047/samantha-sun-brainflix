import React from "react";
import "./VideoPlayer.scss";

const VideoPlayer = ({ videoData }) => {
  return (
    <div className="video-player">
      <video className="video-player__player" src={videoData.video} poster={videoData.image} controls>
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
