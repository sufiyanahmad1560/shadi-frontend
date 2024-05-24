
// import AboutAreHomeThree from '@/components/homes/home-3/AboutAreHomeThree';
// import TeamAreaHomeThree from '@/components/homes/home-3/TeamAreaHomeThree';

import FooterThree from '../../layout/footers/FooterThree';
import HeaderFive from '../../layout/headers/HeaderFive';
import Breadcrumb from '../common/Breadcrumb';

const DoctorTwo = () => {
  return (
    <>
      <HeaderFive />
      <main>
        <Breadcrumb sub_title='We are here for your care.' title='Doctor 02' page='Doctor 02' imgUrl='' />
        {/* <TeamAreaHomeThree /> */}
        {/* <AboutAreHomeThree style={true} /> */}
      </main>
      <FooterThree />
    </>
  );
};

export default DoctorTwo;