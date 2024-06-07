import React from "react";
import Divider from "../Divider/Divider";
import "./VideoInfo.scss";
import viewIcon from "../../assets/images/views.svg";
import likesIcon from "../../assets/images/likes.svg";

const VideoInfo = ({ videoData }) => {
  return (
    <div className="video-info">
      <h1 className="video-info__title">{videoData.title}</h1>

      <Divider className="divider-mobile" />

      <div className="video-info__container">
        <section className="video-info__channel">
          <h3>By {videoData.channel}</h3>
          <span className="video-info__date">{Intl.DateTimeFormat("en-US", { year: "numeric", month: "numeric", day: "numeric" }).format(videoData.timestamp)}</span>
        </section>

        <section className="video-info__view-likes">
          <span className="video-info__view">
            <img src={viewIcon} alt="view-icon" />
            {videoData.views}
          </span>
          <span className="video-info__likes">
            <img src={likesIcon} alt="likes-icon" />
            {videoData.likes}
          </span>
        </section>
      </div>
      <Divider />

      <section className="video-info__description">
        <p>{videoData.description}</p>
      </section>
    </div>
  );
};

export default VideoInfo;
