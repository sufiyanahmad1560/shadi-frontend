import axiosInstance from "./axios-instance";


class AppointmentService {
    private static GET_APPOINTMENT_SLOT_API_URL = '/api/appointment/slots';
    private static POST_BOOK_APPOINTMENT_API_URL = '/api/appointment/book';
    private static GET_APPOINTMENT_LIST_API_URL = '/api/appointment/list';

    public getAppointmentSlot = async () => {
        return await axiosInstance.get(AppointmentService.GET_APPOINTMENT_SLOT_API_URL);
    }

    public bookAppointment = async (formData: any) => {
        return await axiosInstance.post(AppointmentService.POST_BOOK_APPOINTMENT_API_URL, formData);
    }

    public getAppointmentList = async () => {
        return await axiosInstance.get(AppointmentService.GET_APPOINTMENT_LIST_API_URL);
    }

    public getAppointmentListByDate = async (date: string) => {
        return await axiosInstance.get(AppointmentService.GET_APPOINTMENT_LIST_API_URL + '/' + date);
    }

}

export const appointmentService = new AppointmentService();