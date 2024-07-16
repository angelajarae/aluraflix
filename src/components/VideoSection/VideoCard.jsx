import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { deleteVideo } from "../../api/api";
import { toast } from "react-toastify";

export const VideoCard = ({ video, setModalOpen, updateVideos, setSelectedVideo }) => {
  async function onDelete() {
    try {
      await deleteVideo(video.id);
      updateVideos();
      toast.success("Video eliminado con éxito.");
    }
    catch (error) {
      console.log(error);
      toast.error("Hubo un error al eliminar el video.");
    }

  }
  function onEdit() {
    setSelectedVideo(video);
    setModalOpen(true);
  }
  
    return (
    <div className="w-full">
      <a href={video.video} target="_blank" rel="noopener noreferrer" className="cursor-pointer">
        <img src={video.image} alt="Video Thumbnail" className = "object-cover w-full h-60" />
      </a>

      <div className="flex bg-black py-1 items-center justify-around text-white transiton ease-in-out duration-300">
        <div onClick={onDelete} className='flex gap-2 hover:text-red-500 cursor-pointer'>
          <FontAwesomeIcon icon={faTrashCan} className="self-center" />
          <p>Borrar</p>
        </div>
        <div onClick={onEdit} className='flex gap-2 hover:text-purple-500 cursor-pointer transiton ease-in-out duration-300'>
          <FontAwesomeIcon icon={faPenToSquare} className="self-center" />
          <p>Editar</p>
        </div>
      </div>
    </div>
  )
}

export default VideoCard;