import { useState } from "react";
import Banner from "../components/Layout/Banner";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import EditModal from "../components/VideoSection/EditModal";
import VideoSection from "../components/VideoSection/VideoSection";
import { filterVideosBySection } from "../api/api";
import { useLoaderData } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export async function loader() {
  const videosFront = (await filterVideosBySection("Frontend")).data;
  const videosBack = (await filterVideosBySection("Backend")).data;
  const videosInnovacion = (await filterVideosBySection("Innovaciónygestión")).data;
  return ({ videosFront, videosBack, videosInnovacion });
}

export const HomePage = () => {
  const [videos, setVideos] = useState(useLoaderData());
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState({});

  const updateVideos = async () => {
    const updatedVideosFront = (await filterVideosBySection("Frontend")).data;
    const updatedVideosBack = (await filterVideosBySection("Backend")).data;
    const updatedVideosInnovacion = (await filterVideosBySection("Innovaciónygestión")).data;
    setVideos({
      videosFront: updatedVideosFront,
      videosBack: updatedVideosBack,
      videosInnovacion: updatedVideosInnovacion
    });
  };

  return (
    <>
      <Header />
      <Banner />

      {videos.videosFront.length != 0 &&
        <VideoSection title="Front end" videos={videos.videosFront} setModalOpen={setModalOpen} updateVideos={updateVideos} setSelectedVideo={setSelectedVideo}
      />}
      {videos.videosBack.length != 0 &&
        <VideoSection title="Back end" videos={videos.videosBack} setModalOpen={setModalOpen} updateVideos={updateVideos} setSelectedVideo={setSelectedVideo}
      />}
      {videos.videosInnovacion.length != 0 &&
        <VideoSection title="Innovación y Gestión" videos={videos.videosInnovacion} setModalOpen={setModalOpen} updateVideos={updateVideos} setSelectedVideo={setSelectedVideo}
      />}

      {modalOpen && <EditModal setModalOpen={setModalOpen} video={selectedVideo} updateVideos={updateVideos} />}

      <Footer />
      <ToastContainer />
    </>
  )
}

export default HomePage;