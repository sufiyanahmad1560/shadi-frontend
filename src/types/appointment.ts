import { UserDetail } from "./user";

export interface Appointment {
    profileImg: string;
    sub_title: string;
    title: string;
    des_1: string;
}

export interface AppointmentSlot {
    allSlot: Slot[][];
    dateArr: Date[];
    userDetail: UserDetail | null;
}

interface Slot {
    status: string;
    time: string;
}

export interface IPatient {
    _id: string;
    name: string;
    email: string;
    mobile: string;
    role: string;
}

export interface IAppointment {
    date: string;
    doctor: { name: string };
    patient: IPatient;
}

export interface Option {
    value: string;
    label: string;
    imgUrl: string;
}

export interface Prescription {
    // _id: string;
    prescription: string;
    doctorId: {
        name: string;
    };
    user: string;
    createdAt: Date;
    // updatedAt: Date;
    // __v: number;
}