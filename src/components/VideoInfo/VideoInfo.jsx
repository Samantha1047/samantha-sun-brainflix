import React from "react";
import Divider from "../Divider/Divider";
import "./VideoInfo.scss";
import viewIcon from "../../assets/images/views.svg";
import likesIcon from "../../assets/images/likes.svg";

const VideoInfo = ({ OnSelectvideo }) => {
  return (
    <div className="video-info">
      <h1 className="video-info__title">{OnSelectvideo.title}</h1>

      <Divider className="divider-mobile" />

      <div className="video-info__container">
        <section className="video-info__channel">
          <h3>By {OnSelectvideo.channel}</h3>
          <span className="video-info__date">{Intl.DateTimeFormat("en-US", { year: "numeric", month: "numeric", day: "numeric" }).format(OnSelectvideo.timestamp)}</span>
        </section>

        <section className="video-info__view-likes">
          <span className="video-info__view">
            <img src={viewIcon} alt="view-icon" />
            {OnSelectvideo.views}
          </span>
          <span className="video-info__likes">
            <img src={likesIcon} alt="likes-icon" />
            {OnSelectvideo.likes}
          </span>
        </section>
      </div>
      <Divider />

      <section className="video-info__description">
        <p>{OnSelectvideo.description}</p>
      </section>
    </div>
  );
};

export default VideoInfo;
