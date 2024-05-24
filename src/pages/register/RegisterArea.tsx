
import { ToastContainer, toast } from 'react-toastify';

import { Link } from 'react-router-dom';

import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import LoadingOverlay from '../../compoments/common/LoadingOverlay';
import { useAuth } from '../../context/AuthContext';
import { authService } from '../../services/auth.service';
import { RegisterFormValue } from '../../types/user';
import { APP_ROUTES, PAGE_TITLE } from '../../utils/constant';



// const schema = yup
//   .object().shape({
//     name: yup.string().required().label("Name"),
//     mobile: yup.number().positive().integer().min(1000000000).required().label("Mobile"),
//     email: yup.string().required().email().label("Email"),
//     password: yup.string().required().min(6).label("Password"),

//   })
//   .required();

// interface FormValues {
//   name: string;
//   mobile: string;
//   email: string;
//   password: string;
// }

// A custom validation function. This must return an object
// which keys are symmetrical to our values/initialValues
const validate = (values: RegisterFormValue) => {
  const errors: any = {};
  if (!values.name) {
    errors.name = 'Required';
  } else if (values.name.length < 3) {
    errors.name = 'Must be at least 3 characters';
  }

  if (!values.mobile) {
    errors.mobile = 'Required';
  } else if (values.mobile.length > 10) {
    errors.mobile = 'Mobile number must be 10 digits';
  } else if (values.mobile.length < 10) {
    errors.mobile = 'Mobile number must be 10 digits';
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.password) {
    errors.password = 'Required';
  } else if (values.password.length < 3) {
    errors.password = 'Must be at least 3 characters';
  }

  return errors;
};


const RegisterArea = () => {
  const { login } = useAuth();
  // const { register, handleSubmit, reset, formState: { errors }, } = useForm<RegisterUserData>({ resolver: yupResolver(schema), });
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    // Set the page title when the component mounts
    document.title = PAGE_TITLE.REGISTER;
    // Optionally, you can return a cleanup function to reset the title when the component unmounts
    return () => {
      document.title = PAGE_TITLE.HOME;
    };
  }, []);

  const formik = useFormik({
    initialValues: {
      name: '',
      mobile: '',
      email: '',
      password: ''
    },
    validate,
    onSubmit: (values: RegisterFormValue) => {
      onSubmit(values);
    },
  });

  const onSubmit = async (data: RegisterFormValue) => {
    setLoading(true);
    await authService.register(data)
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
        const notify = () => toast("User registered successfully!");
        notify();
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
                <h3 className="text-center mb-60">Signup From Here</h3>
                <form onSubmit={formik.handleSubmit}>
                  <label htmlFor="username-id">Name <span>**</span></label>
                  <input id="username-id" type="text" name='name' value={formik.values.name} onChange={formik.handleChange}
                    onBlur={formik.handleBlur} placeholder="Enter Name" autoComplete="current-name" />
                  <p className="form_error-2">{formik.errors.name ? formik.errors.name : null}</p>

                  <label htmlFor="mobile">Mobile Number <span>**</span></label>
                  <input id="mobile" type="text" name="mobile" value={formik.values.mobile} onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="Enter Mobile number..." />
                  <p className="form_error-2">{formik.errors.mobile ? formik.errors.mobile : null}</p>

                  <label htmlFor="email-id">Email Address <span>**</span></label>
                  <input id="email-id" type="email" name="email" value={formik.values.email} onChange={formik.handleChange}
                    onBlur={formik.handleBlur} placeholder="Enter Email address..." autoComplete="current-email" />
                  <p className="form_error-2">{formik.errors.email ? formik.errors.email : null}</p>

                  <label htmlFor="password-id">Password <span>**</span></label>
                  <input id="password-id" type="password" name="password" value={formik.values.password} onChange={formik.handleChange}
                    onBlur={formik.handleBlur} placeholder="Enter password..." autoComplete="current-password" />
                  <p className="form_error-2">{formik.errors.password ? formik.errors.password : null}</p>

                  <div className="mt-10"></div>
                  <button type="submit" className="primary_btn theme-btn-2 w-100">Register Now</button>

                  <div className="or-divide"><span>or</span></div>
                  <Link to={APP_ROUTES.LOGIN} className="primary_btn btn-icon-green w-100">login Now</Link>
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

export default RegisterArea;