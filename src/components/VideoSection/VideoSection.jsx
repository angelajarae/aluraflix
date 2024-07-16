import React from "react";
import Title from "./VideoTitle";
import Card from "./VideoCard";

const VideoSection = ({ title, videos, setModalOpen, updateVideos, setSelectedVideo }) => {
  return (
    <section className="flex flex-col items-start p-10 bg-customGray">
      <Title title={title} />
      <div className="grid grid-cols-3 gap-4 mt-4 w-full">
        {videos.map((video) => (
          <Card key={video.id} video={video} setModalOpen={setModalOpen} updateVideos={updateVideos} setSelectedVideo={setSelectedVideo}/>
        ))}
      </div>
    </section>
  );
};

export default VideoSection;
