import { Theme } from '@/src/theme';
import THEME from '@/src/theme/Sizes.theme';
import { StyleSheet } from 'react-native';
import { verticalScale } from 'react-native-size-matters';

export const getStyles = (theme: Theme) =>
    StyleSheet.create({
        title: {
            ...THEME.fonts.body_16,
            lineHeight: verticalScale(22)
        },
        buttonContainer: {
            overflow: 'hidden',
            paddingBottom: 2
        },
        button: {
            textAlign: 'center',
            backgroundColor: theme.color.secondary,
            paddingVertical: verticalScale(3)
        }
    });
