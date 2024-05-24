

import React from 'react';
import { IDrCardDataType } from './DoctorCardData';

interface Props {
    data: IDrCardDataType;
    knowMoreBtnHandler: (url: string) => void;
}

const DoctorCard: React.FC<Props> = ({ data, knowMoreBtnHandler }) => {

    return (
        <div className="row" >
            <div className="col-3">
                <img className="img-fluid rounded rounded-circle mb-4 border border-5" src={""} alt={data.imgUrl} />
            </div>
            <div className="col-9">
                <h5 className='qualification'>{data.qualification}</h5>
                <h6 className='position'>{data.position}</h6>
                <div className='bio'>{data.bio}</div>
                <div className="text-end">
                    <button onClick={() => knowMoreBtnHandler(data.url)} className="primary_btn submenu-dr-btn  mt-20">Know More</button>
                </div>
            </div>

        </div>
    );
};

export default DoctorCard

