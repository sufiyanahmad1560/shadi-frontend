
import { ToastContainer, toast } from 'react-toastify';

import { useNavigate, useParams } from 'react-router-dom';

import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import LoadingOverlay from '../../compoments/common/LoadingOverlay';
import { authService } from '../../services/auth.service';
import { ResetPasswordFormValue } from '../../types/user';
import { APP_ROUTES, PAGE_TITLE } from '../../utils/constant';


// A custom validation function. This must return an object
// which keys are symmetrical to our values/initialValues
const validate = (values: ResetPasswordFormValue) => {
  const errors: any = {};
  if (!values.password) {
    errors.password = 'Required';
  } else if (values.password.length < 3) {
    errors.password = 'Must be at least 4 characters';
  }

  if (!values.cnfrmPassword) {
    errors.cnfrmPassword = 'Required';
  } else if (values.cnfrmPassword.length < 3) {
    errors.cnfrmPassword = 'Must be at least 4 characters';
  } else if (values.cnfrmPassword !== values.password) {
    errors.cnfrmPassword = 'Password mismatch';
  }

  return errors;
};


const ResetPasswordArea = () => {
  const navigate = useNavigate();
  const { token } = useParams<{ token: string }>();
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    // Set the page title when the component mounts
    document.title = PAGE_TITLE.RESET_PWD;
    // Optionally, you can return a cleanup function to reset the title when the component unmounts
    return () => {
      document.title = PAGE_TITLE.HOME;
    };
  }, []);

  const formik = useFormik({
    initialValues: {
      password: '',
      cnfrmPassword: ''
    },
    validate,
    onSubmit: (values: ResetPasswordFormValue) => {
      handlePasswordReset(values);
    },
  });

  const handlePasswordReset = async (data: ResetPasswordFormValue) => {
    setLoading(true);
    await authService.resetPassword(data, token)
      .then((response) => {

        const notify = () => toast("Password reset successfully!");
        notify();
        navigate(APP_ROUTES.LOGIN);
      })
      .catch((error) => {
        const notify = () => toast(error.response.data.error);
        notify();
      }).finally(() => {
        setLoading(false);
      });

    // console.log(data);
  };



  // const handleInputChange = (event: any) => {
  //   const input = event.target.value;

  //   // Allow only numeric input
  //   const numericInput = input.replace(/\D/g, '');

  //   // Restrict to 10 digits
  //   const limitedInput = numericInput.slice(0, 10);

  //   schema.cast({ mobile: limitedInput });
  // };


  return (
    <>
      {loading && <LoadingOverlay />}
      <section className="login-area pt-120 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="basic-login">
                <h3 className="text-center mb-60">Reset Password Here</h3>
                <form onSubmit={formik.handleSubmit}>
                  {/* <p className={tokenFound ? 'hide-error-msg' : 'show-error-msg'}>Token </p> */}

                  <label htmlFor="password-id">Password <span>**</span></label>
                  <input id="password-id" type="password" name="password" value={formik.values.password} onChange={formik.handleChange}
                    onBlur={formik.handleBlur} placeholder="Enter password..." autoComplete="current-password" />
                  <p className="form_error-2">{formik.errors.password ? formik.errors.password : null}</p>

                  <label htmlFor="cnfrm-password-id">Confirm Password <span>**</span></label>
                  <input id="cnfrm-password-id" type="password" name="cnfrmPassword" value={formik.values.cnfrmPassword} onChange={formik.handleChange}
                    onBlur={formik.handleBlur} placeholder="Re-enter password..." autoComplete="current-password" />
                  <p className="form_error-2">{formik.errors.cnfrmPassword ? formik.errors.cnfrmPassword : null}</p>

                  <div className="mt-10"></div>

                  <button className="primary_btn btn-icon-green w-100">Reset Password</button>
                  <ToastContainer />
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ResetPasswordArea;