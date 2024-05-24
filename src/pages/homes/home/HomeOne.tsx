import FooterOne from "../../../layout/footers/FooterOne";
import HeroSliderHomeOne from "./HeroSliderHomeOne";
// import HiringAreaHomeThree from "../../about/HiringAreaHomeThree";
import Wrapper from "../../../layout/Wrapper";
import HeaderFive from "../../../layout/headers/HeaderFive";

const HomeOne = () => {
  console.log('Home Loaded')
  return (
    <Wrapper>
      <HeaderFive />
      <main>
        <HeroSliderHomeOne />

      </main>
      <FooterOne />
    </Wrapper>
  );
};

export default HomeOne;
