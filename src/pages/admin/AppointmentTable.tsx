import { ChangeEvent, MouseEvent, useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LoadingOverlay from "../../compoments/common/LoadingOverlay";
import { useAuth } from "../../context/AuthContext";
import { appointmentService } from "../../services/appointment.service";
import { prescriptionService } from "../../services/prescription.service";
import { IAppointment, IPatient, Prescription } from "../../types/appointment";
import { APP_ROUTES, PAGE_TITLE } from "../../utils/constant";
import PrescriptionModal from "./PrescriptionModal";


const AppointmentTable = () => {

    const navigate = useNavigate();
    const { logout } = useAuth();
    const [loading, setLoading] = useState(false);
    const [appointmentList, setAppointmentList] = useState<IAppointment[] | null>(null);
    const [searchDate, setSearchDate] = useState<string>('');
    const [showDateError, setShowDateError] = useState<boolean>(false);
    const [selectedPatient, setSelectedPatient] = useState<IPatient | null>(null);
    const [prescriptionList, setPrescriptionList] = useState<Prescription[] | null>(null);
    const [loadPrescription, setLoadPrescription] = useState<boolean>(true);

    const memoizedGetAppointmentList = useCallback(async () => {
        setLoading(true);
        await appointmentService.getAppointmentList().then((res) => {
            if (res) {
                if (res.data.length > 0) {
                    setAppointmentList(res.data);
                } else {
                    setAppointmentList(null);
                }
            }
        }).catch(error => {
            console.error('Error fetching data:', error);
            if (error.response && error.response.status === 401) {
                logout();
                navigate(APP_ROUTES.LOGIN);
            }
        }).finally(() => {
            setLoading(false);
        });

    }, [logout, navigate]);


    useEffect(() => {
        // Set the page title when the component mounts
        document.title = PAGE_TITLE.APPOINTMENT_LIST;
        memoizedGetAppointmentList();
        // Optionally, you can return a cleanup function to reset the title when the component unmounts
        return () => {
            document.title = PAGE_TITLE.HOME;
        };
    }, [memoizedGetAppointmentList]);



    const handleDateChange = async (event: ChangeEvent<HTMLInputElement>) => {
        const date = event.target.value;
        if (date) {
            setSearchDate(date);
            setShowDateError(false);
        }
    }

    const handleSearch = async (event: MouseEvent<HTMLButtonElement>) => {
        if (searchDate) {
            setLoading(true);
            await appointmentService.getAppointmentListByDate(searchDate).then((res) => {
                if (res) {
                    if (res.data.length > 0) {
                        setAppointmentList(res.data);
                    } else {
                        setAppointmentList(null);
                    }
                }
            }).catch(error => {
                console.error('Error fetching data:', error);
                if (error.response && error.response.status === 401) {
                    logout();
                    navigate(APP_ROUTES.HOME);
                }
            }).finally(() => {
                setLoading(false);
            });
        } else {
            setShowDateError(true);
        }
    }

    const handleReset = async (event: MouseEvent<HTMLButtonElement>) => {
        setSearchDate("");
        setShowDateError(false);
        memoizedGetAppointmentList();
    }

    const handleViewBtnClick = (event: React.MouseEvent<HTMLButtonElement>, patient: IPatient) => {
        event.stopPropagation();
        setSelectedPatient(patient);
        setLoadPrescription(true);
        memoizedFetchPatientPrescription(patient._id);
    }

    const memoizedFetchPatientPrescription = useCallback(
        async (patientId: string) => {
            setLoadPrescription(false);
            await prescriptionService.fetchPrescription(patientId).then((res) => {
                if (res) {
                    if (res.data.length > 0) {
                        setPrescriptionList(res.data);
                    } else {
                        setPrescriptionList(null);
                    }
                }
            }).catch(error => {
                console.error('Error fetching data:', error);
                if (error.response && error.response.status === 401) {
                    logout();
                    navigate(APP_ROUTES.LOGIN);
                }
            }).finally(() => {
                setLoadPrescription(false);
            })
        },
        [logout, navigate] // Only recreate if fetchPatientPrescription changes
    );

    useEffect(() => {

        if (loadPrescription && selectedPatient) {
            memoizedFetchPatientPrescription(selectedPatient._id);
        }

    }, [loadPrescription, memoizedFetchPatientPrescription, selectedPatient]);

    return (
        <>
            {loading && <LoadingOverlay />}

            <section className="fact-area fact-map primary-bg pos-rel">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 pb-40">

                            <div className="container-fluid">
                                <div className="row ">
                                    <div className="shvideo__heading">
                                        <div className="shvideo__heading-main ">
                                            <h2 >Appointment List</h2>
                                        </div>
                                        {/* <div className="shvideo__heading-sub">Step into a world of compassion and care through the lens of our photo gallery. Each image captures the essence of our commitment to health and well-being, showcasing not just state-of-the-art facilities but the warmth of our dedicated healthcare professionals.</div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            {(appointmentList && appointmentList.length > 0) ?
                                <>
                                    {showDateError && <div className="error-msg">Please select a date first</div>}
                                    <div className="d-none d-md-flex justify-content-end appointment-filter">
                                        <div className="mr-2 label">Select date</div>
                                        <div className="mr-2">
                                            <input type="date" className="filter-date" id="appointment-date" name="date" value={searchDate} onChange={handleDateChange} />
                                        </div>
                                        <div className="mr-2">
                                            <button className="btn btn-link filter-btn" onClick={handleSearch}  >Search</button>
                                        </div>
                                        <div className="">
                                            <button className="btn btn-link filter-btn" onClick={handleReset}  >Reset</button>

                                        </div>
                                    </div>
                                    <div className="d-flex d-md-none justify-content-end appointment-filter">
                                        <div className="mr-2 label">Select date</div>
                                        <div className="mr-2">
                                            <input type="date" className="filter-date" id="appointment-date" name="date" value={searchDate} onChange={handleDateChange} />
                                        </div>

                                    </div>
                                    <div className="d-flex d-md-none justify-content-end appointment-filter">
                                        <div className="mr-2">
                                            <button className="btn btn-link filter-btn" onClick={handleSearch}  >Search</button>
                                        </div>
                                        <div className="mr-2">
                                            <button className="btn btn-link filter-btn" onClick={handleReset}  >Reset</button>
                                        </div>
                                    </div>
                                    <div className="table-responsive shtable-responsive">
                                        <table className="table shtable">
                                            <thead className="shtable__head">
                                                <tr>
                                                    <th scope="col">#</th>
                                                    <th scope="col">Patient Name</th>
                                                    <th scope="col">Email</th>
                                                    <th scope="col">Mobile</th>
                                                    <th scope="col">Appointment Date</th>
                                                    <th scope="col">Doctor</th>
                                                    <th></th>
                                                </tr>
                                            </thead>
                                            {<tbody className="shtable__body">
                                                {appointmentList.map((appointment, index) => (

                                                    <tr key={index}>
                                                        <td >{index + 1}</td>
                                                        <td className="highlight">{appointment.patient.name}</td>
                                                        <td>{appointment.patient.email}</td>
                                                        <td>{appointment.patient.mobile}</td>
                                                        <td className="highlight">{new Date(appointment.date).toLocaleString('en-US', { day: 'numeric', month: 'short', year: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true, })}</td>
                                                        <td >{appointment.doctor.name}</td>
                                                        <td>
                                                            <button className="btn btn-link filter-btn" onClick={(e) => handleViewBtnClick(e, appointment.patient)} data-bs-toggle="modal" data-bs-target="#prescriptionModal">view</button>
                                                        </td>
                                                    </tr>

                                                ))}
                                            </tbody>
                                            }
                                        </table>
                                    </div>
                                </>

                                :
                                <>
                                    {showDateError && <div className="error-msg">Please select a date first</div>}

                                    <div className="d-none d-md-flex justify-content-end appointment-filter">
                                        <div className="mr-2 label">Select date</div>
                                        <div className="mr-2">
                                            <input type="date" className="filter-date" id="appointment-date" name="date" value={searchDate} onChange={handleDateChange} />
                                        </div>
                                        <div className="mr-2">
                                            <button className="btn btn-link filter-btn" onClick={handleSearch}  >Search</button>
                                        </div>
                                        <div className="mr-2">
                                            <button className="btn btn-link filter-btn" onClick={handleReset}  >Reset</button>

                                        </div>
                                    </div>
                                    <div className="d-flex d-md-none justify-content-end">
                                        <div className="">Select date</div>
                                        <div className="">
                                            <input type="date" className="filter-date" id="appointment-date" name="date" value={searchDate} onChange={handleDateChange} />
                                        </div>

                                    </div>
                                    <div className="d-flex d-md-none justify-content-end">
                                        <div className="">
                                            <button className="btn btn-link" onClick={handleSearch}  >Search</button>
                                        </div>
                                        <div className="">
                                            <button className="btn btn-link" onClick={handleReset}  >Reset</button>
                                        </div>
                                    </div>

                                    <table className="table shtable">
                                        <thead className="shtable__head">
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Patient Name</th>
                                                <th scope="col">Email</th>
                                                <th scope="col">Mobile</th>
                                                <th scope="col">Appointment Date</th>
                                                <th scope="col">Doctor</th>
                                            </tr>
                                        </thead>
                                        <tbody></tbody>
                                    </table>
                                    <div className="norecord">
                                        <p>No records to display</p>
                                    </div>
                                </>
                            }

                        </div>
                    </div>
                    <PrescriptionModal selectedPatient={selectedPatient} prescriptionList={prescriptionList} loadPrescription={loadPrescription} setLoadPrescription={setLoadPrescription} />
                </div>
            </section>
        </>
    );
};

export default AppointmentTable;