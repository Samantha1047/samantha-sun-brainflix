import { useState } from "react";
import "./App.scss";
import VideoData from "./data/video-details.json";
import Header from "./components/Header/Header";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import VideoInfo from "./components/VideoInfo/VideoInfo";
import Comments from "./components/Comments/Comments";

function App() {
  const [currentVideo, setCurrentVideo] = useState(VideoData[0]);
  console.log(VideoData[0]);

  const selectVideo = (videoId) => {
    console.log("Selected video:", videoId);
    const videoToSelect = VideoData.find((video) => {
      return video.id === videoId;
    });
    setCurrentVideo(videoToSelect);
  };

  return (
    <>
      <Header />
      <main>
        <VideoPlayer videoData={currentVideo} />
        <VideoInfo videoData={currentVideo} />
        <Comments videoData={currentVideo} />
      </main>
    </>
  );
}

export default App;
