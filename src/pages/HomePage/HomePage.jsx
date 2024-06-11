import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Axios from "axios";
import "./HomePage.scss";
import VideoData from "../../data/video-details.json";
import Header from "../../components/Header/Header";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import VideoInfo from "../../components/VideoInfo/VideoInfo";
import Comments from "../../components/Comments/Comments";
import VideoList from "../../components/VideoList/VideoList";

const HomePage = () => {
  const [currentVideo, setCurrentVideo] = useState(VideoData[0]);
  console.log(VideoData);
  const [currentVideoList, setCurrentVideoList] = useState(VideoData.slice(1));

  /*   useEffect(() => {
    const getVideo = async () => {
      const response = await axios.get(API_URL + "/videos" + API_KEY);
      setCurrentVideo(response.data);
    };
  });
 */

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
    <>
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
    </>
  );
};

export default HomePage;
