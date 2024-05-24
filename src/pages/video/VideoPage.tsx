
import Wrapper from "../../layout/Wrapper";
import FooterTwo from "../../layout/footers/FooterTwo";
import HeaderVideo from "../../layout/headers/HeaderVideo";
import VideoListArea from "./VideoListArea";
import VideoListHeading from './VideoListHeading';





const VideoPage = () => {
  return (
    <Wrapper>
      <HeaderVideo />
      <main>
        {/* <Breadcrumb sub_title='We are here for your care.' title='Breath Seamlessly' page='Video' imgUrl={'/disease/Lung-image-with-doctor.jpg'} /> */}
        {/* <BlogArea /> */}
        <section className="blog-area primary-bg pt-80 pb-80">

          <VideoListHeading />
          <VideoListArea />

        </section>
      </main>
      <FooterTwo />
    </Wrapper>
  );
};

export default VideoPage;
