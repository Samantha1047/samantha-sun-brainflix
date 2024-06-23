import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import VideoListEntry from "../VideoListEntry/VideoListEntry";
import "./VideoList.scss";

const VideoList = ({ currentVideoList }) => {
  return (
    <section className="video-list">
      <h3>NEXT VIDEOS</h3>

      {currentVideoList.map((entry) => {
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
