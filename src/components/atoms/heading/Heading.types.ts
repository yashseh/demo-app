import THEME from '@/src/theme/Sizes.theme';
import { Theme } from '@/src/theme/Theme.type';
import { StyleProp, TextStyle } from 'react-native';

export enum IHeadingTypes {
    h28 = 'h28',
    h24 = 'h24',
    h20 = 'h20',
    h18 = 'h18',
    h16 = 'h16',
    h14 = 'h14',
    h12 = 'h12'
}

export interface IHeadingProps {
    type?: IHeadingTypes;
    customClassStyles?: StyleProp<TextStyle>;
    content?: string;
    numberOfLines?: number;
    ellipsizeMode?: 'head' | 'middle' | 'tail' | 'clip';
    style?: StyleProp<TextStyle>;
}

export const getHeadingStyles = (type: IHeadingTypes, theme: Theme): TextStyle => {
    switch (type) {
        case IHeadingTypes.h28:
            return {
                fontWeight: 'bold',
                color: theme.color.textBlack,
                ...THEME.fonts.heading_28
            };
        case IHeadingTypes.h24:
            return {
                fontWeight: 'bold',
                color: theme.color.textBlack,
                ...THEME.fonts.heading_24
            };
        case IHeadingTypes.h20:
            return {
                fontWeight: 'bold',
                color: theme.color.textBlack,
                ...THEME.fonts.heading_20
            };
        case IHeadingTypes.h18:
            return {
                fontWeight: 'bold',
                color: theme.color.textBlack,
                ...THEME.fonts.heading_18
            };
        case IHeadingTypes.h16:
            return {
                fontWeight: 'bold',
                color: theme.color.textBlack,
                ...THEME.fonts.heading_16
            };
        case IHeadingTypes.h14:
            return {
                fontWeight: 'bold',
                color: theme.color.textBlack,
                ...THEME.fonts.heading_14
            };
        case IHeadingTypes.h12:
            return {
                fontWeight: 'bold',
                color: theme.color.textBlack,
                ...THEME.fonts.heading_12
            };
        default:
            return {
                fontWeight: 'bold',
                color: theme.color.textBlack,
                ...THEME.fonts.heading_28
            };
    }
};
