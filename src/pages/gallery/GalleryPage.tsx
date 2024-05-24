
import Wrapper from '../../layout/Wrapper';
import FooterTwo from '../../layout/footers/FooterTwo';
import HeaderVideo from '../../layout/headers/HeaderVideo';
import GalleryArea from './GalleryArea';
import GalleryHeading from './GalleryHeading';


const GalleryPage = () => {
  return (
    <Wrapper>
      <HeaderVideo />
      <main>
        {/* <Breadcrumb sub_title='We are here for your care.' title='Breath Seamlessly' page='Video' imgUrl={'/disease/Lung-image-with-doctor.jpg'} /> */}
        {/* <BlogArea /> */}
        <section className="blog-area primary-bg pt-80 pb-80">

          <GalleryHeading />
          <GalleryArea />

        </section>
      </main>
      <FooterTwo />
    </Wrapper>
  );
};

export default GalleryPage;
