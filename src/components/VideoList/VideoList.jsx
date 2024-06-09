import React from "react";
import VideoListEntry from "../VideoListEntry/VideoListEntry";

const VideoList = ({ videoList, onSelectVideo }) => {
  const handleSelectVideo = (id) => {
    onSelectVideo(id);
  };

  return (
    <section className="video-list">
      <h3>NEXT VIDEOS</h3>
      <ul>
        {videoList.map((entry) => {
          return <VideoListEntry key={entry.id} id={entry.id} img={entry.image} title={entry.title} channel={entry.channel} onSelectVideo={handleSelectVideo} />;
        })}
      </ul>
    </section>
  );
};

export default VideoList;
