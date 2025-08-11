import { showToast } from '@/src/components/molecules/toastMessage/ToastMessage';
import { ICustomErrorResponse } from '@/src/state/global.types';
import { useLoginMutation } from '@/src/state/slices/login/LoginApi';
import { useRouter } from 'expo-router';
import React from 'react';
import { useToast } from 'react-native-toast-notifications';
import LoginForm from '../../../organisms/forms/loginform/LoginForm';
import { ILoginFormValues } from '../../../organisms/forms/loginform/LoginForm.types';
import AuthBackground from '../../../templates/authBackground/AuthBackground';

const SignupOrLoginPage = () => {
    const [login, { isLoading }] = useLoginMutation();
    const router = useRouter();
    const toast = useToast();

    const handleLogin = async (data: ILoginFormValues) => {
        try {
            const response = await login({ mobile: data.mobile }).unwrap();
            if (response) {
                router.push({
                    pathname: '/verifyOtp',
                    params: { otp: response.otp, mobile: data.mobile }
                });
            }
        } catch (error) {
            const customError: ICustomErrorResponse = error as ICustomErrorResponse;
            showToast(toast, customError?.message || 'Login failed', 'error');
            console.log(error);
        }
    };

    return (
        <AuthBackground hideBack heading="Login">
            <LoginForm isLoading={isLoading} onSubmit={handleLogin} />
        </AuthBackground>
    );
};

export default SignupOrLoginPage;
