

import { Link } from "react-router-dom";
import avatar_img from "../../../assets/img/doctor/drarvind.jpg";
import about_thumb_1 from "../../../assets/img/home4/about/about_thumb2.jpg";
import overlap from "../../../assets/img/home4/about/overlap.jpg";
import phone_icon from "../../../assets/img/home4/icon/about__phone__icon.png";
import { CONTACT, SH_DOCTOR } from "../../../utils/constant";

const about_content = {
  phone: CONTACT.PHONE_HOSPITAL_3,
  sub_title: "About Shivam Health Care ",
  title: "20+ Years We Provide Services",
  sm_des_1: "We are eager to take the nation towards the new horizons of progress in the field of medicine. We believe in strong Patient-Doctor relationship and our motto is: 'Healthy People Wealthy Nation'.",
  sm_des_2: "Shivam Homoeopathy has a Team of highly talented Homoeopathic Doctors to relieve the suffering of patients who come to us, in the shortest possible time.",
  avatar_info: "We are eager to take the nation towards the new horizons of progress in the field of medicine.",
  avatar_name: SH_DOCTOR.DR_ARVIND,
}
const { phone, sub_title, title, sm_des_1, sm_des_2, avatar_info, avatar_name } = about_content

const AboutAreaHomeFour = () => {
  return (
    <>
      <section className="about-area pt-130 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-5">
              <div className="h4about-thumb pos-rel">
                <img src={about_thumb_1} alt="theme-pure" />
                <Link to="#" className="call-btn f-700 white-color green-bg">
                  <i className="call-icon" >
                    <img src={phone_icon} alt="theme-pure" />
                  </i><span>Call : {phone}</span>
                </Link>
                <img src={overlap} alt="" className="about-overlap__thumb" />
              </div>
            </div>
            <div className="col-xl-6 col-lg-7">
              <div className="about-right-side h4about-right mb-30">
                <div className="about-title mb-20">
                  <h5 className="pink-color">{sub_title}</h5>
                  <h1>{title}</h1>
                </div>
                <div className="about-text">
                  <p className="theme-color">
                    {sm_des_1}
                  </p>
                  <p className="mb-20">
                    {sm_des_2}
                  </p>
                </div>
                <div className="about-author d-flex align-items-center">
                  <div className="author-ava h4author-ava">
                    <img src={avatar_img} alt="theme-pure" height="100" width="100" />
                  </div>
                  <div className="author-desination h4author-destination">
                    <p>{avatar_info}</p>
                    <h4 className="mb-0">{avatar_name}</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutAreaHomeFour;