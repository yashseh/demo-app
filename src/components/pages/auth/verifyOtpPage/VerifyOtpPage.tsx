/* eslint-disable react-hooks/exhaustive-deps */
import Button from '@/src/components/atoms/button/Button';
import Description from '@/src/components/atoms/description/Description';
import { IDescriptionTypes } from '@/src/components/atoms/description/Description.types';
import OtpInput from '@/src/components/molecules/input-types/otpInput/OtpInput';
import { showToast } from '@/src/components/molecules/toastMessage/ToastMessage';
import AuthBackground from '@/src/components/templates/authBackground/AuthBackground';
import { ICustomErrorResponse } from '@/src/state/global.types';
import { setLoading } from '@/src/state/slices/loading/loadingSlice';
import { useResentOtpMutation, useVerifyOtpMutation } from '@/src/state/slices/login/LoginApi';
import { setUserDetails } from '@/src/state/slices/login/LoginSlice';
import THEME from '@/src/theme/Sizes.theme';
import { useTheme } from '@/src/theme/Theme.context';
import { router, useLocalSearchParams } from 'expo-router';
import React, { useEffect, useRef, useState } from 'react';
import { Keyboard, StyleSheet, TouchableOpacity, View } from 'react-native';
import { OtpInputRef } from 'react-native-otp-entry';
import { useToast } from 'react-native-toast-notifications';
import { useDispatch } from 'react-redux';

const VerifyOtpPage = () => {
    const { theme } = useTheme();
    const { otp: receivedOtp, mobile } = useLocalSearchParams<{ otp: string; mobile: string }>();
    const [otp, setOtp] = useState('');
    const [displayOtp, setDisplayOtp] = useState('');
    const toast = useToast();
    const dispatch = useDispatch();
    const [verifyOtp, { isLoading: isVerifyOtpLoading }] = useVerifyOtpMutation();
    const [resentOtp, { isLoading: isResentOtpLoading }] = useResentOtpMutation();
    const otpRef = useRef<OtpInputRef>(null);

    const handleOtpChange = (text: string) => {
        setOtp(text);
    };

    useEffect(() => {
        dispatch(setLoading({ isLoading: isResentOtpLoading, loadingMessage: 'Resending OTP...' }));
    }, [isResentOtpLoading]);

    useEffect(() => {
        if (receivedOtp) {
            setDisplayOtp(receivedOtp);
        }
    }, [receivedOtp]);

    const handleOtpFilled = (filledOtp: string) => {
        setOtp(filledOtp);
        Keyboard.dismiss();
    };

    const handleVerifyOtp = async (otpCode?: string) => {
        const codeToVerify = otpCode || otp;

        if (codeToVerify.length !== 6) {
            showToast(toast, 'Please enter a valid 6-digit OTP', 'error');
            return;
        }

        if (codeToVerify.length === 6) {
            Keyboard.dismiss();
        }

        try {
            const response = await verifyOtp({ otp: codeToVerify, mobile }).unwrap();
            if (response) {
                dispatch(
                    setUserDetails({
                        phone: mobile,
                        token: response.accessToken
                    })
                );
                router.dismissAll();
                router.replace('/home');
            }
        } catch (error) {
            const customError: ICustomErrorResponse = error as ICustomErrorResponse;
            showToast(toast, customError?.message || 'Verification failed', 'error');
            otpRef.current?.clear();
            setOtp('');
        }
    };

    const handleResendOtp = async () => {
        try {
            const response = await resentOtp({ mobile }).unwrap();
            if (response) {
                setDisplayOtp(response.otp);
                showToast(toast, 'OTP resent successfully', 'success');
            }
        } catch (error) {
            const customError: ICustomErrorResponse = error as ICustomErrorResponse;
            showToast(toast, customError?.message || 'Failed to resend OTP', 'error');
        }
    };

    // Format mobile number for display (mask middle digits for privacy)
    const formatMobileNumber = (mobileNumber?: string) => {
        if (!mobileNumber) return '';
        if (mobileNumber.length >= 10) {
            const first = mobileNumber.slice(0, 2);
            const last = mobileNumber.slice(-2);
            const masked = '*'.repeat(mobileNumber.length - 4);
            return `${first}${masked}${last}`;
        }
        return mobileNumber;
    };

    return (
        <AuthBackground
            heading="Verify OTP"
            description={`Enter the 6-digit code sent to ${formatMobileNumber(mobile)}`}
        >
            <View style={styles.container}>
                {/* Display OTP for testing purposes */}
                {displayOtp && (
                    <View style={styles.otpDisplayContainer}>
                        <Description
                            type={IDescriptionTypes.d14}
                            content={`For testing: OTP is ${displayOtp}`}
                            customClassStyles={[
                                styles.otpDisplayText,
                                {
                                    color: theme.color.secondary,
                                    backgroundColor: theme.color.lightGrey
                                }
                            ]}
                        />
                    </View>
                )}

                <View style={styles.otpContainer}>
                    <OtpInput
                        ref={otpRef}
                        numberOfDigits={6}
                        onTextChange={handleOtpChange}
                        onFilled={handleOtpFilled}
                        autoFocus={true}
                    />
                </View>

                <View style={styles.resendContainer}>
                    <Description
                        type={IDescriptionTypes.d14}
                        content="Didn't receive the code? "
                        customClassStyles={[styles.resendText, { color: theme.color.primaryGrey }]}
                    />
                    <TouchableOpacity onPress={handleResendOtp} style={styles.resendTouchable}>
                        <Description
                            type={IDescriptionTypes.d14}
                            content="Resend OTP"
                            customClassStyles={[styles.resendLinkText, { color: theme.color.secondary }]}
                        />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.buttonContainer}>
                <Button
                    content="Verify OTP"
                    onPress={() => handleVerifyOtp()}
                    isDisabled={otp.length !== 6}
                    loading={isVerifyOtpLoading}
                    customClassStyles={styles.verifyButton}
                />
            </View>
        </AuthBackground>
    );
};

export default VerifyOtpPage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: THEME.padding.horizontal.lg_24,
        paddingTop: THEME.padding.vertical.xl_32
    },
    otpDisplayContainer: {
        marginBottom: THEME.margin.vertical.lg_24,
        alignItems: 'center'
    },
    otpDisplayText: {
        textAlign: 'center',
        padding: THEME.padding.horizontal.sm_12,
        borderRadius: THEME.borderRadius.md_8,
        fontWeight: '600',
        overflow: 'hidden'
    },
    otpContainer: {
        marginBottom: THEME.margin.vertical.xl_32,
        alignItems: 'center'
    },
    buttonContainer: {
        marginBottom: THEME.margin.vertical.lg_24
    },
    verifyButton: {
        marginHorizontal: 0
    },
    resendContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    resendText: {
        textAlign: 'center'
    },
    resendTouchable: {
        padding: THEME.padding.horizontal.xs_4
    },
    resendLinkText: {
        textAlign: 'center',
        textDecorationLine: 'underline'
    }
});
