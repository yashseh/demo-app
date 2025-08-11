import { Animated, StyleProp, ViewStyle } from 'react-native';
import { TextStyle } from 'react-native';
import { ButtonProps } from 'react-native-paper';
export interface IButtonProps extends Omit<ButtonProps, 'children' | 'style'> {
    onPress: () => void;
    content?: string;
    titleStyle?: StyleProp<TextStyle>;
    customClassStyles?: StyleProp<ViewStyle>;
    isDisabled?: boolean;
    buttonWidth?:
        | number
        | Animated.Value
        | Animated.AnimatedInterpolation<string | number>
        | 'auto'
        | `${number}%`
        | Animated.WithAnimatedObject<Animated.AnimatedNode>
        | null
        | undefined;
}
