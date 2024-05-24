import { APP_ROUTES, SH_DOCTOR } from "../../../utils/constant";


export interface IDrCardDataType {
    url: string;
    qualification: string;
    position: string;
    bio: string;
    imgUrl: string;
}

export interface IDoctorCardData {
    namrata: IDrCardDataType,
    arvind: IDrCardDataType,
    deepmala: IDrCardDataType

}

export const DoctorCardData: IDoctorCardData = {
    namrata: {
        url: APP_ROUTES.DR_NAMRATA,
        qualification: SH_DOCTOR.DR_NAMRATA_QUALIFICATION,
        position: "",
        bio: `Dr. ${SH_DOCTOR.DR_NAMRATA} is a dedicated and compassionate BHMS-qualified doctor with 21+ years experience in homeopathic healthcare. Her journey in the field of homeopathy is marked by a commitment to providing natural and personalized healing solutions to her patients.`,
        imgUrl: "drnamrata.jpg"
    },
    arvind: {
        url: APP_ROUTES.DR_ARVIND,
        qualification: SH_DOCTOR.DR_ARVIND_QUALIFICATION,
        position: "",
        bio: ` Dr. ${SH_DOCTOR.DR_ARVIND} is a dedicated and compassionate BHMS-qualified doctor committed to promoting holistic healing through homeopathy. Having 19+ years of experience in the field, he strives to provide personalized and natural healthcare solutions to his patients.`,
        imgUrl: "drarvind.jpg"
    },
    deepmala: {
        url: APP_ROUTES.DR_DEEPMALA,
        qualification: SH_DOCTOR.DR_DEEPMALA_QUALIFICATION,
        position: "",
        bio: ` Dr. ${SH_DOCTOR.DR_DEEPMALA} is a dedicated and compassionate BHMS-qualified doctor committed to promoting holistic healing through homeopathy. Having 6+ years of experience in the field, he strives to provide personalized and natural healthcare solutions to her patients.`,
        imgUrl: "drdeepmala.jpeg"
    }
};
