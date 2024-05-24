

import React, { lazy, Suspense } from "react";
// import { BrowserRouter as Router } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Route, Routes } from "react-router-dom";
import RequireAuth from "./auth/RequireAuth";
import ErrorPage from "./pages/ErrorPage";
import AppointmentListPage from "./pages/admin/AppointmentListPage";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import ResetPassword from "./pages/reset-password/ResetPassword";
import { APP_ROUTES } from "./utils/constant";
import AppLoader from "./compoments/common/AppLoader";

const HomeOne = lazy(() => import("./pages/homes/home/HomeOne"));
const About = lazy(() => import("./pages/about/About"));
const ContactPage = lazy(() => import("./pages/contact/ContactPage"));


const App: React.FC = () => {
  return (
    <Suspense fallback={<AppLoader />}>
      <Routes>
        <Route path={APP_ROUTES.HOME} element={<HomeOne />} />
        <Route path={APP_ROUTES.LOGIN} element={<Login />} />
        <Route path={APP_ROUTES.REGISTER} element={<Register />} />

        <Route path={APP_ROUTES.ABOUT} element={<About />} />
        <Route path={APP_ROUTES.CONTACT} element={<ContactPage />} />


        <Route path={APP_ROUTES.RESET_PASSWORD} element={<ResetPassword />} />

        <Route element={<RequireAuth />}>
          <Route path={APP_ROUTES.APPOINTMENT_LIST} element={<AppointmentListPage />} />
        </Route>
        {/* Catch All other path */}
        <Route path={"*"} element={<ErrorPage />} />


      </Routes>
    </Suspense>
  );
}

export default App;
