// components/atoms/otpInput/OtpInput.styles.ts
import THEME from '@/src/theme/Sizes.theme';
import { Theme } from '@/src/theme/Theme.type';
import { StyleSheet } from 'react-native';
import { scale } from 'react-native-size-matters';

export const createStyles = (theme: Theme) =>
    StyleSheet.create({
        otpContainer: {
            width: '100%',
            height: 40,
            gap: 8
        },
        otpInputBox: {
            width: scale(40),
            height: scale(40),
            borderWidth: 1,
            borderRadius: 100,
            backgroundColor: theme.color.background,
            borderColor: theme.color.primary,
            justifyContent: 'center',
            alignItems: 'center'
        },
        otpInputText: {
            ...THEME.fonts.heading_24_medium,
            color: theme.color.textBlack
        },
        focusStick: {
            backgroundColor: theme.color.primary,
            height: 2
        },
        activeOtpInputBox: {
            borderColor: theme.color.primary,
            borderWidth: 1
        },
        placeholderText: {
            color: theme.color.primaryGrey
        },
        filledOtpInputBox: {
            borderColor: theme.color.primary,
            backgroundColor: theme.color.background
        }
    });
