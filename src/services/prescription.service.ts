import axiosInstance from "./axios-instance";



class PrescriptionService {
    private static POST_PRESCRIPTION_API_URL = '/api/prescription';
    private static GET_PRESCRIPTION_API_URL = '/api/prescription';

    public savePrescription = async (data: any) => {
        return await axiosInstance.post(PrescriptionService.POST_PRESCRIPTION_API_URL, data);
    }

    public fetchPrescription = async (userId: string) => {
        return await axiosInstance.get(PrescriptionService.GET_PRESCRIPTION_API_URL + '/?userId=' + userId);
    }

}


export const prescriptionService = new PrescriptionService();

