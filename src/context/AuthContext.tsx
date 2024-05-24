// AuthContext.tsx
import React, { ReactNode, createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { authService } from '../services/auth.service';
import { Option, User } from '../types/user';
import { APP_ROUTES } from '../utils/constant';

interface AuthContextProps {
    user: User;
    doctorOptions: Option[];
    login: (data: User) => Promise<void>;
    logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

interface Props {
    children: ReactNode;
}

export const AuthProvider: React.FC<Props> = ({ children }) => {
    const navigate = useNavigate();

    const [user, setUser] = useLocalStorage("user", null);
    const [doctorOptions, setDoctorOptions] = useState<Option[]>([]);



    const getDoctorList = async () => {
        await authService.getDoctorList().then((res) => {
            if (res && res.data) {
                const doctorOptions = [];
                for (let doctor of res.data) {
                    doctorOptions.push({ value: doctor._id, text: doctor.name });
                }
                setDoctorOptions(doctorOptions);
            }
        }).catch(error => {
            console.error('Error fetching data:', error);
        });
    }

    useEffect(() => {
        getDoctorList();
    }, []);

    const login = async (data: User) => {
        // Perform your authentication logic here
        setUser(data);
        navigate(APP_ROUTES.HOME);
    };

    const logout = () => {
        // Perform your logout logic here
        setUser(null);
        // navigate(APP_ROUTES.HOME);
    };

    const valueToShare = {
        user,
        doctorOptions,
        login,
        logout
    }

    return (
        <AuthContext.Provider value={valueToShare}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
