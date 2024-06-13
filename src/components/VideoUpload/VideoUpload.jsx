import React from "react";
import VideoUploadForm from "../VideoUploadForm/VideoUploadForm";
import DividerNoPadding from "../DividerNoPadding/DividerNoPadding";
import "./VideoUpload.scss";

const VideoUpload = () => {
  return (
    <div className="video-upload">
      <h1 className="video-upload__title">Upload Video</h1>
      <div className="divider-without-mobile">
        <DividerNoPadding />
      </div>
      <VideoUploadForm />
    </div>
  );
};

export default VideoUpload;
