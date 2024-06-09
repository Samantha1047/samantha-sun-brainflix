import { useState } from "react";
import "./App.scss";
import VideoData from "./data/video-details.json";
import Header from "./components/Header/Header";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import VideoInfo from "./components/VideoInfo/VideoInfo";
import Comments from "./components/Comments/Comments";
import VideoList from "./components/VideoList/VideoList";

function App() {
  const [currentVideo, setCurrentVideo] = useState(VideoData[0]);
  console.log(VideoData);
  const [currentVideoList, setCurrentVideoList] = useState(VideoData.slice(1));

  const selectVideo = (videoId) => {
    console.log("Selected video:", videoId);
    const videoToSelect = VideoData.find((video) => {
      return video.id === videoId;
    });
    setCurrentVideo(videoToSelect);

    const updatedVieoList = VideoData.filter((item) => item.id !== videoId);
    setCurrentVideoList(updatedVieoList);

    //set the view to top of the page
    window.scrollTo(0, 0);
  };

  return (
    <div className="brain-flix-app">
      <Header />
      <main>
        <VideoPlayer OnSelectvideo={currentVideo} />
        <div className="brain-flix__content-container">
          <div className="brain-flix__info-comments-container">
            <VideoInfo OnSelectvideo={currentVideo} />
            <Comments OnSelectvideo={currentVideo} />
          </div>
          <div className="brain-flix__video-list">
            <VideoList videoList={currentVideoList} onSelectVideo={selectVideo} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
