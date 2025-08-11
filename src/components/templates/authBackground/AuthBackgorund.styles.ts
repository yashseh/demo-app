import THEME from '@/src/theme/Sizes.theme';
import { Theme } from '@/src/theme/Theme.type';
import { StyleSheet } from 'react-native';

export const getStyles = (theme: Theme) =>
    StyleSheet.create({
        container: {
            paddingHorizontal: THEME.padding.horizontal.lg_24,
            paddingBottom: THEME.padding.vertical.md_16
        },
        childrenContainer: {
            flex: 1,
            backgroundColor: theme.color.background,
            paddingHorizontal: THEME.padding.horizontal.lg_24,
            borderTopLeftRadius: THEME.borderRadius.xl_24,
            paddingTop: THEME.padding.vertical.md_16
        },
        headerContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between'
        },
        contentContainer: {
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            position: 'relative',
            gap: 20
        },
        spacer: {
            height: 20
        },
        safeAreaBackground: {
            backgroundColor: theme.color.primary
        },
        searchBarContainer: {
            paddingVertical: THEME.padding.vertical.xs_4,
            flexDirection: 'row',
            borderRadius: THEME.borderRadius.sm_4,
            backgroundColor: theme.color.background,
            gap: THEME.spacing.sm_8,
            alignItems: 'center',
            justifyContent: 'space-between',
            position: 'absolute',
            width: '100%'
        }
    });
