


import { useEffect } from 'react';
import Wrapper from '../../layout/Wrapper';
import FooterThree from '../../layout/footers/FooterThree';
import HeaderSix from '../../layout/headers/HeaderSix';
import { PAGE_TITLE } from '../../utils/constant';
import HeroBannerHomeTwo from '../homes/home-2/HeroBannerHomeTwo';
import AppointmentAreaHomeThree from '../homes/home-3/AppointmentAreaHomeThree';

const About = () => {
  console.log('About Loaded')

  useEffect(() => {
    // Set the page title when the component mounts
    document.title = PAGE_TITLE.ABOUT;

    // Optionally, you can return a cleanup function to reset the title when the component unmounts
    return () => {
      document.title = PAGE_TITLE.HOME;
    };
  }, []);

  return (
    <Wrapper>
      <HeaderSix />
      <main>
        <HeroBannerHomeTwo />

        <AppointmentAreaHomeThree />

      </main>
      <FooterThree />
    </Wrapper>
  );
};

export default About;