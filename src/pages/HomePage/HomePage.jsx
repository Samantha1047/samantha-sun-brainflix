import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { API_URL, API_KEY } from "../../utils/api";
import axios from "axios";
import "./HomePage.scss";
import Header from "../../components/Header/Header";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import VideoInfo from "../../components/VideoInfo/VideoInfo";
import Comments from "../../components/Comments/Comments";
import VideoList from "../../components/VideoList/VideoList";

const HomePage = () => {
  const { videoId } = useParams();
  const [currentVideo, setCurrentVideo] = useState({});
  const [currentVideoList, setCurrentVideoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setIsError] = useState(false);

  const fetchDefaultVideoList = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(`${API_URL}/videos${API_KEY}`);
      const videoList = response.data;

      const DefaultvideoId = videoList[0].id;
      setCurrentVideoList(videoList.slice(1));
      const responseVideo = await axios.get(`${API_URL}/videos/${DefaultvideoId}${API_KEY}`);
      setCurrentVideo(responseVideo.data);

      setIsLoading(false);
    } catch (err) {
      setIsError(err.message);
    }
  };

  const fetchDynamicVideoList = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(`${API_URL}/videos${API_KEY}`);
      const videoList = response.data;
      setCurrentVideoList(videoList.filter((video) => video.id != videoId));
      setIsLoading(false);
    } catch (err) {
      setIsError(err.message);
    }
  };

  const fetchSelectVideo = async (id) => {
    try {
      setIsLoading(true);
      const responseVideo = await axios.get(`${API_URL}/videos/${id}${API_KEY}`);
      setCurrentVideo(responseVideo.data);
      setIsLoading(false);
    } catch (err) {
      setIsError(err.message);
    }
  };

  useEffect(() => {
    if (videoId) {
      fetchSelectVideo(videoId);
      fetchDynamicVideoList();
      window.scrollTo(0, 0);
    } else {
      fetchDefaultVideoList();
    }
  }, [videoId]);

  if (isLoading) return <div>Video Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <Header />
      <main>
        <VideoPlayer currentVideo={currentVideo} />

        <div className="brain-flix__content-container">
          <div className="brain-flix__info-comments-container">
            <VideoInfo currentVideo={currentVideo} />
            <Comments currentVideo={currentVideo} />
          </div>
          <div className="brain-flix__video-list">
            <VideoList videoList={currentVideoList} />
          </div>
        </div>
      </main>
    </>
  );
};

export default HomePage;
