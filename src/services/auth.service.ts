import { LoginUserData, RegisterFormValue, ResetPasswordFormValue, SendPwdResetMailFormValue } from "../types/user";
import axiosInstance from "./axios-instance";


class AuthService {
    private static LOGIN_API_URL = '/api/signin';
    private static REGISTER_API_URL = '/api/signup';
    private static SEND_PASSWORD_RESET_MAIL_API_URL = '/api/send-password-reset-mail';
    private static RESET_PASSWORD_API_URL = '/api/reset-password';
    private static GET_DOCTORLIST_API_URL = '/api/doctor-list';

    public login = async (loginUserData: LoginUserData) => {
        const loginInData = { emailOrUsername: loginUserData.email, password: loginUserData.password };
        return await axiosInstance.post(AuthService.LOGIN_API_URL, loginInData);
    }

    public register = async (registerFormValue: RegisterFormValue) => {
        return await axiosInstance.post(AuthService.REGISTER_API_URL, registerFormValue);
    }

    public sendPwdResetMail = async (sendPwdResetMailFormValue: SendPwdResetMailFormValue) => {
        return await axiosInstance.post(AuthService.SEND_PASSWORD_RESET_MAIL_API_URL, sendPwdResetMailFormValue);
    }

    public resetPassword = async (resetPasswordFormValue: ResetPasswordFormValue, token: string | undefined) => {
        return await axiosInstance.post(AuthService.RESET_PASSWORD_API_URL, { passowrd: resetPasswordFormValue.password, cnfrmPassword: resetPasswordFormValue.cnfrmPassword, token });
    }

    public getDoctorList = async () => {
        return await axiosInstance.get(AuthService.GET_DOCTORLIST_API_URL);
    }

}

export const authService = new AuthService()