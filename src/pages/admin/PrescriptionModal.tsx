import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import logoImgSrc from '../../assets/img/logo/logo-2.png';
import testi_box from "../../assets/img/testimonials/testi-box-bg.png";
import LoadingOverlay from "../../compoments/common/LoadingOverlay";
import { prescriptionService } from "../../services/prescription.service";
import { IPatient, Prescription } from "../../types/appointment";
import { DR_QUALIFICATION, HOSPITAL, SH_DOCTOR } from "../../utils/constant";
import ConfirmationModal from "./ConfirmationModal";


interface PrescriptionType {
    prescription: string;
}

interface PrescriptionErrorType {
    prescription: string;
}

interface Props {
    selectedPatient: IPatient | null;
    prescriptionList: Prescription[] | null;
    loadPrescription: boolean;
    setLoadPrescription: (status: boolean) => void;
}


const PrescriptionModal: React.FC<Props> = ({ selectedPatient, prescriptionList, loadPrescription, setLoadPrescription }) => {

    const [loading, setLoading] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState<PrescriptionType>({ prescription: '' });
    const [touched, setTouched] = useState<{ [key: string]: boolean }>({ prescription: false });
    const [errors, setErrors] = useState<PrescriptionErrorType>({ prescription: '' });
    const [disableFormBtn, setDisableFormBtn] = useState<boolean>(false);

    const componentStyle = {
        backgroundImage: `url(${testi_box})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '50% 90%',
        backgroundPosition: 'center'
    };

    const textareaHandler = (event: any) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
        setDisableFormBtn(false);
        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: '',
        }));
        setTouched((prevTouched) => ({
            ...prevTouched,
            [name]: true,
        }));
    }

    const handleTextAreaBlur = (e: React.FocusEvent<HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setTouched((prevTouched) => ({ ...prevTouched, [name]: true, }));
        if (value === '') {
            setErrors((prevErrors) => ({
                ...prevErrors,
                [name]: `${name.charAt(0).toUpperCase() + name.slice(1)} is mandatory.`,
            }));
        }
    }

    const openConfirmationModal = () => {
        if (formData.prescription) {
            setIsOpen(true);
        } else {
            setDisableFormBtn(true);
        }
    }

    const closeConfirmationModal = () => {
        setIsOpen(false);
    }

    const handleSave = async () => {
        if (!selectedPatient) {
            alert('Patient not found')
        }

        setIsOpen(false);
        setLoading(true);
        const data = { prescription: formData.prescription, user: selectedPatient?._id }
        await prescriptionService.savePrescription(data)
            .then((res) => {
                const notify = () => toast("Prescription saved successfully");
                notify();
                setLoadPrescription(true);
                setFormData({ ...formData, prescription: '' });
            })
            .catch(error => {
                console.error('Error Save Prescription data:', error);
            }).finally(() => {
                setLoading(false);
            });
    }

    const getPrescriptionDetail = (detail = '') => {
        const dt = detail.split(',');
        return dt.map((val, i) => (val ? <div key={i}> {val} </div> : ''))
    }


    return (
        <>
            {loading && <LoadingOverlay />}
            <ToastContainer />
            <div className="modal fade modal-xl" id="prescriptionModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="prescriptionModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content ">
                        <div className="modal-header">
                            <img className="modal-header-logo" src={logoImgSrc} alt="Logo" />
                            <div className="modal-header-heading d-none d-lg-block">
                                <h4 className="pm_address">{HOSPITAL.NAME}</h4>
                                <h4 className="pm_address">GHAZIPUR TIRAHA - MAU (U.P.)</h4>
                            </div>

                            {/* <h1 className="modal-title fs-5" id="prescriptionModalLabel">Prescription</h1> */}
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" style={{ backgroundColor: "#c1c1c1", right: "15px", top: "15px" }}></button>
                        </div>
                        <div className="modal-body" style={componentStyle}>
                            <div className="container-fluid">
                                <div className="row mt-3 flex-column flex-lg-row">
                                    <div className="col text-center mb-3 ">
                                        <h4>Dr. {SH_DOCTOR.DR_ARVIND}</h4>
                                        <ul>
                                            <li>{DR_QUALIFICATION.ARVIND_1}</li>
                                            <li>{DR_QUALIFICATION.ARVIND_4}</li>
                                            <li>{DR_QUALIFICATION.ARVIND_6}</li>
                                        </ul>
                                    </div>

                                    <div className="col text-center mb-3 ">
                                        <h4>{SH_DOCTOR.DR_NAMRATA}</h4>
                                        <ul>
                                            <li>{DR_QUALIFICATION.NAMRATA_1}</li>
                                            <li>{DR_QUALIFICATION.NAMRATA_2}</li>
                                            <li>{DR_QUALIFICATION.NAMRATA_3}</li>
                                            <li>{DR_QUALIFICATION.NAMRATA_4}</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="separator"></div>

                                {loadPrescription ?
                                    <div className="row mt-3" aria-hidden="true">
                                        <div className="col-sm-12 col-md-6 col-lg-4 mb-3">
                                            <div className="card gray-bg border-light prescription-card shadow">
                                                <div className="card-body  ">
                                                    <div className="row prescription-detail placeholder-glow">
                                                        <div className="col placeholder">
                                                            <div className=""></div>
                                                        </div>
                                                    </div>
                                                    <div className="row mt-3 doc-name placeholder-glow">
                                                        <div className="col-6 placeholder"></div>
                                                        <div className="col-6 placeholder text-right"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    :
                                    <>
                                        {prescriptionList && prescriptionList.length > 0 &&
                                            <div className="row mt-3">
                                                {prescriptionList.map((prescription, index) =>
                                                    <div key={index} className="col-sm-12 col-md-6 col-lg-4 mb-3">
                                                        <div className="card gray-bg border-light prescription-card shadow">
                                                            <div className="card-body ">
                                                                <div className="row prescription-detail">
                                                                    <div className="col">
                                                                        <div> {getPrescriptionDetail(prescription.prescription)}</div>
                                                                    </div>
                                                                </div>
                                                                <div className="row mt-3 doc-name">
                                                                    <div className="col">{prescription.doctorId.name}</div>
                                                                    <div className="col text-right">Date: {new Date(prescription.createdAt).toLocaleString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })}</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        }
                                    </>
                                }
                                <div className="row mt-3">
                                    <div className="col">
                                        <form id="prescription-form" className="conatct-post-form" >
                                            <div className="row">
                                                <div className="col-xl-12">
                                                    <div className="contact-icon contacts-message">
                                                        <textarea name="prescription" id="prescription" cols={30} rows={10}
                                                            placeholder="Type comma separated prescription here ...." style={{ color: "#223645" }}
                                                            value={formData.prescription || ""}
                                                            onChange={textareaHandler}
                                                            onBlur={handleTextAreaBlur}></textarea>
                                                        {touched.prescription && <p className="form_error">{errors.prescription}</p>}
                                                        {disableFormBtn && <p className="form_error">Prescription is mandatory!</p>}
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-success" onClick={openConfirmationModal} disabled={disableFormBtn}>Save</button>
                        </div>
                    </div>
                </div>
            </div>
            <ConfirmationModal
                isOpen={isOpen}
                title="Confirm this action?"
                message="Do you really want to save?"
                onCancel={closeConfirmationModal}
                onConfirm={handleSave}
            />
        </>

    )
}


export default PrescriptionModal;