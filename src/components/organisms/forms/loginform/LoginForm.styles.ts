import { Theme } from '@/src/theme';
import { StyleSheet } from 'react-native';

export const getStyles = (theme: Theme) =>
    StyleSheet.create({
        container: {
            flex: 1
        },
        inputContainer: {
            flex: 1
        },
        phoneInputContainer: {
            flexDirection: 'row',
            alignItems: 'flex-start',
            gap: 8
        },
        prefixContainer: {
            backgroundColor: theme.color.background,
            borderWidth: 1,
            borderColor: '#5B5B5B',
            borderRadius: 12,
            paddingHorizontal: 12,
            paddingVertical: 16,
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: 46
        },
        prefixText: {
            fontSize: 14,
            color: theme.color.textBlack,
            fontWeight: '500'
        },
        phoneInput: {
            flex: 1
        }
    });
