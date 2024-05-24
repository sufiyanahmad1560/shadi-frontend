import appointment_img from "../../../assets/img/appointment/appointment-right-img.jpg";
import appoint_ment_icon_3 from "../../../assets/img/icon/caregive-option-icon-2.png";
import appoint_ment_icon_1 from "../../../assets/img/icon/caregive-option-icon-3.png";
import appoint_ment_icon_2 from "../../../assets/img/icon/caregive-option-icon-4.png";
import appoint_ment_icon_4 from "../../../assets/img/icon/caregive-option-icon-5.png";
import NiceSelect from '../../../ui/NiceSelect';
import { DR_SERVICE } from "../../../utils/constant";


const AppointmentAreaHomeTwo = () => {
  const selectHandler = (e: any) => { };
  return (
    <>
      <section className="appointment-area gray-bg pb-15">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="appointment-box-2">
                <div className="row no-gutters">
                  <div className="col-xl-8 col-lg-12">
                    <div className="appointment-box-content">
                      <div className="about-title mb-40">
                        <h5 className="pink-color">For Consultation</h5>
                        <h1>Get An Appointment.</h1>
                      </div>
                      <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6">
                          <div className="appointment-form-box d-flex mb-40">
                            <div className="appoint-ment-icon">
                              <img src={appoint_ment_icon_1} alt="theme-pure" />
                            </div>
                            <form className="appointment-form-2" action="#">
                              <label htmlFor="input">your name</label>
                              <input type="text" placeholder="Enter Your Name" />
                            </form>
                          </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6">
                          <div className="appointment-form-box d-flex mb-40">
                            <div className="appoint-ment-icon">
                              <img src={appoint_ment_icon_2} alt="theme-pure" />
                            </div>
                            <form className="appointment-form-2" action="#">
                              <label htmlFor="input">your email</label>
                              <input type="text" placeholder="Enter Email Address" />
                            </form>
                          </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6">
                          <div className="appointment-form-box appointment-form-box-option d-flex mb-40">
                            <div className="appoint-ment-icon">
                              <img src={appoint_ment_icon_3} alt="theme-pure" />
                            </div>
                            <form className="appointment-form-2" onSubmit={e => e.preventDefault()}>
                              <label htmlFor="input">select your services</label>
                              <NiceSelect
                                className="postform"
                                options={[
                                  { value: "1", text: DR_SERVICE.HAIR_LOSS },
                                  { value: "2", text: DR_SERVICE.MALE_INFERTILITY },
                                  { value: "3", text: DR_SERVICE.FEMALE_INFERTILITY },
                                  { value: "4", text: DR_SERVICE.KIDNEY_INFECTIONS },
                                  { value: "5", text: DR_SERVICE.SEXUAL_PROBLEMS },
                                  { value: "6", text: DR_SERVICE.THYROID },
                                  { value: "7", text: DR_SERVICE.ASTHMA },
                                  { value: "8", text: DR_SERVICE.GASTIRITIS },
                                  { value: "9", text: DR_SERVICE.INSOMNIA },
                                  { value: "10", text: DR_SERVICE.ALCOHOLISM },
                                  { value: "11", text: DR_SERVICE.ANEMIA },
                                  { value: "12", text: DR_SERVICE.CHIKUNGUNYA },
                                ]}
                                defaultCurrent={-1}
                                onChange={selectHandler}
                                name='service'
                                placeholder='select your services'
                              />
                            </form>
                          </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6">
                          <div className="appointment-form-box d-flex mb-40">
                            <div className="appoint-ment-icon">
                              <img src={appoint_ment_icon_4} alt="theme-pure" />
                            </div>
                            <form className="appointment-form-2" action="#">
                              <label htmlFor="input">your phone</label>
                              <input type="text" placeholder="Enter Your Phone" />
                            </form>
                          </div>
                        </div>
                        <div className="col-xl-6 col-lg-12">
                          <div className="appoint-button">
                            <button className="btn green-bg-btn">Make Appointment</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4">
                    <div className="appointment-right f-right">
                      <img src={appointment_img} alt="theme-pure" />
                    </div>
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

export default AppointmentAreaHomeTwo;