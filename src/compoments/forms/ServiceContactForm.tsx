import { Link } from "react-router-dom";
import NiceSelect from "../../ui/NiceSelect";
import { APP_ROUTES, DR_SERVICE } from "../../utils/constant";


const ServiceContactForm = () => {
  const selectHandler = (e: any) => { };
  return (
    <>
      <form className="service-contact-form" onSubmit={e => e.preventDefault()}>
        <div className="row">
          <div className="col-xl-12">
            <div className="contact-input contact-icon contact-user mb-20">
              <input type="text" placeholder="Enter your name" />
            </div>
          </div>
          <div className="col-xl-12">
            <div className="contact-input contact-icon contact-mail mb-20">
              <input type="text" placeholder="Enter your email" />
            </div>
          </div>
          <div className="col-xl-12">
            <div className="contact-input contact-icon contact-hourglass">
              <NiceSelect
                className="service-option"
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
                  { value: "13", text: DR_SERVICE.UTI },
                ]}
                defaultCurrent={-1}
                onChange={selectHandler}
                name=''
                placeholder='Type of Care'
              />
            </div>
          </div>
        </div>
        <div className="ser-form-btn text-center mt-40">
          <Link data-animation="fadeInLeft" data-delay=".6s" to={APP_ROUTES.APPOINTMENT} className="btn btn-icon ml-0"
            style={{ animationDelay: "0.6s" }}
            tab-index="0"><span>+</span>Request for call</Link>
        </div>
      </form>
    </>
  );
};

export default ServiceContactForm;