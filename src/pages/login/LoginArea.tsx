
import { ToastContainer, toast } from 'react-toastify';

import { yupResolver } from '@hookform/resolvers/yup';
import { authService } from '../../services/auth.service';
import { LoginUserData, SendPwdResetMailFormValue } from '../../types/user';

import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import * as yup from "yup";
import LoadingOverlay from '../../compoments/common/LoadingOverlay';
import { useAuth } from '../../context/AuthContext';
import { APP_ROUTES, PAGE_TITLE } from '../../utils/constant';

const schema = yup
  .object({
    email: yup.string().required().email().label("Email"),
    password: yup.string().required().min(4).label("Password"),

  })
  .required();


// A custom validation function. This must return an object
// which keys are symmetrical to our values/initialValues
const validate = (values: SendPwdResetMailFormValue) => {
  const errors: any = {};

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  return errors;
};



const LoginArea = () => {
  const { login } = useAuth();
  const { register, handleSubmit, reset, formState: { errors }, } = useForm<LoginUserData>({ resolver: yupResolver(schema), });
  const [loading, setLoading] = useState(false);
  const [linkSent, setLinkSent] = useState(false);


  useEffect(() => {
    // Set the page title when the component mounts
    document.title = PAGE_TITLE.LOGIN;
    // Optionally, you can return a cleanup function to reset the title when the component unmounts
    return () => {
      document.title = PAGE_TITLE.HOME;
    };
  }, []);

  const onSubmit = async (data: LoginUserData) => {
    setLoading(true);
    await authService.login(data)
      .then((response) => {
        const userData = response.data;
        login({
          id: userData.id,
          name: userData.name,
          email: userData.email,
          mobile: userData.mobile,
          role: userData.role,
          token: userData.token
        })
        const notify = () => toast("User logged in successfully!");
        notify();
        reset();
      })
      .catch((error) => {
        const notify = () => toast(error.response.data.error);
        notify();
      }).finally(() => {
        setLoading(false);
      });
    // console.log(data);
  };


  const formik = useFormik({
    initialValues: {
      email: ''
    },
    validate,
    onSubmit: (values: SendPwdResetMailFormValue) => {
      handleResetPwdSubmit(values);
    },
  });
  const handleResetPwdSubmit = async (data: SendPwdResetMailFormValue) => {
    setLoading(true);
    await authService.sendPwdResetMail(data)
      .then((response) => {
        setLinkSent(true);
        const notify = () => toast("Password reset email has been sent!");
        notify();
      })
      .catch((error) => {
        const notify = () => toast(error.response.data.error);
        notify();
      }).finally(() => {
        setLoading(false);
      });

  }


  return (
    <>
      {loading && <LoadingOverlay />}
      <ToastContainer />

      <section className="login-area pt-100 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="basic-login">
                <h3 className="text-center mb-60">Login From Here</h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <label htmlFor="name">Username or email <span>**</span></label>
                  <input id="name" type="text" {...register("email")} placeholder="Enter Username or Email address..." />
                  <p className="form_error">{errors.email?.message}</p>

                  <label htmlFor="pass">Password <span>**</span></label>
                  <input id="pass" type="password" {...register("password")} placeholder="Enter password..." />
                  <p className="form_error">{errors.password?.message}</p>

                  <div className="login-action mb-20 mt-20 d-flex justify-content-between">
                    <div>
                      <span className="">
                        <input id="remember" type="checkbox" />
                        <label htmlFor="remember">Remember me!</label>
                      </span>
                    </div>
                    <div>
                      <span className="forgot-login">
                        {/* <!-- Button trigger modal --> */}
                        <span data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                          Forgot password?
                        </span>
                        {/* <button type="button" className="btn btn-link btn-sm" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                          Forgot password?
                        </button> */}
                      </span>
                    </div>
                  </div>
                  <button className="primary_btn btn-icon-green w-100">Login Now</button>
                  <div className="or-divide"><span>or</span></div>
                  <Link to={APP_ROUTES.REGISTER} className="primary_btn theme-btn-2 w-100">Register Now</Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*  Vertically centered modal  */}
      {/* <div className="modal-dialog modal-dialog-centered"> */}
      <div className=" modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">

            <div className="modal-body">
              <div className="modal-close-btn">
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="basic-login" style={{ padding: "36px 16px" }}>
                <p className={linkSent ? 'show-success-msg' : 'hide-success-msg'}>A link to reset password has been sent to your email.</p>
                <div className='text-center mb-20'>
                  <i className='fa fa-lock' style={{ fontSize: "50px" }}></i>
                </div>
                <h3 className="text-center mb-10">Forgot Password?</h3>
                <h6 className="text-center mb-40">You can reset your password here.</h6>
                <form onSubmit={formik.handleSubmit}>
                  <input id="email" type="email" value={formik.values.email} onChange={formik.handleChange}
                    onBlur={formik.handleBlur} placeholder="Enter Email address..." />
                  <p className="form_error-2">{formik.errors.email ? formik.errors.email : null}</p>

                  <button className="primary_btn btn-icon-green w-100">Send My Password</button>
                </form>
              </div>
            </div>
            {/* <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Understood</button>
            </div> */}
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default LoginArea;