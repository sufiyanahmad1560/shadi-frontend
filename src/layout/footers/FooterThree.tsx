
import { Link } from "react-router-dom";
import footer_logo_three from "../../assets/img/logo/footer-logo-3.png";
import { CopyRight } from "../../compoments/common/SocialLinks";
import { APP_ROUTES, CONTACT } from "../../utils/constant";

interface DataType {
  sm_des: string;
  email: string;
  website: string;
  address: string;
  link_data: {
    title: string;
    links: {
      title: string;
      link: string;
    }[]
  }[];
  footer_blog_data: {
    id: number;
    img: string;
    title: string;
    time: string;
    url: string;
  }[];
}

const footer_content: DataType = {
  sm_des: CONTACT.HOSPITAL_DESC,
  email: CONTACT.EMAIL,
  website: CONTACT.WEBSITE,
  address: CONTACT.ADDRESS,

  link_data: [
    {
      title: "Treatments",
      links: [
        { title: "Skin Allergy", link: APP_ROUTES.DISEASE_SKIN_ALLERGY },
        { title: "Asthma", link: APP_ROUTES.DISEASE_ASTHMA },
        { title: "Diabetes", link: APP_ROUTES.DISEASE_DIABETES },
        { title: "Infertility", link: APP_ROUTES.DISEASE_INFERTILITY },
        { title: "Joint Pain", link: APP_ROUTES.DISEASE_JOINTPAIN },
        { title: "Hair Loss", link: APP_ROUTES.HAIR_LOSS },
        { title: "Our Doctors", link: APP_ROUTES.DR_ARVIND },
        { title: "Depression", link: APP_ROUTES.DISEASE_DEPRESSION },
        { title: "About Us", link: APP_ROUTES.ABOUT },
        { title: "Contact Us", link: APP_ROUTES.CONTACT },
        { title: "Book an Appointment", link: APP_ROUTES.APPOINTMENT },
      ]
    }
  ],
  footer_blog_data: [
    {
      id: 1,
      img: "blog_thumb_1",
      title: "Vitamin-B12 Deficiency. Get to know how to fulfill it.",
      time: "02 December 2023",
      url: "https://www.facebook.com/100078182652321/videos/5971228399639501"
    },
    {
      id: 2,
      img: "blog_thumb_2",
      title: "What is Triglycerides? and how does it increase? ",
      time: "14 November 2023",
      url: "https://www.facebook.com/Dr.ArvindSrivastavaOfficialPage/videos/1081253939892360"
    },
    {
      id: 3,
      img: "blog_thumb_3",
      title: "Benign Prostatic Hyperplasia (BPH), Increased male prostate treatment.",
      time: "03 July 2023",
      url: "https://www.facebook.com/Dr.ArvindSrivastavaOfficialPage/videos/631021322306006"
    }
  ]
}
const { sm_des, email, website, address, link_data, footer_blog_data } = footer_content


const FooterThree = () => {
  return (
    <>
      <footer>
        <div className="footer-top primary-bg footer-map pos-rel pt-120 pb-80">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-4 col-lg-6 col-md-6">
                <div className="footer-contact-info footer-contact-info-3 mb-40">
                  <div className="footer-logo mb-35">
                    <Link to="/"><img src={footer_logo_three} alt="theme-pure" /></Link>
                  </div>
                  <div className="footer-contact-content mb-25">
                    <p>{sm_des}</p>
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
              {link_data.map((link, link_i) =>
                <div key={link_i} className="col-xl-4 col-lg-6 col-md-6">
                  <div className="footer-widget mb-40">
                    <div className="footer-title">
                      <h3>{link.title}</h3>
                    </div>
                    <div className="footer-menu footer-menu-2">
                      <ul>
                        {link.links.map((link_item, index) =>
                          <li key={index}><Link to={link_item.link}>{link_item.title}</Link></li>
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
              )}
              <div className="col-xl-4 col-lg-6 col-md-6">
                <div className="footer-widget mb-40">
                  <div className="footer-title">
                    <h3>News Feeds</h3>
                  </div>
                  <div className="blog-feeds pr-15">
                    {footer_blog_data.map((blog_item, blog_i) =>
                      <div key={blog_i} className="signle-blog-feeds mb-20">
                        <div className="blog-feeds-thumb">
                          <Link to="/news-details">
                            <img src={blog_item.img} alt="theme-pure" width={80} height={70} />
                          </Link>
                        </div>
                        <div className="blog-feeds-text">
                          <h5><Link to="/news-details">{blog_item.title}</Link></h5>
                          <span className="feeds-date">{blog_item.time}</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom pt-25 pb-20">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="footer-copyright footer-copyright-3 text-center">
                  <p><CopyRight /></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterThree;