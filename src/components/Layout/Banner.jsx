import Video from "../../assets/images/banner-video-image.png";
import BackgroundImage from "../../assets/images/banner-image.png";
import Title from "../VideoSection/VideoTitle";
export const Banner = () => {
    return (
      <section 
        className="flex bg-{BackgroundImage} bg-cover bg-center text-white py-40 px-10 gap-44"
        style={{ backgroundImage: `url(${BackgroundImage})`}} 
      >
        <div className="flex items-start flex-col gap-8">
          <Title title={"Front end"}/>
          <div>
            <p className="text-2xl font-bold">Challenge React</p>
            <p>Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React.</p>
          </div>
        </div>

        <img src={Video} className="w-2/5"/>
      </section>
      
    )
}

export default Banner;
