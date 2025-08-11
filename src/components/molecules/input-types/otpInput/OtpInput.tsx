// components/atoms/otpInput/OtpInput.tsx
import { useTheme } from '@/src/theme/Theme.context';
import React from 'react';
import { OtpInputRef, OtpInput as RNOtpInput } from 'react-native-otp-entry';
import { createStyles } from './OtpInput.styles';
import { IOtpInputProps } from './OtpInput.types';

const OtpInput = React.forwardRef<OtpInputRef, IOtpInputProps>(
    ({ onTextChange, onFilled, autoFocus = true, error, numberOfDigits = 4, customStyles = {} }, ref) => {
        // Get current theme
        const { theme } = useTheme();

        // Create styles with current theme
        const styles = React.useMemo(() => createStyles(theme), [theme]);

        // Default theme configuration
        const defaultTheme = React.useMemo(
            () => ({
                containerStyle: [styles.otpContainer, customStyles.containerStyle],
                pinCodeContainerStyle: [styles.otpInputBox, customStyles.inputStyle],
                pinCodeTextStyle: styles.otpInputText,
                focusStickStyle: styles.focusStick,
                focusedPinCodeContainerStyle: styles.activeOtpInputBox,
                placeholderTextStyle: styles.placeholderText,
                filledPinCodeContainerStyle: styles.filledOtpInputBox
            }),
            [styles, customStyles]
        );

        return (
            <RNOtpInput
                numberOfDigits={numberOfDigits}
                onTextChange={onTextChange}
                onFilled={onFilled}
                ref={ref}
                focusColor={theme.color.primary}
                autoFocus={autoFocus}
                hideStick={true}
                type="numeric"
                theme={defaultTheme as any}
                textInputProps={{
                    accessibilityLabel: 'One-Time Password Input',
                    accessibilityHint: `Enter the ${numberOfDigits}-digit verification code`
                }}
            />
        );
    }
);

OtpInput.displayName = 'OtpInput';

export default React.memo(OtpInput);
