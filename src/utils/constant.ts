
export enum PAGE_TITLE {
    HOME = 'Shivam Health Care | Home',
    ABOUT = "Shivam Health Care | About",
    DOCTOR = "Shivam Health Care | Doctor",
    MEDICAL_TEAM = "Shivam Health Care | Team",
    ABOUT_HOMEOPATHIC = "Shivam Health Care | About Homeopathic",
    HAIR_LOSS = "Shivam Health Care | Hair Loss",
    APPOINTMENT = "Shivam Health Care | Appointment",
    APPOINTMENT_LIST = "Shivam Health Care | Appointment List",
    DR_ARVIND = "Shivam Health Care | Dr. Arvind",
    DR_NAMRATA = "Shivam Health Care | Dr. Namrata",
    DR_DEEPMALA = "Shivam Health Care | Dr. Deepmala",
    ERROR = "Shivam Health Care | Page not found",
    LOGIN = "Shivam Health Care | Login",
    REGISTER = "Shivam Health Care | Register",
    RESET_PWD = "Shivam Health Care | Reset Password",
}

export enum APP_ROUTES {
    HOME = "/",
    DASHBOARD = "/dashboard",
    LOGIN = "/login",
    REGISTER = "/register",
    NEARME = "/nearme",
    MYMATCH = "/mymatch",
    SEARCH = "/search",
    DOCTOR = "/doctor",
    MEDICAL_TEAM = "/team",
    RESET_PASSWORD = "/reset-password/:token",
    APPOINTMENT = "/appointment",
    APPOINTMENT_LIST = "/appointment-list",
    SUPPORT = "/support",
    ABOUT = "/about",
    CONTACT = "/contact",
    VIDEO = "/video",
    GALLERY = "/gallery",
    NEWS = "/news",
    FAQ = "/faq",
    DR_ARVIND = "/arvindsrivastav",
    DR_NAMRATA = "/namratasrivastav",
    DR_DEEPMALA = "/deepmalasrivastav",
    TREATMENT = "/treatment",
    INFERTILITY = "/infertility",
    // Disease
    DISEASE_ASTHMA = "/asthma",
    DISEASE_DIABETES = "/diabetes",
    DISEASE_INFERTILITY = "/infertility",
    DISEASE_JOINTPAIN = "/jointpain",
    DISEASE_PILES = "/piles",
    DISEASE_SKIN_ALLERGY = "/skin-allergy",
    DISEASE_FOOD_ALLERGY = "/food-allergy",
    DISEASE_RESPIRATORY_ALLERGY = "/respiratory-allergy",
    DISEASE_DUST_ALLERGY = "/dust-allergy",
    DISEASE_OBESITY = "/obesity",
    DISEASE_AUTISM = "/autism",
    DISEASE_GROWTH = "/growth",
    DISEASE_TONSILITIS = "/tonsilitis",
    DISEASE_URTI = "/urti",
    DISEASE_BRONCHITIS = "/bronchitis",
    DISEASE_LUNGHEALTH = "/lunghealth",
    DISEASE_RHINITISALLERGIC = "/rhinitisallergic",
    DISEASE_DEPRESSION = "/depression",
    //Header Homeopathy section routes
    ABOUT_HOMEOPATHY = "/about-homeopathy",
    INNOVATION_TECHNOLOGY = "/innovation-technology",
    PATIENT_PHILOSOPHY = "/patient-philosophy",
    ASSURED_TREATMENT = "/assured-treatment",
    HAIR_LOSS = "/hair-loss",

}

