import { StyleProp, ViewStyle } from 'react-native';
import { TextInputProps } from 'react-native-paper';

export interface IInputProps extends TextInputProps {
    errorMessage?: string;
    customInputStyle?: StyleProp<ViewStyle>;
}
