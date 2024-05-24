
import React from 'react';

import footer_icon_1 from "../../assets/img/icon/footer-co-icon-1.png";
import footer_icon_2 from "../../assets/img/icon/footer-co-icon-2.png";
import footer_icon_3 from "../../assets/img/icon/footer-co-icon-3.png";
import footer_logo from "../../assets/img/logo/logo-2.png";

import { Link } from 'react-router-dom';
import SocialLinks, { CopyRight } from '../../compoments/common/SocialLinks';
import { APP_ROUTES, CONTACT } from '../../utils/constant';

interface DataType {
  subscribe: string;
  subscribe_text: string;
  footer_contact: ({
    id: number;
    img: string;
    title: string;
    info: string | React.JSX.Element;
    link: boolean;
  })[];
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
  subscribe: "subscribe",
  subscribe_text: "Subscribe to Our Newsletter",
  footer_contact: [
    {
      id: 1,
      img: footer_icon_1,
      title: "Mon to Fri : 08:30 AM - 06:00 PM",
      info: CONTACT.PHONE_STYLE1,
      link: false,
    },
    {
      id: 2,
      img: footer_icon_2,
      title: "do you have a question?",
      info: CONTACT.EMAIL,
      link: false,
    },
    {
      id: 3,
      img: footer_icon_3,
      title: "socials network",
      info: <SocialLinks />,
      link: true,
    },

  ],
  link_data: [
    {
      title: "Departments",
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
      img: 'blog_thumb_1',
      title: "Vitamin-B12 Deficiency. Get to know how to fulfill it.",
      time: "02 December 2023",
      url: "https://www.facebook.com/100078182652321/videos/5971228399639501"
    },
    {
      id: 2,
      img: 'blog_thumb_2',
      title: "What is Triglycerides? and how does it increase? ",
      time: "14 November 2023",
      url: "https://www.facebook.com/Dr.ArvindSrivastavaOfficialPage/videos/1081253939892360"
    },
    {
      id: 3,
      img: 'blog_thumb_3',
      title: "Benign Prostatic Hyperplasia (BPH), Increased male prostate treatment.",
      time: "03 July 2023",
      url: "https://www.facebook.com/Dr.ArvindSrivastavaOfficialPage/videos/631021322306006"
    },
  ]
}
const { subscribe, subscribe_text, footer_contact, link_data, footer_blog_data } = footer_content

const FooterTwo = () => {
  return (
    <>
      <footer>
        <div className="footer-top theme-bg pt-100">
          <div className="container">
            <div className="footer-top-form mb-60">
              <div className="row align-items-center">
                <div className="col-xl-4 col-lg-4 col-md-4">
                  <div className="footer-logo-2">
                    <img src={footer_logo} alt="theme-pure" />
                  </div>
                </div>
                <div className="col-xl-2 col-lg-3 d-none d-lg-block d-xl-block">
                  <div className="footer-subscribe-title">
                    <span>{subscribe_text}</span>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-5 col-md-8">
                  <form className="footer-newsletter">
                    <input type="text" placeholder="Your Email Address...." />
                    <button className="primary_btn btn">{subscribe}</button>
                  </form>
                </div>
              </div>
            </div>
            <div className="footer-mid pb-60">
              <div className="row">
                <div className="col-xl-5 col-lg-6 col-md-6">
                  <div className="footer-widget mb-40">
                    <div className="footer-contact-info-2">
                      {footer_contact.map((item, i) =>
                        <div key={i} className="f-contact-info-box fix mb-30">
                          <div className="footer-co-icon f-left">
                            <img src={item.img} alt="theme-pure" />
                          </div>
                          <div className="footer-co-content">
                            <span>{item.title}</span>
                            {!item.link ?
                              <h4 style={{ wordWrap: "break-word" }}>{item.info}</h4>
                              :
                              <ul>
                                <li>
                                  {item.info} {""}
                                </li>
                              </ul>
                            }
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                {link_data.map((link, link_i) =>
                  <div key={link_i} className="col-xl-3 col-lg-6 col-md-6">
                    <div className="footer-widget mb-40">
                      <div className="footer-title">
                        <h3>{link.title}</h3>
                      </div>
                      <div className="footer-menu footer-menu-2 fix">
                        <ul>
                          {link.links.map((link_item, index) =>
                            <li key={index}><Link to={link_item.link}>{link_item.title}</Link></li>
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
                <div className="col-xl-4 col-md-6">
                  <div className="footer-widget mb-40">
                    <div className="footer-title">
                      <h3>News Feeds</h3>
                    </div>
                    <div className="blog-feeds pr-15">
                      {footer_blog_data.map((blog_item, blog_i) =>
                        <div key={blog_i} className="signle-blog-feeds mb-20">
                          <div className="blog-feeds-thumb">
                            <Link to={blog_item.url}>
                              <img src={blog_item.img} alt="theme-pure" width={80} height={70} />
                            </Link>
                          </div>
                          <div className="blog-feeds-text">
                            <h5><Link to={blog_item.url}>{blog_item.title}</Link></h5>
                            <span className="feeds-date">{blog_item.time}</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-bottom-0">
              <div className="row">
                <div className="col-xl-12">
                  <div className="footer-copyright-area text-center">
                    <p className="white-color"> <CopyRight /> </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterTwo;