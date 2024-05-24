

import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import LoadingOverlay from "../../compoments/common/LoadingOverlay";
import { useAppointmentApi } from "../../context/AppointmentContext";
import { appointmentService } from "../../services/appointment.service";
import { Option } from "../../types/user";
import NiceSelect from "../../ui/NiceSelect";


interface UserType {
    name: string;
    email: string;
    mobile: string;
    gender: string;
    age: string;
    occupation: string;
    address: string;
    appointmentDate: Date | null;
    presentComplain: string,
    pastMedicalHistory: string,
    familySevereDisease: string,
    familySevereDiseaseSide: string,
    familySevereDiseaseMember: string,
    familySevereDiseaseDetail: string,
    smoking: string,
    alcoholic: string,
    drugAddict: string,
    doctorId: string
}



interface FormOneErrorType {
    name: string;
    email: string;
    mobile: string;
    gender: string;
    age: string;
    occupation: string;
    address: string;
    presentComplain: string;
    familySevereDiseaseSide: string;
    familySevereDiseaseMember: string;
    familySevereDiseaseDetail: string;
    appointmentDate: string;
    doctorId: string;
}

// Define the prop types using TypeScript interface
interface Props {
    selectedDate: Date | null;
    doctorId: string;
    setStep: (step: number) => void;
    setSelectedDate: (selectedDate: Date | null) => void;
}


