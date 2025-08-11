import { Theme } from '@/src/theme';
import { StyleSheet } from 'react-native';

export const getStyles = (theme: Theme) =>
    StyleSheet.create({
        container: {
            flex: 1,
            borderTopLeftRadius: theme.borderRadius?.lg,
            borderTopRightRadius: theme.borderRadius?.lg,
            marginTop: theme.spacing?.md,
            padding: theme.spacing?.md,
            backgroundColor: theme.color.background
        }
    });
