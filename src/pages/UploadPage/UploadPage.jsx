import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import "./UploadPage.scss";
import Header from "../../components/Header/Header";
import DividerNoPadding from "../../components/DividerNoPadding/DividerNoPadding";
import VideoUpload from "../../components/VideoUpload/VideoUpload";

const UploadPage = () => {
  return (
    <div className="upload-page">
      <Header />
      <DividerNoPadding />
      <VideoUpload />
    </div>
  );
};

export default UploadPage;
