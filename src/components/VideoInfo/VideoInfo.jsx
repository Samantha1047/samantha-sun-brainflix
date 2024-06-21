import React from "react";
import Divider from "../Divider/Divider";
import "./VideoInfo.scss";
import viewIcon from "../../assets/images/views.svg";
import likesIcon from "../../assets/images/likes.svg";

const VideoInfo = ({ currentVideo }) => {
  return (
    <section className="video-info">
      <h1 className="video-info__title">{currentVideo.title}</h1>

      <section className="divider-mobile">
        <Divider />
      </section>

      <div className="video-info__container">
        <section className="video-info__channel">
          <h3>By {currentVideo.channel}</h3>
          <span className="video-info__date">{Intl.DateTimeFormat("en-US", { year: "numeric", month: "numeric", day: "numeric" }).format(currentVideo.timestamp)}</span>
        </section>

        <section className="video-info__view-likes">
          <span className="video-info__view">
            <img src={viewIcon} alt="view-icon" />
            {currentVideo.views}
          </span>
          <span className="video-info__likes">
            <img src={likesIcon} alt="likes-icon" />
            {currentVideo.likes}
          </span>
        </section>
      </div>
      <Divider />

      <section className="video-info__description">
        <p>{currentVideo.description}</p>
      </section>
    </section>
  );
};

export default VideoInfo;
