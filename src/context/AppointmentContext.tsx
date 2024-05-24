import { createContext, useContext, useEffect, useState } from "react";
import LoadingOverlay from "../compoments/common/LoadingOverlay";
import { appointmentService } from "../services/appointment.service";
import { AppointmentSlot } from "../types/appointment";

interface AppointmentContextType {
    slots: AppointmentSlot | null;
    getAppointmentSlot: () => void;
}

export const AppointmentContext = createContext<AppointmentContextType | null>(null);

interface Props {
    children: React.ReactNode;
}

const AppointmentProvider: React.FC<Props> = ({ children }) => {
    const [loading, setLoading] = useState(false);
    const [slots, setSlots] = useState<AppointmentSlot | null>(null);
    // const [appointmentDetailContent, setAppointmentDetailContent] = useState(appointment_details_content);


    const getAppointmentSlot = async () => {
        setLoading(true);
        await appointmentService.getAppointmentSlot().then((res) => {
            if (res) {
                setSlots(res.data);
                // console.log(slots)
            }
        }).catch(error => {
            console.error('Error fetching data:', error);
        }).finally(() => {
            setLoading(false);
        })

    }


    useEffect(() => {
        getAppointmentSlot();
    }, []);

    const valueToShare = {
        slots,
        getAppointmentSlot
    }

    return (
        <AppointmentContext.Provider value={valueToShare}>
            {loading && <LoadingOverlay />}
            {children}
        </AppointmentContext.Provider>
    )
}

export default AppointmentProvider;


// Create a custom hook to use the context
export const useAppointmentApi = () => {
    const context = useContext(AppointmentContext);
    if (!context) {
        throw new Error('useApi must be used within an ApiProvider');
    }
    return context;
};