const FormOne: React.FC<Props> = ({ setStep, doctorId, selectedDate, setSelectedDate }) => {
    const { getAppointmentSlot } = useAppointmentApi();

    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState<UserType>({
        name: '', email: '', mobile: '', gender: '', age: '',
        occupation: '', address: '', appointmentDate: null,
        presentComplain: "",
        pastMedicalHistory: "",
        familySevereDisease: "No",
        familySevereDiseaseSide: "",
        familySevereDiseaseMember: "",
        familySevereDiseaseDetail: "",
        smoking: "No",
        alcoholic: "No",
        drugAddict: "No",
        doctorId: ""
    });

    const [touched, setTouched] = useState<{ [key: string]: boolean }>({
        name: false, email: false, mobile: false, gender: false, age: false,
        occupation: false, address: false, presentComplain: false, appointmentDate: false, doctorId: false
    });

    const [fsddTouched, setFsddTouched] = useState<{ [key: string]: boolean }>({
        familySevereDiseaseDetail: false
    });

    const [errors, setErrors] = useState<FormOneErrorType>({
        name: '', email: '', mobile: '', gender: '', age: '',
        occupation: '', address: '', presentComplain: '', familySevereDiseaseSide: '', familySevereDiseaseMember: '', familySevereDiseaseDetail: '', appointmentDate: '', doctorId: ''
    });

    const [isVisiblePMS, setIsVisiblePMS] = useState<boolean>(false);
    const [isVisibleMMS, setIsVisibleMMS] = useState<boolean>(false);
    const [severeDisease, setSevereDisease] = useState<boolean>(false);
    const [paternalMember, setPaternalMember] = useState<string>("");
    const [maternalMember, setMaternalMember] = useState<string>("");
    const [smoking, setSmoking] = useState<boolean>(false);

    useEffect(() => {
        setFormData((data) => ({ ...data, doctorId: doctorId, appointmentDate: selectedDate }));
    }, [doctorId, selectedDate]);

    const selectHandler = (item: Option, name: any) => {
        // console.log(JSON.stringify(item) + " " + name);
        const value = item.value;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: '',
        }));

    }

    const handleChange = (event: any) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
        // validateForm();

        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: '',
        }));

        setTouched((prevTouched) => ({
            ...prevTouched,
            [name]: true,
        }));
    }

    const handleChangeEmail = (event: any) => {
        const { name, value } = event.target;

        setFormData((prevData) => ({ ...prevData, [name]: value }));
        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (value === '') {
            setErrors((prevErrors) => ({
                ...prevErrors,
                [name]: 'Email is mandatory.',
            }));
        } else {
            if (emailRegex.test(formData.email)) {
                setErrors((prevErrors) => ({
                    ...prevErrors,
                    [name]: '',
                }));
            } else {
                setErrors((prevErrors) => ({
                    ...prevErrors,
                    [name]: 'Invalid email address',
                }));
            }
        }

        setTouched((prevTouched) => ({
            ...prevTouched,
            [name]: true,
        }));

    }

    const handleChangeAge = (event: any) => {
        const name = event.target.name;
        const value = event.target.value.replace(/[^0-9]/g, '')
        setFormData((prevData) => ({ ...prevData, [name]: value }));
        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: '',
        }));
        setTouched((prevTouched) => ({
            ...prevTouched,
            [name]: true,
        }));
    }

    const handleChangeMobile = (event: any) => {
        const name = event.target.name;
        const value = event.target.value.replace(/[^0-9]/g, '');
        if (value.length > 10) {
            return false;
        }
        setFormData((prevData) => ({ ...prevData, [name]: value }));
        if (value.length < 10) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                [name]: 'Mobile number must be 10 digit.',
            }));
        } else {
            setErrors((prevErrors) => ({
                ...prevErrors,
                [name]: '',
            }));
        }
        setTouched((prevTouched) => ({
            ...prevTouched,
            [name]: true,
        }));
    }

    const textareaHandler = (event: any) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: '',
        }));
        setTouched((prevTouched) => ({
            ...prevTouched,
            [name]: true,
        }));
    }

    const handleSevereDisease = (event: any) => {
        if (event.target.value === "Yes") {
            setSevereDisease(true);
        } else {
            setSevereDisease(false);
            setIsVisiblePMS(false);
            setIsVisibleMMS(false);

            setErrors((prevErrors) => ({
                ...prevErrors,
                familySevereDiseaseSide: ""
            }));
            setErrors((prevErrors) => ({
                ...prevErrors,
                familySevereDiseaseMember: ""
            }));
            setErrors((prevErrors) => ({
                ...prevErrors,
                familySevereDiseaseDetail: "",
            }));
            setFormData(prevData => ({ ...prevData, familySevereDiseaseSide: '', familySevereDiseaseMember: '', familySevereDiseaseDetail: '' }));

        }
        const name = event.target.name;
        const value = event.target.value;
        setFormData(prevData => ({ ...prevData, [name]: value }));

    }

    const radioHandleSide = (event: any) => {
        setPaternalMember("");
        setMaternalMember("");
        if (event.target.value === "Paternal") {
            setIsVisiblePMS(true);
            setIsVisibleMMS(false);

            setPaternalMember("");
        } else {
            setIsVisibleMMS(true);
            setIsVisiblePMS(false);

            setMaternalMember("");
        }

        const name = event.target.name;
        const value = event.target.value;
        setFormData(values => ({ ...values, [name]: value }));
        setFormData(values => ({ ...values, familySevereDiseaseMember: "" }));
    }

    const selectFamilyMember = (event: any) => {
        const name = event.target.name;
        const value = event.target.value;

        if (name === "paternalMember") {
            setPaternalMember(value);
        } else {
            setMaternalMember(value);
        }
        setFormData(values => ({ ...values, familySevereDiseaseMember: value }));
        setErrors((prevErrors) => ({
            ...prevErrors,
            familySevereDiseaseMember: ""
        }));
    }

    const radioHandleSmoking = (event: any) => {
        if (event.target.value === "Yes") {
            setSmoking(true);
        } else {
            setSmoking(false);
        }

        const name = event.target.name;
        const value = event.target.value;
        setFormData(values => ({ ...values, [name]: value }));
    }

    const handleCheckboxSmoking = (event: any) => {
        const name = event.target.name;
        if (event.target.checked === true) {
            setFormData(values => ({ ...values, [name]: "Yes" }));
        } else {
            setFormData(values => ({ ...values, [name]: "No" }));

        }

    }

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setTouched((prevTouched) => ({
            ...prevTouched,
            [name]: true,
        }));
        if (value === '') {
            setErrors((prevErrors) => ({
                ...prevErrors,
                [name]: `${name.charAt(0).toUpperCase() + name.slice(1)} is mandatory.`,
            }));
        }
    };

    const handleEmailBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setTouched((prevTouched) => ({
            ...prevTouched,
            [name]: true,
        }));
        if (value === '') {
            setErrors((prevErrors) => ({
                ...prevErrors,
                [name]: `${name.charAt(0).toUpperCase() + name.slice(1)} is mandatory.`,
            }));
        } else {
            if (emailRegex.test(formData.email)) {
                setErrors((prevErrors) => ({
                    ...prevErrors,
                    [name]: '',
                }));
            } else {
                setErrors((prevErrors) => ({
                    ...prevErrors,
                    [name]: 'Invalid email address',
                }));
            }
        }
    };

    const handleFsddBlur = (e: React.FocusEvent<HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFsddTouched((prevTouched) => ({
            ...prevTouched,
            [name]: true,
        }));
        if (value === '') {
            setErrors((prevErrors) => ({
                ...prevErrors,
                [name]: `Disease detail is mandatory.`,
            }));
        }
    };

    const handleTextAreaBlur = (e: React.FocusEvent<HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setTouched((prevTouched) => ({
            ...prevTouched,
            [name]: true,
        }));
        if (value === '') {
            setErrors((prevErrors) => ({
                ...prevErrors,
                [name]: `${name.charAt(0).toUpperCase() + name.slice(1)} is mandatory.`,
            }));
        }
    }

    const validateForm = () => {
        const newErrors: any = {};

        // Validate name
        if (formData.name.trim() === '') {
            newErrors.name = 'Name is a required field.';
        }

        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (formData.email.trim() === '') {
            newErrors.email = 'Email is a required field.';
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = 'Invalid email address';
        }

        // Validate mobile
        if (formData.mobile.trim() === '') {
            newErrors.mobile = 'Mobile number is required.';
        } else if (formData.mobile !== '') {
            if (formData.mobile.length < 10) {
                newErrors.mobile = 'Mobile number must be 10 digit.';
            }
        }

        // Validate gender
        if (formData.gender.trim() === '') {
            newErrors.gender = 'Gender is required.';
        }

        // Validate age
        if (formData.age.trim() === '') {
            newErrors.age = 'Age is required.';
        } else if (formData.age !== '') {
            if (Number(formData.age) < 1) {
                newErrors.age = 'Age must be at least 1 yr.';
            } else if (Number(formData.age) > 120) {
                newErrors.age = 'Maximum age limit is 120 yr.';

            }
        }

        // Validate occupation
        if (formData.occupation.trim() === '') {
            newErrors.occupation = 'Occupation is required';
        }

        // Validate address
        if (formData.address.trim() === '') {
            newErrors.address = 'Address is required.';
        }

        // Validate presentComplain
        if (formData.presentComplain.trim() === '') {
            newErrors.presentComplain = 'Present complain is mandatory.';
        }

        // Validate appointmentDate
        if (formData.appointmentDate === null) {
            newErrors.appointmentDate = 'Please select a date before submit.';
        }

        // Validate doctor
        if (formData.doctorId.trim() === '') {
            newErrors.doctorId = 'Please select a doctor before submit.';
        }

        //Family Severe Disease
        if (formData.familySevereDisease === 'Yes') {
            if (formData.familySevereDiseaseSide.trim() === '') {
                newErrors.familySevereDiseaseSide = 'Family side is mandatory.';
                setErrors((prevErrors) => ({
                    ...prevErrors,
                    familySevereDiseaseSide: "Family side is mandatory."
                }));

            } else {
                if (formData.familySevereDiseaseMember.trim() === '') {
                    newErrors.familySevereDiseaseMember = 'Family member is mandatory.';
                    setErrors((prevErrors) => ({
                        ...prevErrors,
                        familySevereDiseaseMember: "Family member is mandatory."
                    }));
                }
                if (formData.familySevereDiseaseDetail.trim() === '') {
                    newErrors.familySevereDiseaseDetail = 'Disease detail is mandatory.';
                    setFsddTouched((prevTouched) => ({
                        ...prevTouched,
                        familySevereDiseaseDetail: true,
                    }));
                }

            }
        }

        setTouched((prevTouched) => ({
            ...prevTouched,
            name: true, email: true, mobile: true, gender: true, age: true,
            occupation: true, address: true, presentComplain: true, appointmentDate: true, doctorId: true
        }));

        setErrors(newErrors);

        // Return true if there are no errors, indicating a valid form
        return Object.keys(newErrors).length === 0;
    };


    const handleSubmitFormOne = (event: any) => {
        event.preventDefault();
        // Validate the form before submission
        if (validateForm()) {
            // Submit the form data
            setLoading(true);
            bookAppointment(formData);
        } else {
            console.log('Form has errors. Please correct them.');
        }
    }

    const bookAppointment = async (formData: any) => {
        console.log(formData);
        await appointmentService.bookAppointment(formData).then((res) => {
            if (res) {
                console.log(res.data);
                getAppointmentSlot();
                setFormData({
                    ...formData,
                    name: '', email: '', mobile: '', gender: '', age: '',
                    occupation: '', address: '', appointmentDate: null,
                    presentComplain: "",
                    pastMedicalHistory: "",
                    familySevereDisease: "No",
                    familySevereDiseaseSide: "",
                    familySevereDiseaseMember: "",
                    familySevereDiseaseDetail: "",
                    smoking: "No",
                    alcoholic: "No",
                    drugAddict: "No",
                });
                setSelectedDate(null);
                setSevereDisease(false);
                const notify = () => toast("Appointment created successfully!");
                notify();
            } else {
                console.log('Something bad happened!');

            }
        }).catch(error => {
            console.error('Error in booking appointment:', error.response.data.error, error.response.status);
            const notify = () => toast(error.response.data.error);
            notify();
        }).finally(() => {
            setLoading(false);
        });

    }

    return (
        <>
            {loading && <LoadingOverlay />}
            <ToastContainer />

            <div className="calculate-content form-one">
                <form onSubmit={handleSubmitFormOne} noValidate>
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6">
                            <div className={`calculate-form appointment-form-3 mb-20 ${touched.name && errors.name ? "calculate-form-error" : ""}`}>
                                <input name="name" type="text" placeholder="Your Name" value={formData.name || ""}
                                    onChange={handleChange} onBlur={handleBlur} />
                                <i className="fas fa-user"></i>
                                {touched.name && <p className="form_error">{errors.name}</p>}

                            </div>
                        </div>

                        <div className="col-xl-6 col-lg-6 col-md-6">
                            <div className={`calculate-form appointment-form-3 mb-20 ${touched.email && errors.email ? "calculate-form-error" : ""}`}>
                                <input name="email" type="email" placeholder="Email" value={formData.email || ""}
                                    onChange={handleChangeEmail} onBlur={handleEmailBlur} />
                                <i className="fas fa-envelope"></i>
                                {touched.email && <p className="form_error">{errors.email}</p>}

                            </div>
                        </div>

                        <div className="col-xl-6 col-lg-6 col-md-6">
                            <div className={`calculate-form appointment-form-3 mb-20 ${touched.mobile && errors.mobile ? "calculate-form-error" : ""}`}>
                                <input name="mobile" type="text" placeholder="Mobile" value={formData.mobile || ""}
                                    onChange={handleChangeMobile} onBlur={handleBlur} />
                                <i className="fas fa-mobile"></i>
                                {touched.mobile && <p className="form_error">{errors.mobile}</p>}

                            </div>
                        </div>

                        <div className="col-xl-6 col-lg-6 col-md-6 pos-rel">
                            <NiceSelect
                                className={`select_style ${errors.gender ? "nice-select-error" : ""}`}
                                options={[
                                    { value: "Male", text: "Male" },
                                    { value: "Female", text: "Female" }
                                ]}
                                defaultCurrent={-1}
                                onChange={selectHandler}
                                name="gender"
                                placeholder="Gender"
                            />
                            {errors.gender && <p className="form_error" style={{ bottom: "0px" }}>{errors.gender}</p>}

                        </div>

                        <div className="col-xl-6 col-lg-6 col-md-6">
                            <div className={`calculate-form appointment-form-3 mb-20 ${touched.age && errors.age ? "calculate-form-error" : ""}`} >
                                <input name="age" type="text" placeholder="Age" value={formData.age || ""}
                                    onChange={handleChangeAge} onBlur={handleBlur} />
                                <i className="fas fa-calendar"></i>
                                {touched.age && <p className="form_error">{errors.age}</p>}

                            </div>
                        </div>

                        <div className="col-xl-6 col-lg-6 col-md-6">
                            <div className={`calculate-form appointment-form-3 mb-20 ${touched.occupation && errors.occupation ? "calculate-form-error" : ""}`} >
                                <input name="occupation" type="text" placeholder="Occupation" value={formData.occupation || ""}
                                    onChange={handleChange} onBlur={handleBlur} />
                                <i className="fas fa-user-md"></i>
                                {touched.occupation && <p className="form_error">{errors.occupation}</p>}

                            </div>
                        </div>

                        <div className="col-xl-12">
                            <div className={`appointment-form-3 mb-20 ${touched.address && errors.address ? "appointment-form-3-error" : ""}`}>
                                <textarea
                                    name="address"
                                    cols={30}
                                    rows={10}
                                    placeholder="Address"
                                    value={formData.address || ""}
                                    onChange={textareaHandler}
                                    onBlur={handleTextAreaBlur}
                                ></textarea>
                                <i className="fas fa-address-book"></i>
                                {touched.address && <p className="form_error">{errors.address}</p>}

                            </div>
                        </div>

                        <div className="col-xl-12">
                            <div className={`appointment-form-3 mb-20 ${touched.presentComplain && errors.presentComplain ? "appointment-form-3-error" : ""}`} >
                                <textarea
                                    name="presentComplain"
                                    cols={30}
                                    rows={10}
                                    placeholder="Present Complain"
                                    value={formData.presentComplain || ""}
                                    onChange={textareaHandler}
                                    onBlur={handleTextAreaBlur}

                                ></textarea>
                                <i className="far fa-edit"></i>
                                {touched.presentComplain && <p className="form_error">{errors.presentComplain}</p>}

                            </div>
                        </div>

                        <div className="col-xl-12">
                            <div className="calculate-form appointment-form-3 mb-20">
                                <textarea
                                    name="pastMedicalHistory"
                                    cols={30}
                                    rows={10}
                                    placeholder="Past Medical History"
                                    value={formData.pastMedicalHistory || ""}
                                    onChange={textareaHandler}
                                ></textarea>
                                <i className="far fa-edit"></i>

                            </div>
                        </div>


                        <div className="col-xl-12 ">
                            <div className="form-check form-check-inline">
                                <h6>Family History (Any severe disease)</h6>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="familySevereDisease" value={"Yes"}
                                    onChange={handleSevereDisease} id="severeDiseaseYes" checked={severeDisease} />
                                <label className="form-check-label" htmlFor="severeDiseaseYes">Yes</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="familySevereDisease" value={"No"}
                                    onChange={handleSevereDisease} id="severeDiseaseNo" checked={!severeDisease} />
                                <label className="form-check-label" htmlFor="severeDiseaseNo">No</label>
                            </div>
                        </div>
                        {severeDisease &&
                            <>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-6">
                                    <div className="mt-15">
                                        <div className="form-check form-check-inline">
                                            <h6 className="form-check-label">Side</h6>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input" type="radio" name="familySevereDiseaseSide" value={"Paternal"}
                                                onChange={radioHandleSide} id="side1" />
                                            <label className="form-check-label" htmlFor="side1">Paternal</label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input" type="radio" name="familySevereDiseaseSide" value={"Maternal"}
                                                onChange={radioHandleSide} id="side2" />
                                            <label className="form-check-label" htmlFor="side2">Maternal</label>
                                        </div>
                                        {errors.familySevereDiseaseSide && <p className="form_error">{errors.familySevereDiseaseSide}</p>}

                                    </div>
                                </div>

                                <div className="col-xl-6 col-lg-6 col-md-6 pos-rel">
                                    {isVisiblePMS &&
                                        <>
                                            <select className="sh-select  mb-3" value={paternalMember || ""} name="paternalMember" onChange={selectFamilyMember}>
                                                <option value={""} disabled={true} selected={paternalMember ? true : false} >Select Paternal Member</option>
                                                <option value="Grand Father">Grand Father</option>
                                                <option value="Grand Mother">Grand Mother</option>
                                                <option value="Uncle (Chacha)">Uncle (Chacha)</option>
                                                <option value="Aunty (Bua)">Aunty (Bua)</option>
                                            </select>
                                            {errors.familySevereDiseaseMember && <p className="form_error" style={{ bottom: "-4px" }}>{errors.familySevereDiseaseMember}</p>}
                                        </>
                                    }
                                    {isVisibleMMS &&
                                        <>
                                            <select className="sh-select  mb-3" value={maternalMember || ""} name="maternalMember" onChange={selectFamilyMember}>
                                                <option value={""} disabled={true} selected={maternalMember ? true : false} >Select Maternal Member</option>
                                                <option value="Grand Father">Grand Father</option>
                                                <option value="Grand Mother">Grand Mother</option>
                                                <option value="Uncle (Mama)">Uncle (Mama)</option>
                                            </select>
                                            {errors.familySevereDiseaseMember && <p className="form_error" style={{ bottom: "-4px" }}>{errors.familySevereDiseaseMember}</p>}
                                        </>
                                    }
                                </div>

                                {(isVisiblePMS || isVisibleMMS) && <div className="col-xl-12">
                                    <div className={`appointment-form-3 ${fsddTouched.familySevereDiseaseDetail && errors.familySevereDiseaseDetail ? "appointment-form-3-error" : ""}`} >
                                        <textarea
                                            name="familySevereDiseaseDetail"
                                            cols={30}
                                            rows={10}
                                            placeholder="Severe Disease Detail"
                                            value={formData.familySevereDiseaseDetail}
                                            onChange={textareaHandler}
                                            onBlur={handleFsddBlur}
                                        ></textarea>
                                        <i className="far fa-edit"></i>
                                        {fsddTouched.familySevereDiseaseDetail && <p className="form_error">{errors.familySevereDiseaseDetail}</p>}

                                    </div>
                                </div>}
                            </>
                        }

                        <div className="col-xl-6 col-lg-6 col-md-6 mt-20">
                            <div className="form-check form-check-inline">
                                <h6 className="form-check-label">Habit</h6>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="smoking" value={"Yes"}
                                    onChange={radioHandleSmoking} id="smoking1" checked={smoking} />
                                <label className="form-check-label" htmlFor="inlineRadio1">Smoker</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="smoking" value={"No"}
                                    onChange={radioHandleSmoking} id="smoking2" checked={!smoking} />
                                <label className="form-check-label" htmlFor="inlineRadio2">Non smoker</label>
                            </div>
                        </div>

                        <div className="col-xl-6 col-lg-6 col-md-6 mt-20">
                            <div className="row">
                                <div className="col form-check">
                                    <input name="alcoholic" className="form-check-input" type="checkbox" id="alcoholic"
                                        onChange={handleCheckboxSmoking} checked={formData.alcoholic === "Yes" ? true : false} />
                                    <label className="form-check-label" htmlFor="alcoholic">
                                        Alcoholic
                                    </label>
                                </div>
                                <div className="col form-check">
                                    <input name="drugAddict" className="form-check-input" type="checkbox" id="drugaddict"
                                        onChange={handleCheckboxSmoking} checked={formData.drugAddict === "Yes" ? true : false} />
                                    <label className="form-check-label" htmlFor="drugaddict">
                                        Drug Addict
                                    </label>
                                </div>

                            </div>
                        </div>



                        <div className="col-xs-12">
                            <div className="calculate-form appointment-form-3 mb-10" >
                                <button type="submit" className="primary_btn btn mt-20">
                                    submit
                                </button>

                            </div>
                        </div>
                        <div className="col-xs-12">
                            <div className="calculate-form mb-20">
                                <ul>
                                    {errors.appointmentDate && <li> <span className="form_error-2 ">{errors.appointmentDate}</span></li>}
                                    {errors.doctorId && <li><span className="form_error-2 ">{errors.doctorId}</span> </li>}
                                </ul>

                            </div>
                        </div>
                    </div>
                </form >
            </div >
        </>
    );
};

export default FormOne;