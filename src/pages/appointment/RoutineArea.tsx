
import { useState } from "react";
import { useAppointmentApi } from "../../context/AppointmentContext";
import { useAuth } from "../../context/AuthContext";
import { Option } from "../../types/user";
import NiceSelect from "../../ui/NiceSelect";
import FormOne from "./FormOne";
import FormTwo from "./FormTwo";

interface SelectedCellType {
  row: number; // TODO change to date later
  col: number;
}

// const options: Option[] = [
//   { value: '1234', label: SH_DOCTOR.DR_ARVIND, imgUrl: aImgUrl },
//   { value: '5678', label: SH_DOCTOR.DR_NAMRATA, imgUrl: nImgUrl },
// ];

const RoutineArea = () => {

  const { slots } = useAppointmentApi();
  const { doctorOptions } = useAuth();
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedDoctorId, setSelectedDoctorId] = useState<string>('');
  const [selectedCell, setSelectedCell] = useState<SelectedCellType>({ row: -1, col: -1 });
  // const [selectedDoctor, setSelectedDoctor] = useState<Option | null>(null);

  const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

  const handleSlotClick = (rowIndex: number, colIndex: number, time: string) => {
    const date = slots?.dateArr[colIndex];
    if (date) {
      let dt = new Date(date);
      switch (time.split(':')[0]) {
        case '09':
          dt.setHours(9, 0, 0);
          break;
        case '10':
          dt.setHours(10, 0, 0);
          break;
        case '11':
          dt.setHours(11, 0, 0);
          break;
        case '01':
          dt.setHours(13, 0, 0);
          break;
        case '02':
          dt.setHours(14, 0, 0);
          break;
        case '03':
          dt.setHours(15, 0, 0);
          break;
        case '04':
          dt.setHours(16, 0, 0);
          break;
        case '05':
          dt.setHours(17, 0, 0);
          break;
        case '06':
          dt.setHours(18, 0, 0);
          break;
      }
      setSelectedDate(dt);
      setSelectedCell({ row: rowIndex, col: colIndex });
    }

  }


  const handleSelectDoctor = (item: Option, name: string) => {
    setSelectedDoctorId(item.value);
  }



  return (
    <>
      {/* {loading && <LoadingOverlay />} */}
      <div className="routine routine__bg pos-rel routine__container  fix" style={{ backgroundImage: `url(/assets/img/bg/routine__bg.jpg)` }}>
        <div className="container">
          <div className="row">
            {/* <div className="routine__table"> */}
            {/* <div className="row position-relative"> */}
            <div className="col-xs-12 col-lg-6">
              <div className="about-title news-letter-title mb-70">
                <h5 className="pink-color">Appointment</h5>
                <h1 className="white-color">Book Appointment</h1>
              </div>
            </div>
            <div className="col-xs-12 col-lg-6 pos-rel">
              <div className="calculate-box">
                <NiceSelect
                  className="select_style doctor-dd"
                  options={doctorOptions}
                  defaultCurrent={-1}
                  onChange={handleSelectDoctor}
                  name="doctor"
                  placeholder="Select Your Doctor"
                />
              </div>
            </div>
            {/* </div> */}
            {/* </div> */}
            <div className="col-sm-12 col-xl-6">
              <div className="routine__table">
                <table className="table position-relative">
                  <thead>
                    <tr>
                      {slots && slots.dateArr && slots.dateArr.map((head_date: any, head_i: number) =>
                        <th key={head_i} scope="col">
                          <div className="routine--time__day">{days[new Date(head_date).getDay()]}</div>
                          <div className="routine--time__date">{new Date(head_date).getDate() + " " + months[new Date(head_date).getMonth()] + " " + new Date(head_date).getFullYear()}</div>
                        </th>
                      )}
                    </tr>
                  </thead>
                  <tbody>

                    {slots && slots.allSlot.map((slotArr, rowIndex) =>
                      <tr key={rowIndex}>
                        {slotArr.map((slot, colIndex) =>
                          <td key={colIndex} onClick={() => handleSlotClick(rowIndex, colIndex, slot.time)} className={`${slot.status === 'available' ? "active-doctor" : "booked-slot"} ${(slot.status === 'available' && selectedCell && selectedCell.row === rowIndex && selectedCell.col === colIndex) ? 'clicked-cell' : ''}`}>
                            {slot.status === 'available' ?
                              (<div className={`${slot.time ? "doctor--routine__wrapper" : ""}`}>
                                <div>{slot.time.split(' ')[0]}</div>
                                <div>{slot.time.split(' ')[1]}</div>
                                <i className="fas fa-check-circle" ></i>
                              </div>)
                              :
                              <div className="doctor--routine__wrapper">
                                <div>Booked</div>
                              </div>}
                          </td>
                        )}
                      </tr>
                    )}

                  </tbody>
                </table>
              </div>
            </div>
            <div className="col-sm-12 col-xl-6">
              <div className="routine__table">
                <div className="calculate-box white-bg position-relative">
                  {step === 1 && <FormOne setStep={setStep} doctorId={selectedDoctorId} selectedDate={selectedDate} setSelectedDate={setSelectedDate} />}
                  {step === 2 && <FormTwo />}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RoutineArea;