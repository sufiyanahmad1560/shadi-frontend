
import imgUrl from '../../assets/img/login/login.jpg';
import Breadcrumb from '../../compoments/common/Breadcrumb';
import Wrapper from '../../layout/Wrapper';
import FooterThree from '../../layout/footers/FooterThree';
import HeaderFive from '../../layout/headers/HeaderFive';
import RegisterArea from './RegisterArea';
const Register = () => {
  return (
    <Wrapper>
      <HeaderFive />
      <main>
        <Breadcrumb sub_title='We are here for your care.' title='Register' page='Register' imgUrl={imgUrl} />
        <RegisterArea />
      </main>
      <FooterThree />
    </Wrapper>
  );
};

export default Register;