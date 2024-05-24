import React from 'react';

import back_icon_sky from "../../assets/img/section/section-back-icon-sky.png";
import title_line from "../../assets/img/shape/section-title-line.png";

import { Link } from 'react-router-dom';
import { DoctorDetailContent } from '../../types/doctor';
import { CONTACT } from '../../utils/constant';
import { TeamSocialLinks } from '../common/SocialLinks';
import ServiceContactForm from '../forms/ServiceContactForm';

interface Props {
  doctorDetailContent: DoctorDetailContent

}

const DoctorDetailsArea: React.FC<Props> = ({ doctorDetailContent }) => {
  // const selectHandler = (e: any) => { };
  return (
    <>
      <div className="doctor-details-area pt-115 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-xl-7 col-lg-8">
              <article className="doctor-details-box">
                <div className="section-title pos-rel mb-25">
                  <div className="section-icon">
                    <img className="section-back-icon back-icon-left" src={back_icon_sky} alt="theme-pure" />
                  </div>
                  <div className="section-text pos-rel">
                    <h5 className="green-color text-up-case">{doctorDetailContent.sub_title}</h5>
                    <h1>{doctorDetailContent.title}</h1>
                  </div>
                  <div className="section-line pos-rel">
                    <img src={title_line} alt="theme-pure" />
                  </div>
                </div>
                <div className="service-details-text mb-40">
                  <p>{doctorDetailContent.des_1}</p>
                  <p>{doctorDetailContent.des_1_2}</p>
                  <p>{doctorDetailContent.des_1_3}</p>
                  <p>{doctorDetailContent.des_1_4}</p>
                  <p>{doctorDetailContent.des_1_5}</p>
                  <p>{doctorDetailContent.des_1_6}</p>
                </div>
                <div className="section-title pos-rel mb-25">
                  <div className="section-text pos-rel">
                    <h2>{doctorDetailContent.skills_text}</h2>
                  </div>
                  <div className="section-line pos-rel">
                    <img src={title_line} alt="theme-pure" />
                  </div>
                </div>
                <div className="service-details-text mb-35">
                  <p>{doctorDetailContent.des_2}</p>
                </div>
                <div className="service-details-feature fix mb-30">
                  {doctorDetailContent.features.map((item, i) =>
                    <div key={i} className={`ser-fea-box f-left`}>
                      <div className="ser-fea-icon f-left">
                        <img src={item.img} alt="theme-pure" />
                      </div>
                      <div className="ser-fea-list fix">
                        <h3>{item.title}</h3>
                        <ul>
                          {item.lists?.map((list, index) =>
                            <li key={index}><i className="fas fa-check"></i>{list}</li>
                          )}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
                <div className="section-title pos-rel mb-25">
                  <div className="section-text pos-rel">
                    <h2>{doctorDetailContent.care_text}</h2>
                  </div>
                  <div className="section-line pos-rel">
                    <img src={title_line} alt="theme-pure" />
                  </div>
                </div>
                <div className="service-details-text mb-30">
                  <p>{doctorDetailContent.des_3}</p>
                </div>
                <div id="contact-map" className="service-map mb-55">
                  <div style={{ width: '100%' }}>
                    <iframe
                      title="Contact"
                      src={CONTACT.GOOGLE_MAP}
                      style={{ width: '100%' }}
                      height={400}
                      allowFullScreen={true}
                      loading="lazy"
                    ></iframe>

                  </div>
                </div>
              </article>
            </div>
            <div className="col-xl-5 col-lg-4">
              <div className="service-widget mb-50">
                <div className="team-wrapper team-box-2 team-box-3 text-center mb-30">
                  <div className="team-thumb">
                    <img src={doctorDetailContent.profileImg} height={420} width={370} alt="Doctor Profile" />
                  </div>
                  <div className="team-member-info mt-35 mb-35">
                    <h3><Link to="/doctor-details">{doctorDetailContent.name}</Link></h3>
                    <h6 className="f-500 text-up-case letter-spacing pink-color">{doctorDetailContent.job_title}</h6>
                  </div>
                  <div className="team-social-profile">
                    <ul>
                      <TeamSocialLinks />
                    </ul>
                  </div>
                </div>
              </div>
              <div className="service-widget mb-50">
                <div className="widget-title-box mb-30">
                  <h3 className="widget-title">{doctorDetailContent.qualifications}</h3>
                </div>
                <div className="more-service-list">
                  <ul>
                    {doctorDetailContent.qualifications_data.map((quali_item, quali_index) =>
                      <li key={quali_index}>
                        <Link to="#">
                          <div className="more-service-icon">
                            <img src={quali_item.img} alt="theme-pure" /></div>
                          <div className="more-service-title doctor-details-title">
                            {quali_item.education} <span>{quali_item.versity_name}</span>
                          </div>
                        </Link>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
              <div className="service-widget mb-80">
                <div className="widget-title-box mb-30">
                  <h3 className="widget-title">{doctorDetailContent.advice}</h3>
                </div>
                <ServiceContactForm />
              </div>
              <div className="service-widget mb-50">
                <div className="widget-title-box mb-30">
                  <h3 className="widget-title">Speciality</h3>
                </div>
                <div className="doctor-detials-special">
                  <ul>
                    {doctorDetailContent.speciality.map((special_item, special_index) =>
                      <li key={special_index}><Link to="#">{special_item}</Link></li>
                    )}
                  </ul>
                </div>
              </div>
              <div className="service-widget mb-50">
                <div className="widget-title-box mb-30">
                  <h3 className="widget-title">Languages</h3>
                </div>
                <div className="doctor-detials-lan">
                  <ul>
                    {doctorDetailContent.language.map((lang_item, lang_index) =>
                      <li key={lang_index}><Link to="#">{lang_item}</Link></li>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DoctorDetailsArea;