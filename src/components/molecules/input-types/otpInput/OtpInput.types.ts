export interface IOtpInputProps {
    onTextChange?: (text: string) => void;
    onFilled?: (text: string) => void;
    autoFocus?: boolean;
    error?: string;
    numberOfDigits?: number;
    customStyles?: {
        containerStyle?: object;
        inputStyle?: object;
    };
}
