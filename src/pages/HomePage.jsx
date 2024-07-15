import Banner from "../components/Layout/Banner";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import VideoSection from "../components/VideoSection/VideoSection";

export const HomePage = () => {
    return (
      <>
        <Header/>
        <Banner/>
        <VideoSection/>
        <VideoSection/>
        <Footer/>
      </>
    )
}
  
export default HomePage;