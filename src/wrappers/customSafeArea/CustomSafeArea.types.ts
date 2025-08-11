import { ViewStyle } from 'react-native';

export interface ICustomSafeAreaProps {
    children: React.ReactNode;
    withPadding?: boolean;

    customStyles?: ViewStyle;
    hideTop?: boolean;
    hideBottom?: boolean;
}
