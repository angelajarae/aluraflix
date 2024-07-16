import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { updateVideo } from "../../api/api";
import { toast } from 'react-toastify';

export const EditModal = ({ video, setModalOpen, updateVideos }) => {
    const { register, handleSubmit, reset } = useForm({
        defaultValues: {
            image: video.image,
            video: video.video,
            section: video.section,
        },
    });

    const onSubmit = async (data) => {
      try{
        await updateVideo(video.id, data);
        updateVideos();
        setModalOpen(false);
        toast.success("Video actualizado con éxito.");
      }
      catch(error){
        toast.error("Hubo un error al actualizar el video.");
      }
        
    };

    return (
      <>
        <div className="fixed size-full inset-0 bg-slate-900 opacity-50"></div>
        <dialog className="rounded-2xl border-4 border-blue-300 inset-0 fixed bg-blue-950 my-12 w-1/2 h-auto px-16 py-20 flex flex-col justify-between">
          <FontAwesomeIcon icon={faCircleXmark} onClick={() => setModalOpen(false)} className='absolute right-5 top-5 h-7 text-white cursor-pointer'/>
          
          <h2 className="text-blue-600 uppercase font-extrabold text-4xl">Editar card:</h2>
          
          <form onSubmit={handleSubmit(onSubmit)} className="text-gray-400 my-5 flex flex-col justify-around h-full">
            <div className="flex flex-col gap-2">
              <label htmlFor="imagen" className="text-white font-semibold">Imagen</label>
              <input 
                type="text" 
                id="imagen" 
                className="p-2 border-2 rounded-md bg-transparent border-blue-600"
                {...register("image")}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="video" className="text-white font-semibold">Video</label>
              <input 
                type="text" 
                id="video" 
                className="p-2 border-2 rounded-md bg-transparent border-blue-600"
                {...register("video")}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="categoria" className="text-white font-semibold">Categoría</label>
              <select 
                id="categoria" 
                className="p-2 border-2 rounded-md bg-transparent border-blue-600"
                {...register("section")}
              >
                <option value="Frontend">Front end</option>
                <option value="Backend">Back end</option>
                <option value="Innovaciónygestión">Innovación y Gestión</option>
              </select>
            </div>
            <div className="flex justify-between mt-3">
              <button type="submit" className="hover:bg-black text-white border-2 border-white font-semibold uppercase rounded px-3 py-1 blue-shadow-tr hover:box-blue-shadow hover:text-blue-500 transition ease-in-out duration-300">
                Guardar
              </button>
              <button type="button" onClick={() => reset()} className="hover:bg-black text-white border-2 border-white font-semibold uppercase rounded px-3 py-1 blue-shadow-tr hover:box-blue-shadow hover:text-blue-500 transition ease-in-out duration-300">
                Limpiar
              </button>
            </div>
          </form>
        </dialog>
      </>
    );
};

export default EditModal;