import { APP_ROUTES, SH_DOCTOR } from "../../../utils/constant";

interface MenuDataTypeFive {
  id: number;
  title: string;
  link: string;
  has_dropdown: boolean;
  menus: {
    heading: string;
    sub_menus: {
      link: string;
      title: string;
      imgUrl: string;
    }[];
  }[]
}

const MenuData: MenuDataTypeFive[] = [
  {
    id: 1,
    title: "Home +",
    link: APP_ROUTES.HOME,
    has_dropdown: false,
    menus: [
      {
        heading: "ALLERGIES",
        sub_menus: [
          { link: APP_ROUTES.DISEASE_SKIN_ALLERGY, title: "SKIN ALLERGY", imgUrl: "/icon/homeopathy.png" },
          { link: APP_ROUTES.DISEASE_FOOD_ALLERGY, title: "FOOD ALLERGY", imgUrl: "/icon/homeopathy.png" },
          { link: APP_ROUTES.DISEASE_RESPIRATORY_ALLERGY, title: "RESPIRATORY ALLERGY", imgUrl: "/icon/homeopathy.png" },
          { link: APP_ROUTES.DISEASE_DUST_ALLERGY, title: "DUST ALLERGY", imgUrl: "/icon/homeopathy.png" },
        ]
      },
      {
        heading: "CHILD HEALTH",
        sub_menus: [
          { link: APP_ROUTES.DISEASE_OBESITY, title: "OBESITY", imgUrl: "/icon/homeopathy.png" },
          { link: APP_ROUTES.DISEASE_AUTISM, title: "AUTISM", imgUrl: "/icon/homeopathy.png" },
          { link: APP_ROUTES.DISEASE_GROWTH, title: "GROWTH", imgUrl: "/icon/homeopathy.png" },
          { link: APP_ROUTES.DISEASE_TONSILITIS, title: "TONSILITIS", imgUrl: "/icon/homeopathy.png" },
          { link: APP_ROUTES.DISEASE_URTI, title: "URTI", imgUrl: "/icon/homeopathy.png" },
        ]
      },
      {
        heading: "RESPIRATORY",
        sub_menus: [
          { link: APP_ROUTES.DISEASE_ASTHMA, title: "ASTHMA", imgUrl: "/icon/homeopathy.png" },
          { link: APP_ROUTES.DISEASE_BRONCHITIS, title: "BRONCHITIS", imgUrl: "/icon/homeopathy.png" },
          { link: APP_ROUTES.DISEASE_LUNGHEALTH, title: "LUNG HEALTH", imgUrl: "/icon/homeopathy.png" },
          { link: APP_ROUTES.DISEASE_RHINITISALLERGIC, title: "ALLERGIC RHINITIS", imgUrl: "/icon/homeopathy.png" }
        ]
      },
      {
        heading: "MORE SPECIALITY",
        sub_menus: [
          { link: APP_ROUTES.DISEASE_DEPRESSION, title: "DEPRESSION", imgUrl: "/icon/homeopathy.png" },
          { link: APP_ROUTES.DISEASE_DIABETES, title: "DIABETES", imgUrl: "/icon/homeopathy.png" },
          { link: APP_ROUTES.DISEASE_PILES, title: "PILES", imgUrl: "/icon/homeopathy.png" },
          { link: APP_ROUTES.DISEASE_INFERTILITY, title: "INFERTILITY", imgUrl: "/icon/homeopathy.png" },
          { link: APP_ROUTES.DISEASE_JOINTPAIN, title: "JOINT PAIN", imgUrl: "/icon/homeopathy.png" },
          { link: APP_ROUTES.HAIR_LOSS, title: "HAIR LOSS", imgUrl: "/icon/homeopathy.png" },
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Near Me +",
    link: APP_ROUTES.NEARME,
    has_dropdown: false,
    menus: [

      {
        heading: SH_DOCTOR.DR_NAMRATA,
        sub_menus: [
          { link: APP_ROUTES.DR_NAMRATA, title: SH_DOCTOR.DR_NAMRATA, imgUrl: SH_DOCTOR.DR_NAMRATA_PROFILE_IMG, }
        ]
      }, {
        heading: SH_DOCTOR.DR_ARVIND,
        sub_menus: [
          { link: APP_ROUTES.DR_ARVIND, title: SH_DOCTOR.DR_ARVIND, imgUrl: SH_DOCTOR.DR_ARVIND_PROFILE_IMG },
        ]
      }, {
        heading: SH_DOCTOR.DR_DEEPMALA,
        sub_menus: [
          { link: APP_ROUTES.DR_DEEPMALA, title: SH_DOCTOR.DR_DEEPMALA, imgUrl: SH_DOCTOR.DR_DEEPMALA_PROFILE_IMG },
        ]
      },
    ]
    ,
  },
  {
    id: 6,
    title: "My Mayches +",
    link: APP_ROUTES.MYMATCH,
    has_dropdown: false,
    menus: [
      {
        heading: "HOMEOPATHY TREATMENT",
        sub_menus: [
          { link: APP_ROUTES.ABOUT_HOMEOPATHY, title: "ABOUT HOMEOPATHY", imgUrl: "/icon/homeopathy.png" },
          { link: APP_ROUTES.INNOVATION_TECHNOLOGY, title: "INNOVATION & TECHNOLOGY", imgUrl: "/icon/homeopathy.png" },
          { link: APP_ROUTES.PATIENT_PHILOSOPHY, title: "PATIENT FIRST PHILOSOPHY", imgUrl: "/icon/homeopathy.png" },
          { link: APP_ROUTES.ASSURED_TREATMENT, title: "ASSURED TREATMENT RESULTS", imgUrl: "/icon/homeopathy.png" },
        ]
      }, {
        heading: "HOMEOPATHY DOCTORS",
        sub_menus: [
          { link: APP_ROUTES.MEDICAL_TEAM, title: "MEDICAL TEAM", imgUrl: "/icon/homeopathy.png" },
          { link: APP_ROUTES.DOCTOR, title: "OUR DOCTORS", imgUrl: "/icon/homeopathy.png" },
          { link: APP_ROUTES.DOCTOR, title: "CONSULTING AT SHIVAM HOMEO", imgUrl: "/icon/homeopathy.png" },
        ]
      },
      {
        heading: "",
        sub_menus: [
        ]
      }
    ]
  },
  {
    id: 7,
    title: "Search +",
    link: APP_ROUTES.SEARCH,
    has_dropdown: false,
    menus: [
      {
        heading: "KNOW MORE",
        sub_menus: [

          { link: APP_ROUTES.ABOUT, title: "ABOUT US", imgUrl: "/icon/homeopathy.png" },
          { link: APP_ROUTES.CONTACT, title: "CONTACT US", imgUrl: "/icon/homeopathy.png" },
          { link: APP_ROUTES.APPOINTMENT, title: "APPOINTMENT", imgUrl: "/icon/homeopathy.png" },

        ]
      },
      {
        heading: "MISCELLANEOUS",
        sub_menus: [
          { link: APP_ROUTES.VIDEO, title: "VIDEO", imgUrl: "/icon/homeopathy.png" },
          { link: APP_ROUTES.GALLERY, title: "GALLERY", imgUrl: "/icon/homeopathy.png" },
          { link: APP_ROUTES.NEWS, title: "NEWS", imgUrl: "/icon/homeopathy.png" },
          { link: APP_ROUTES.FAQ, title: "FAQs", imgUrl: "/icon/homeopathy.png" },
        ]
      },
      {
        heading: "",
        sub_menus: [
        ]
      },
      {
        heading: "",
        sub_menus: [
        ]
      }
    ]
  }
];
export default MenuData;
