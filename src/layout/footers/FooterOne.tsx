
import { Link } from "react-router-dom";
import footer_logo from "../../assets/img/logo/footer-logo.png";
import { CopyRight } from "../../compoments/common/SocialLinks";
import { APP_ROUTES, CONTACT } from "../../utils/constant";

// footer data type
interface FooterContentDatatype {
  number_text: string;
  number: string;
  sm_info: string;
  email: string;
  website: string;
  address: string;
  footer_links: {
    id: number;
    cls: string;
    title: string;
    links: {
      link: string;
      title: string;
    }[];
  }[];
}
// footer content 
const footer_content: FooterContentDatatype = {
  number_text: "Emergency number",
  number: CONTACT.PHONE_STYLE2,
  sm_info: CONTACT.HOSPITAL_DESC,
  email: CONTACT.EMAIL,
  website: CONTACT.WEBSITE,
  address: CONTACT.ADDRESS,
  footer_links: [
    {
      id: 1,
      cls: "col-md-4",
      title: "Treatments",
      links: [
        { link: APP_ROUTES.DISEASE_SKIN_ALLERGY, title: "Skin Allergy" },
        { link: APP_ROUTES.DISEASE_ASTHMA, title: "Asthma" },
        { link: APP_ROUTES.DISEASE_DIABETES, title: "Diabetes" },
        { link: APP_ROUTES.DISEASE_INFERTILITY, title: "Infertility" },
        { link: APP_ROUTES.HAIR_LOSS, title: "Hair Loss" },
        { link: APP_ROUTES.ABOUT_HOMEOPATHY, title: "Homeopathy" },
      ]
    },
    {
      id: 2,
      cls: "d-md-none d-lg-block",
      title: "Quick Links",
      links: [
        { link: APP_ROUTES.GALLERY, title: "Gallery" },
        { link: APP_ROUTES.DR_ARVIND, title: "Our Doctors" },
        { link: "#", title: "News" },
        { link: APP_ROUTES.ABOUT, title: "About Us" },
        { link: APP_ROUTES.CONTACT, title: "Contact Us" },
        { link: APP_ROUTES.APPOINTMENT, title: "Book an Appointment" },
      ]
    },
  ]
}
const { number_text, number, sm_info, email, website, address, footer_links } = footer_content

const FooterOne = () => {
  return (
    <>
      <footer>
        <div className="footer-top primary-bg pt-115 pb-90">
          <div className="container">
            <div className="row">
              <div className="col-xl-5 col-lg-6 col-md-8">
                <div className="footer-contact-info mb-30">
                  <div className="emmergency-call fix">
                    <div className="emmergency-call-icon f-left">
                      <i className="fas fa-phone"></i>
                    </div>
                    <div className="emmergency-call-text f-left">
                      <h6>{number_text}</h6>
                      <span>{number}</span>
                    </div>
                  </div>
                  <div className="footer-logo mb-35">
                    <Link to="#"><img src={footer_logo} alt="theme-pure" /></Link>
                  </div>
                  <div className="footer-contact-content mb-25">
                    <p>{sm_info}</p>
                  </div>
                  <div className="footer-emailing">
                    <ul>
                      <li><i className="far fa-envelope"></i>{email}</li>
                      <li><i className="far fa-clone"></i>{website}</li>
                      <li><i className="far fa-flag"></i>{address}</li>
                    </ul>
                  </div>
                </div>
              </div>
              {footer_links.map((item, i) =>
                <div key={i} className={`col-xl-2 offset-xl-1 col-lg-3 ${item.cls}`}>
                  <div className="footer-widget mb-30">
                    <div className="footer-title">
                      <h3>{item.title}</h3>
                    </div>
                    <div className="footer-menu">
                      <ul>
                        {item.links.map((link, index) =>
                          <li key={index}><Link to={link.link}>{link.title}</Link></li>
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="footer-bottom pt-25 pb-20">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="footer-copyright text-center">
                  <p className="white-color"><CopyRight /></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterOne;