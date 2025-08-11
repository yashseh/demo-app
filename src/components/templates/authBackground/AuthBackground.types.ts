import { StyleProp, ViewStyle } from 'react-native';

export interface IAuthBackgroundProps {
    children?: React.ReactNode;
    heading?: string;
    customTopContent?: React.ReactNode;
    hideBack?: boolean;
    hidePadding?: boolean;
    childrenStyles?: StyleProp<ViewStyle>;
    description?: string;
    hideBottom?: boolean;
    isInlineTitle?: boolean;
    headerRight?: () => React.ReactNode;
}
