import React from "react";
import VideoUploadForm from "../VideoUploadForm/VideoUploadForm";
import "./VideoUpload.scss";

const VideoUpload = () => {
  return (
    <div className="video-upload">
      <h1 className="video-upload__title">Upload Video</h1>
      <VideoUploadForm />
    </div>
  );
};

export default VideoUpload;
