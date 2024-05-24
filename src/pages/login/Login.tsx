
import bgImg from '../../assets/img/login/login.jpg';
import Breadcrumb from '../../compoments/common/Breadcrumb';
import Wrapper from '../../layout/Wrapper';
import FooterThree from '../../layout/footers/FooterThree';
import HeaderFive from '../../layout/headers/HeaderFive';
import LoginArea from './LoginArea';

const Login = () => {
  return (
    <Wrapper>
      <HeaderFive />
      <main>
        <Breadcrumb sub_title='We are here for your care.' title='Login' page='Login' imgUrl={bgImg} />
        <LoginArea />
      </main>
      <FooterThree />
    </Wrapper>
  );
};

export default Login;