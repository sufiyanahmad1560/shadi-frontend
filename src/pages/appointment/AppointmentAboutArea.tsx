
import { useState } from 'react';
import VideoPopup from '../../modals/VideoPopup';

import about_avatar from "../../assets/img/about/about-img-3.jpg";
import about_shape from "../../assets/img/about/about-shape.png";
import destination_1 from "../../assets/img/about/destination-icon-1.png";
import destination_2 from "../../assets/img/about/destination-icon-2.png";
import medical_brand from "../../assets/img/about/medical-brand-icon-border.png";



const appointment_content = {
  sub_title: "About Us",
  title: "Short Story About Shivam Health Care.",
  sm_des: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute  irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
  features: [
    {
      id: 1,
      img: destination_1,
      title: "Our Mission",
      sm_des: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.",
    },
    {
      id: 2,
      img: destination_2,
      title: "Our Vission",
      sm_des: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.",
    },
  ]
}
const { sub_title, title, sm_des, features } = appointment_content

const AppointmentAboutArea = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  return (
    <>
      <section className="about-area pt-120 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-5">
              <div className="about-left-side pos-rel mb-30">
                <div className="medical-icon-brand-2 medical-icon-brand-3">
                  <img src={medical_brand} alt="theme-pure" />
                </div>
                <div className="about-front-img pos-rel">
                  <img src={about_avatar} alt="theme-pure" />
                  <a className="popup-video about-video-btn white-video-btn"
                    onClick={() => setIsVideoOpen(true)}
                    style={{ cursor: "pointer" }}
                  ><i className="fas fa-play"></i></a>
                </div>
                <div className="about-shape">
                  <img src={about_shape} alt="theme-pure" />
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-7">
              <div className="about-right-side pt-55 mb-30">
                <div className="about-title mb-20">
                  <h5>{sub_title}</h5>
                  <h1>{title}</h1>
                </div>
                <div className="about-text mb-50">
                  <p>{sm_des}</p>
                </div>
                <div className="our-destination">
                  {features.map((item, i) =>
                    <div key={i} className={`single-item ${i === 0 ? "mb-30" : ""}`}>
                      <div className="mv-icon f-left">
                        <img src={item.img} alt={item.title} />
                      </div>
                      <div className="mv-title fix">
                        <h3>{item.title}</h3>
                        <p>{item.sm_des}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* video modal start */}
      <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={'UBdUpt6oTOE'}
      />
      {/* video modal end */}
    </>
  );
};

export default AppointmentAboutArea;