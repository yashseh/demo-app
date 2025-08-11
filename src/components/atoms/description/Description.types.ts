import THEME from '@/src/theme/Sizes.theme';
import { Theme } from '@/src/theme/Theme.type';
import { StyleProp, TextProps, TextStyle } from 'react-native';

export enum IDescriptionTypes {
    d16 = 'd16',
    d14 = 'd14',
    d12 = 'd12',
    BODY_14 = 'BODY_14'
}

export interface IDescriptionProps extends TextProps {
    type?: IDescriptionTypes;
    customClassStyles?: StyleProp<TextStyle>;
    content?: string;
}

export const getDescriptionStyles = (type: IDescriptionTypes, theme: Theme): TextStyle => {
    switch (type) {
        case IDescriptionTypes.d16:
            return {
                color: theme.color.textBlack,
                ...THEME.fonts.body_16
            };
        case IDescriptionTypes.d14:
            return {
                color: theme.color.textBlack,
                ...THEME.fonts.body_14
            };
        case IDescriptionTypes.d12:
            return {
                color: theme.color.textBlack,
                ...THEME.fonts.body_12
            };
        default:
            return {
                color: theme.color.textBlack,
                ...THEME.fonts.body_16
            };
    }
};
