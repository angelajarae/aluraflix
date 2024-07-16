import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import { useForm } from "react-hook-form";
import { createVideo } from "../api/api";
import { ToastContainer ,toast } from "react-toastify";


export const NewVideoPage = () => {
  const {register,handleSubmit,reset}=useForm();

  async function onSubmit(data){
    try{
      await createVideo(data)
      toast.success("Video creado con éxito.");
    }
    catch(error){
      toast.error("Se ha producido un error al crear el video.");
    }
  }

  return (
    <>
      <Header />

      <section className="p-12 bg-slate-800 text-white">
        <div className="text-center">
          <h1 className="font-bold uppercase text-4xl">Nuevo video</h1>
          <p className="uppercase m-4">Complete el formulario para crear una nueva tarjeta de video</p>
        </div>
        <p className="text-xl font-semibold my-14">Crear tarjeta</p>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div  className="mt-3 grid grid-cols-2 gap-14">
            <div className="w-full flex flex-col gap-2">
              <label htmlFor="imagen" className="font-semibold">Imagen</label>
              <input 
                id="imagen" 
                type="text" 
                className="w-full text-black px-2 py-2 rounded-md bg-slate-700 border-2 border-slate-500" 
                {...register("image")}
              />
            </div>

            <div className="w-full flex flex-col gap-2">
              <label htmlFor="video" className="font-semibold">Video</label>
              <input 
                id="video" 
                type="text" 
                className="w-full text-black px-2 py-2 rounded-md bg-slate-700 border-2 border-slate-500" 
                {...register("video")}
              />
            </div>

            <div className="w-full flex flex-col gap-2">
              <label htmlFor="categoria" className="font-semibold">Categoría</label>
              <select 
                id="categoria" 
                className="w-full text-black px-2 py-2 rounded-md bg-slate-700 border-2 border-slate-500" 
                {...register("section")}
              >
                <option value="Frontend">Front end</option>
                <option value="Backend">Back end</option>
                <option value="Innovaciónygestión">Innovación y Gestión</option>
              </select>
            </div>
          </div>

          <div className="mt-28 flex gap-8">
            <button type="submit" className="font-semibold text-sm uppercase px-7 py-2 border-2 rounded-md border-white hover:border-blue-500 transition ease-in-out duration-300">Guardar</button>
            <button type="reset" onClick={()=>reset()} className="font-semibold text-sm uppercase px-7 py-2 border-2 rounded-md border-white hover:border-blue-500 transition ease-in-out duration-300">Limpiar</button>
          </div>
        </form>

      </section>

      <Footer />
      <ToastContainer/>
    </>
  )
}

export default NewVideoPage;