import VideoTitle from "./VideoTitle"; 
import VideoCard from "./VideoCard";
import EditModal from "./EditModal";

export const VideoSection = () => {
  return (
    <section>
      <VideoTitle/>
      <VideoCard/>
      <VideoCard/>
      <VideoCard/>
      <VideoCard/>
      <VideoCard/>
      <VideoCard/>
      <EditModal/>
    </section>
  )
}

export default VideoSection;
