
import imgUrl from '../../assets/img/login/login.jpg';
import Breadcrumb from '../../compoments/common/Breadcrumb';
import Wrapper from '../../layout/Wrapper';
import FooterThree from '../../layout/footers/FooterThree';
import HeaderFive from '../../layout/headers/HeaderFive';
import ResetPasswordArea from './ResetPasswordArea';

const ResetPassword = () => {
  return (
    <Wrapper>
      <HeaderFive />
      <main>
        <Breadcrumb sub_title='We are here for your care.' title='Reset Password' page='Reset Password' imgUrl={imgUrl} />
        <ResetPasswordArea />
      </main>
      <FooterThree />
    </Wrapper>
  );
};

export default ResetPassword;