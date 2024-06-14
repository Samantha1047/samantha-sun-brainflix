import React from "react";
import { Link } from "react-router-dom";
import VideoListEntry from "../VideoListEntry/VideoListEntry";
import "./VideoList.scss";

const VideoList = ({ videoList }) => {
  return (
    <section className="video-list">
      <h3>NEXT VIDEOS</h3>

      {videoList.map((entry) => {
        return (
          <Link to={`/videos/${entry.id}`} key={entry.id}>
            <VideoListEntry key={entry.id} id={entry.id} img={entry.image} title={entry.title} channel={entry.channel} />
          </Link>
        );
      })}
    </section>
  );
};

export default VideoList;
