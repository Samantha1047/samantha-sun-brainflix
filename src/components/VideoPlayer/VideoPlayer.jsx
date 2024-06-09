import React from "react";
import "./VideoPlayer.scss";

const VideoPlayer = ({ OnSelectvideo }) => {
  return (
    <div className="video-player">
      <video className="video-player__player" src={OnSelectvideo.video} poster={OnSelectvideo.image} controls>
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
