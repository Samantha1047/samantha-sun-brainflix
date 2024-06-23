import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./HomePage.scss";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import VideoInfo from "../../components/VideoInfo/VideoInfo";
import Comments from "../../components/Comments/Comments";
import VideoList from "../../components/VideoList/VideoList";

const API_URL = import.meta.env.VITE_API_URL;

const HomePage = () => {
  const { videoId } = useParams();
  const [currentVideo, setCurrentVideo] = useState({});
  const [videoList, setVideoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setIsError] = useState(false);

  const fetchVideo = async () => {
    try {
      setIsLoading(true);
      const { data: videoList } = await axios.get(`${API_URL}/videos`);
      setVideoList(videoList);

      if (videoId) {
        const { data: fetchedVideo } = await axios.get(`${API_URL}/videos/${videoId}`);
        setCurrentVideo(fetchedVideo);
      } else {
        setCurrentVideo(videoList[0]);
      }
    } catch (err) {
      setIsError(err.message);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    fetchVideo();
  }, [videoId]);

  if (isLoading) return <div>Video List Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <main>
        <VideoPlayer currentVideo={currentVideo} />

        <section className="brain-flix__content-container">
          <section className="brain-flix__info-comments-container">
            <VideoInfo currentVideo={currentVideo} />
            <Comments currentVideo={currentVideo} />
          </section>
          <section className="brain-flix__video-list">
            <VideoList currentVideoList={videoList.filter((video) => video.id !== currentVideo.id)} />
          </section>
        </section>
      </main>
    </>
  );
};

export default HomePage;
