import { Link } from "react-router-dom";
import { SOCIAL_LINK } from "../../utils/constant";

// Final
interface SocialLinksDataType {
  link: string;
  icon: string;
}

// Final
const social_links: SocialLinksDataType[] = [
  {
    link: SOCIAL_LINK.FACEBOOK_ARVIND,
    icon: "fab fa-facebook-f",
  },
  {
    link: SOCIAL_LINK.INSTAGRAM_ARVIND,
    icon: "fab fa-instagram",
  },
  {
    link: SOCIAL_LINK.YOUTUBE_ARVIND,
    icon: "fab fa-youtube",
  },
  {
    link: SOCIAL_LINK.TWITTER_ARVIND,
    icon: "fab fa-twitter",
  },
  {
    link: "http://www.pinterest.com",
    icon: "fab fa-pinterest",
  },
];

// Final
const SocialLinks = () => {
  return (
    <>
      {social_links.map((l, i) => (
        <Link
          key={i}
          to={l.link}
          target="_blank">
          <i className={l.icon} ></i> {' '}
        </Link>
      ))}
    </>
  );
};

export default SocialLinks;




interface SocialLinksTwoDataType {
  link: string;
  color: string;
  icon: string;
}


const social_links_2: SocialLinksTwoDataType[] = [
  {
    link: "http://facebook.com",
    color: "footer-facebook",
    icon: "fa-brands fa-facebook-f",
  },
  {
    link: "http://twitter.com",
    color: "",
    icon: "fa-brands fa-twitter",
  },
  {
    link: "https://www.linkedin.com",
    color: "footer-linkedin",
    icon: "fa-brands fa-linkedin-in",
  },
  {
    link: "https://www.instagram.com",
    color: "footer-insta",
    icon: "fa-brands fa-instagram",
  },
];

export const SocialLinksTwo = () => {
  return (
    <>
      {social_links_2.map((link, index) => (
        <Link
          key={index}
          to={link.link}
          className={link.color}
          target="_blank">
          <i className={link.icon}></i>{" "}
        </Link>
      ))}
    </>
  );
};




// team social links
interface TeamSocialLinksDataType {
  id: number;
  link: string;
  icon: string;
}
const team_social_data: TeamSocialLinksDataType[] = [
  {
    id: 1,
    link: "http://facebook.com",
    icon: "fab fa-facebook-f",
  },
  {
    id: 2,
    link: "http://twitter.com",
    icon: "fab fa-twitter",
  },
  {
    id: 3,
    link: "http://behance.com",
    icon: "fab fa-behance",
  },
  {
    id: 4,
    link: "http://pinterest.com",
    icon: "fab fa-pinterest",
  },
  {
    id: 5,
    link: "http://linkedin.com",
    icon: "fab fa-linkedin",
  },
]

export const TeamSocialLinks = () => {
  return (
    <>
      {team_social_data.map((t_item, t_index) => (
        <li key={t_index}>
          <Link
            to={t_item.link}
            target="_blank">
            <i className={t_item.icon}></i>{" "}
          </Link>
        </li>
      ))}
    </>
  )
}


// copy right text 
type CopyRightDataType = {
  copy_right: JSX.Element;
}

// const copy_right_text: CopyRightDataType = {
//   copy_right: <> ©{new Date().getFullYear()} Copyrights by Shivam Health Care. All Rights Reserved. Designed by
//     <Link target="_blank" href="https://beatsoftware.in" style={{ color: "#fff" }}> Beat Technologies. </Link>
//   </>,
// }

const copy_right_text: CopyRightDataType = {
  copy_right: <> ©{new Date().getFullYear()} Copyrights by Shivam Health Care. All Rights Reserved.
  </>,
}

const { copy_right } = copy_right_text
export const CopyRight = () => {
  return (
    <> {copy_right}</>
  )
}


