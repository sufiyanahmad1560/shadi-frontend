
import blog_thumb_1 from "../assets/img/blog/news-thumb-1.jpg";
import blog_thumb_2 from "../assets/img/blog/news-thumb-2.jpg";
import blog_thumb_3 from "../assets/img/blog/news-thumb-3.jpg";

import blog_thumb_4_1 from "../assets/img/blog/news-thumb-4.jpg";
import blog_thumb_4_2 from "../assets/img/blog/news-thumb-5.jpg";
import blog_thumb_4_3 from "../assets/img/blog/news-thumb-6.jpg";

interface BlogDataType {
  id: number;
  img: string;
  tag_1?: string;
  tag_2?: string;
  title: string;
  sm_des: string;
  home_3_serive_2?: boolean;
}


const blog_data: BlogDataType[] = [
  {
    id: 1,
    img: blog_thumb_1,
    tag_1: "Medical",
    tag_2: "Medicine",
    title: "Ectetur ipsum dolor sit met, cons lorem.",
    sm_des: "Adipisicing lorem ipsum dolor sit amet, consectet elit, sed do eiusmod tem incididunt ut labore et dolore.",
  },
  {
    id: 2,
    img: blog_thumb_2,
    tag_1: "Medical",
    tag_2: "Medicine",
    title: "Ectetur ipsum dolor sit met, cons lorem.",
    sm_des: "Adipisicing lorem ipsum dolor sit amet, consectet elit, sed do eiusmod tem incididunt ut labore et dolore.",
  },
  {
    id: 3,
    img: blog_thumb_3,
    tag_1: "Medical",
    tag_2: "Medicine",
    title: "Ectetur ipsum dolor sit met, cons lorem.",
    sm_des: "Adipisicing lorem ipsum dolor sit amet, consectet elit, sed do eiusmod tem incididunt ut labore et dolore.",
  },
  // home 03
  {
    id: 1,
    img: blog_thumb_1,
    home_3_serive_2: true,
    title: "Infertility Treatment",
    sm_des: "Provide cheap and best Homeopathic treatment through natural way without side-effect.",
  },
  {
    id: 2,
    img: blog_thumb_2,
    home_3_serive_2: true,
    title: "Skin Disease Treatment",
    sm_des: "Homeopathy is a holistic approach to skin treatment that aims to address the root causes of skin conditions rather than just alleviating symptoms.",
  },
  {
    id: 3,
    img: blog_thumb_3,
    home_3_serive_2: true,
    title: "Diabetes",
    sm_des: "Diabetes is becoming a leading health concern across the globe. We provide best way in diabetes management.",
  },
  // home 03 bottom
  {
    id: 1,
    img: blog_thumb_4_1,
    home_3_serive_2: true,
    tag_1: "Medical",
    tag_2: "Medicine",
    title: "Ectetur ipsum dolor sit met, cons lorem.",
    sm_des: "Adipisicing lorem ipsum dolor sit amet, consectet elit, sed do eiusmod tem incididunt ut labore et dolore.",
  },
  {
    id: 2,
    img: blog_thumb_4_2,
    home_3_serive_2: true,
    tag_1: "Medical",
    tag_2: "Medicine",
    title: "Ectetur ipsum dolor sit met, cons lorem.",
    sm_des: "Adipisicing lorem ipsum dolor sit amet, consectet elit, sed do eiusmod tem incididunt ut labore et dolore.",
  },
  {
    id: 3,
    img: blog_thumb_4_3,
    home_3_serive_2: true,
    tag_1: "Medical",
    tag_2: "Medicine",
    title: "Ectetur ipsum dolor sit met, cons lorem.",
    sm_des: "Adipisicing lorem ipsum dolor sit amet, consectet elit, sed do eiusmod tem incididunt ut labore et dolore.",
  },
]
export default blog_data