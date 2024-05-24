export interface IUserData {
    email: string;
    username: string;
    token: string;

}

export interface RegisterFormValue {
    name: string;
    mobile: string;
    email: string;
    password: string;
}

export interface LoginUserData {
    email: string;
    password: string;
}

export interface SendPwdResetMailFormValue {
    email: string;
}

export interface ResetPasswordFormValue {
    password: string;
    cnfrmPassword: string;
}


// src/types.ts
export interface User {
    id: string;
    name: string;
    email: string;
    mobile: number;
    role: string;
    token: string;
}

export interface AuthResponse {
    token: string;
    user: User;
}

export interface UserDetail {
    _id: string;
    userId: string;
    gender: string;
    age: number;
    occupation: string;
    address: string;
    presentComplain: string;
    pastMedicalHistory: string;
    familySevereDisease: string;
    familySevereDiseaseSide: string;
    familySevereDiseaseMember: string;
    familySevereDiseaseDetail: string;
    smoking: string;
    alcoholic: string;
    drugAddict: string;
}

export interface Option {
    value: string;
    text: string;
}