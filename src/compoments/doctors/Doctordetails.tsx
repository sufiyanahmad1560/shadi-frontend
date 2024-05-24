

import React from 'react';
import arvindImgUrl from '../../assets/img/doctor/arvind.jpg';
import namrataImgUrl from '../../assets/img/doctor/namrata.jpg';
import deepmalaImgUrl from '../../assets/img/slider/slider-bg-2.jpg';
import FooterOne from '../../layout/footers/FooterOne';
import HeaderFive from '../../layout/headers/HeaderFive';
import { DoctorDetail, DoctorDetailContent } from '../../types/doctor';
import { SH_DOCTOR } from '../../utils/constant';
import Breadcrumb from '../common/Breadcrumb';
import DoctorDetailsArea from './DoctorDetailsArea';

interface Props {
  doctorDetail: DoctorDetail,
  doctorDetailContent: DoctorDetailContent
}

const DoctorDetails: React.FC<Props> = ({ doctorDetail, doctorDetailContent }) => {
  return (
    <>
      <HeaderFive />
      <main>
        {doctorDetail.code === SH_DOCTOR.DR_ARVIND_CODE &&
          <Breadcrumb sub_title={doctorDetail.subTitle} title={doctorDetail.title} page={doctorDetail.page} imgUrl={arvindImgUrl} />}
        {doctorDetail.code === SH_DOCTOR.DR_NAMRATA_CODE &&
          <Breadcrumb sub_title={doctorDetail.subTitle} title={doctorDetail.title} page={doctorDetail.page} imgUrl={namrataImgUrl} />}
        {doctorDetail.code === SH_DOCTOR.DR_DEEPMALA_CODE &&
          <Breadcrumb sub_title={doctorDetail.subTitle} title={doctorDetail.title} page={doctorDetail.page} imgUrl={deepmalaImgUrl} />}
        <DoctorDetailsArea doctorDetailContent={doctorDetailContent} />
      </main>
      <FooterOne />
    </>
  );
};

export default DoctorDetails;