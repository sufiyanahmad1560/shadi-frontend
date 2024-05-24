

import gallery_thumb_1 from "../assets/img/gallery/gal1.jpg";
import gallery_thumb_2 from "../assets/img/gallery/gal2.jpg";
import gallery_thumb_3 from "../assets/img/gallery/gal3.jpg";
import gallery_thumb_4 from "../assets/img/gallery/gal4.jpg";
import gallery_thumb_5 from "../assets/img/gallery/gal5.jpg";
import gallery_thumb_6 from "../assets/img/gallery/gal6.jpg";


interface DataType {
  id: number;
  img: string;
  category?: string;
  title: string;
  tag_1: string;
  tag_2: string;
}


const photo_gallery_data: DataType[] = [
  {
    id: 1,
    img: gallery_thumb_1,
    category: "Dental",
    title: "Dental Services",
    tag_1: "medical",
    tag_2: "Dental",
  },
  {
    id: 2,
    img: gallery_thumb_2,
    category: "Neurology",
    title: "Dental Services",
    tag_1: "medical",
    tag_2: "Dental",
  },
  {
    id: 3,
    img: gallery_thumb_3,
    category: "Dental",
    title: "Dental Services",
    tag_1: "medical",
    tag_2: "Dental",
  },
  {
    id: 4,
    img: gallery_thumb_4,
    category: "Surgery",
    title: "Dental Services",
    tag_1: "medical",
    tag_2: "Dental",
  },
  {
    id: 5,
    img: gallery_thumb_5,
    category: "Dental",
    title: "Dental Services",
    tag_1: "medical",
    tag_2: "Medicin",
  },
  {
    id: 6,
    img: gallery_thumb_6,
    category: "Medicin",
    title: "Dental Services",
    tag_1: "medical",
    tag_2: "Dental",
  },
  // update
  {
    id: 1,
    img: gallery_thumb_1,
    category: "Medicin",
    title: "Dental Services",
    tag_1: "medical",
    tag_2: "Dental",
  },
  {
    id: 2,
    img: gallery_thumb_2,
    category: "Surgery",
    title: "Dental Services",
    tag_1: "medical",
    tag_2: "Dental",
  },
  {
    id: 3,
    img: gallery_thumb_3,
    category: "Medicin",
    title: "Dental Services",
    tag_1: "medical",
    tag_2: "Dental",
  },
  {
    id: 4,
    img: gallery_thumb_4,
    category: "Dental",
    title: "Dental Services",
    tag_1: "medical",
    tag_2: "Dental",
  },
  {
    id: 5,
    img: gallery_thumb_5,
    category: "Surgery",
    title: "Dental Services",
    tag_1: "medical",
    tag_2: "Medicin",
  },
  {
    id: 6,
    img: gallery_thumb_6,
    category: "Neurology",
    title: "Dental Services",
    tag_1: "medical",
    tag_2: "Dental",
  },
]
export default photo_gallery_data