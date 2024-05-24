
export interface DoctorDetail {
    title: string;
    subTitle: string;
    page: string;
    coverImgUrl: string;
    code: string;
}

export interface DoctorFeature {
    id: number;
    img: string;
    title: string;
    lists: string[];
}
export interface DoctorQualification {
    id: number;
    img: string;
    education: string;
    versity_name: string;
}

export interface DoctorDetailContent {
    profileImg: string;
    sub_title: string;
    title: string;
    des_1: string;
    des_1_2: string;
    des_1_3: string;
    des_1_4: string;
    des_1_5: string;
    des_1_6: string;
    skills_text: string;
    des_2: string;
    features: DoctorFeature[];
    care_text: string;
    des_3: string;
    name: string;
    job_title: string;
    qualifications: string;
    qualifications_data: DoctorQualification[];
    advice: string;
    speciality: string[],
    language: string[]

}