export enum CONTACT {
    EMAIL = "contact@shivamhomeocare.com",
    WEBSITE = "https://shivamhomeocare.com",
    PHONE_STYLE1 = "+91 885 803 2566",
    PHONE_STYLE2 = "885-803-2566",
    PHONE_HOSPITAL_1 = "+91 9415 6594 25",
    PHONE_HOSPITAL_2 = "+91 9616 6239 43",
    PHONE_HOSPITAL_3 = "9415 6594 25",
    PHONE_HOSPITAL_4 = "9616 6239 43",
    ADDRESS = "Shivam Health Care  Hospital & Research Centre, Ghazipur Tiraha (Near Sadar Hospital), Mau, Uttar Pradesh - 275304, India.",
    HOSPITAL_NUMBER = "+91 885 803 2566 / 94156 59425 / 961 662 3943",
    GOOGLE_MAP = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114846.28606287882!2d83.37254598413705!3d25.904131187070117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39918b1c42c9083f%3A0x6d9b0ba07b037218!2sShivam%20Homoeopathic%20Hospital!5e0!3m2!1sen!2ssa!4v1702446017019!5m2!1sen!2ssa",
    HOSPITAL_DESC = "We are a brand-new reproductive center. We offer our clients the latest fertility technology and comfort. Our goal is to make our clients happy parents.",
}

export enum SOCIAL_LINK {
    FACEBOOK_ARVIND = "https://www.facebook.com/Dr.ArvindSrivastavaOfficialPage",
    TWITTER_ARVIND = "https://twitter.com/DrArvindHomeo?t=43Uje-wd14mZYEz05YIB7w&s=09",
    YOUTUBE_ARVIND = "https://youtube.com/@DrArvindSrivastava/",
    INSTAGRAM_ARVIND = "https://www.instagram.com/dr.arvindsrivastava/",
}

export enum SH_DOCTOR {
    DR_ARVIND = "Arvind Srivastava",
    DR_ARVIND_QUALIFICATION = "BHMS(Agra), M.D(Hons), JRF",
    DR_ARVIND_COVER_IMG = "/doctor/arvind.jpg",
    DR_ARVIND_PROFILE_IMG = "/doctor/arvind2.jpg",
    DR_ARVIND_CODE = "ARVIND",
    DR_NAMRATA = "Namrata Srivastava",
    DR_NAMRATA_QUALIFICATION = "BHMS(Agra), DRCH(Fatima Hospital)",
    DR_NAMRATA_COVER_IMG = "/doctor/namrata.jpg",
    DR_NAMRATA_PROFILE_IMG = "/doctor/namrata2.jpg",
    DR_NAMRATA_CODE = "NAMRATA",
    DR_DEEPMALA = "Deepmala Srivastava",
    DR_DEEPMALA_QUALIFICATION = "BHMS",
    DR_DEEPMALA_COVER_IMG = "/doctor/drdeepmala.jpeg",
    DR_DEEPMALA_PROFILE_IMG = "/doctor/drdeepmala.jpeg",
    DR_DEEPMALA_CODE = "DEEPMALA",
}

export enum DR_SERVICE {
    HAIR_LOSS = "Hair Loss",
    MALE_INFERTILITY = "Male Infertility",
    FEMALE_INFERTILITY = "Female Infertility",
    KIDNEY_INFECTIONS = "Kidney Infections",
    SEXUAL_PROBLEMS = "Sexual Problems",
    THYROID = "Thyroid",
    ASTHMA = "Asthma",
    GASTIRITIS = "Gastritis",
    INSOMNIA = "Insomnia",
    ALCOHOLISM = "Alcoholism",
    ANEMIA = "Anemia",
    CHIKUNGUNYA = "Chikungunya",
    UTI = "Urinary Tract Infection",

}

export enum USER_ROLE {
    DOCTOR = 'DOCTOR',
    PATIENT = 'PATIENT'
}

export enum HOSPITAL {
    NAME = "Shivam Health Care Hospital and Research Center"
}

export enum DR_QUALIFICATION {
    ARVIND_1 = "B.H.M.S (Agra), M.D. (HOM.)",
    ARVIND_4 = "Ex. Lecture - GHMC - Ghazipur, U.P.",
    ARVIND_6 = "Ayush Department Government of U.P.",
    NAMRATA_1 = "B.H.M.S (Agra), D.R.C.H.",
    NAMRATA_2 = "Fatima Hospital Mau U.P.",
    NAMRATA_3 = "Senior Medical Officer",
    NAMRATA_4 = "Ayush Department Government of U.P.",
    DEEPMALA_1 = "B.H.M.S",

}