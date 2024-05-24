
import { useEffect } from "react";
import AppointmentProvider from "../../context/AppointmentContext";
import Wrapper from "../../layout/Wrapper";
import FooterThree from "../../layout/footers/FooterThree";
import HeaderFive from '../../layout/headers/HeaderFive';
import { PAGE_TITLE } from "../../utils/constant";
import AboutAreaHomeFour from '../homes/home-4/AboutAreaHomeFour';
import RoutineArea from "./RoutineArea";

const AppointmentPage = () => {

  useEffect(() => {
    // Set the page title when the component mounts
    document.title = PAGE_TITLE.APPOINTMENT;

    // Optionally, you can return a cleanup function to reset the title when the component unmounts
    return () => {
      document.title = PAGE_TITLE.HOME;
    };
  }, []);

  return (
    <Wrapper>
      <HeaderFive />
      <main>
        <AppointmentProvider>
          {/* <Breadcrumb sub_title='We are here for your care.' title='Appointment' page='Appointment' imgUrl='/appointment/hospital.jpg' /> */}
          <RoutineArea />
          {/* <AppointmentCalculateArea /> */}
          <AboutAreaHomeFour />
        </AppointmentProvider>
      </main>
      <FooterThree />
    </Wrapper>
  );
};

export default AppointmentPage;