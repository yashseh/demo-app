import { Theme } from '@/src/theme';
import THEME from '@/src/theme/Sizes.theme';
import { StyleSheet } from 'react-native';

export const getStyles = (theme: Theme) =>
    StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: theme.color.background
        },
        headerContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: THEME.spacing.lg_24,
            paddingVertical: THEME.spacing.sm_8
        },
        headerContent: {
            marginLeft: THEME.spacing.md_16,
            flex: 1
        },
        containerMain: {
            flex: 1,
            backgroundColor: theme.color.background
        },
        headerTitle: {
            color: theme.color.textBlack,
            fontWeight: '600'
        },
        headerSubtitle: {
            fontSize: 12,
            color: theme.color.primaryGrey,
            marginTop: THEME.spacing.xs_4
        },
        basketInfoContainer: {
            backgroundColor: theme.color.lightGrey,
            borderRadius: THEME.borderRadius.lg_16,
            padding: THEME.spacing.lg_24,
            marginBottom: THEME.spacing.lg_24
        },
        valueSection: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: THEME.spacing.md_16
        },
        currentValue: {
            fontSize: 32,
            fontWeight: '700',
            color: theme.color.textBlack
        },
        changeContainer: {
            alignItems: 'flex-end'
        },
        changeText: {
            fontSize: 16,
            fontWeight: '600'
        },
        positiveChange: {
            color: theme.color.green
        },
        negativeChange: {
            color: theme.color.red
        },
        riskContainer: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
        },
        riskLabel: {
            fontSize: 14,
            color: theme.color.primaryGrey,
            fontWeight: '500'
        },
        riskBadge: {
            paddingHorizontal: THEME.spacing.md_16,
            paddingVertical: THEME.spacing.sm_8,
            borderRadius: THEME.borderRadius.md_8
        },
        riskText: {
            fontSize: 12,
            fontWeight: '600'
        },
        chartContainer: {
            backgroundColor: theme.color.background,
            borderRadius: THEME.borderRadius.lg_16,
            padding: THEME.spacing.lg_24,
            marginBottom: THEME.spacing.lg_24,
            borderWidth: 1,
            borderColor: theme.color.lightGrey
        },
        chartTitle: {
            fontSize: 18,
            fontWeight: '600',
            color: theme.color.textBlack,
            marginBottom: THEME.spacing.md_16
        },
        periodSelector: {
            flexDirection: 'row',
            backgroundColor: theme.color.lightGrey,
            borderRadius: THEME.borderRadius.md_8,
            padding: THEME.spacing.xs_4,
            marginBottom: THEME.spacing.lg_24
        },
        periodButton: {
            flex: 1,
            paddingVertical: THEME.spacing.sm_8,
            alignItems: 'center',
            borderRadius: THEME.borderRadius.sm_4
        },
        periodButtonActive: {
            backgroundColor: theme.color.background,
            shadowColor: theme.color.textBlack,
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.1,
            shadowRadius: 2,
            elevation: 2
        },
        periodButtonText: {
            fontSize: 12,
            color: theme.color.primaryGrey,
            fontWeight: '500'
        },
        periodButtonTextActive: {
            color: theme.color.textBlack,
            fontWeight: '600'
        },
        chart: {
            borderRadius: THEME.borderRadius.md_8
        },
        chartLoadingContainer: {
            height: 200,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: theme.color.lightGrey,
            borderRadius: THEME.borderRadius.lg_16,
            marginBottom: THEME.spacing.lg_24
        },
        chartErrorContainer: {
            height: 200,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: theme.color.lightGrey,
            borderRadius: THEME.borderRadius.lg_16,
            marginBottom: THEME.spacing.lg_24
        },
        descriptionContainer: {
            backgroundColor: theme.color.lightGrey,
            borderRadius: THEME.borderRadius.lg_16,
            padding: THEME.spacing.lg_24,
            marginBottom: THEME.spacing.lg_24
        },
        descriptionTitle: {
            fontSize: 18,
            fontWeight: '600',
            color: theme.color.textBlack,
            marginBottom: THEME.spacing.md_16
        },
        descriptionText: {
            fontSize: 14,
            color: theme.color.primaryGrey,
            lineHeight: 22
        },
        holdingsContainer: {
            backgroundColor: theme.color.lightGrey,
            borderRadius: THEME.borderRadius.lg_16,
            padding: THEME.spacing.lg_24,
            marginBottom: THEME.spacing.lg_24
        },
        holdingsTitle: {
            fontSize: 18,
            fontWeight: '600',
            color: theme.color.textBlack,
            marginBottom: THEME.spacing.lg_24
        },
        holdingItem: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingVertical: THEME.spacing.md_16,
            borderBottomWidth: 1,
            borderBottomColor: theme.color.background
        },
        holdingLeft: {
            flex: 1
        },
        holdingSymbol: {
            fontSize: 16,
            fontWeight: '600',
            color: theme.color.textBlack
        },
        holdingName: {
            fontSize: 12,
            color: theme.color.primaryGrey,
            marginTop: THEME.spacing.xs_4
        },
        holdingRight: {
            alignItems: 'flex-end'
        },
        holdingWeight: {
            fontSize: 12,
            fontWeight: '600',
            color: theme.color.textBlack
        },
        holdingPrice: {
            fontSize: 12,
            color: theme.color.primaryGrey,
            marginTop: THEME.spacing.xs_4
        },
        holdingChange: {
            fontSize: 12,
            fontWeight: '500',
            marginTop: THEME.spacing.xs_4
        },
        loadingContainer: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        },
        loadingText: {
            fontSize: 14,
            color: theme.color.primaryGrey,
            marginTop: THEME.spacing.md_16
        },
        errorContainer: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: THEME.spacing.xl_32
        },
        errorTitle: {
            fontSize: 24,
            fontWeight: '600',
            color: theme.color.textBlack,
            marginBottom: THEME.spacing.md_16,
            textAlign: 'center'
        },
        errorText: {
            fontSize: 14,
            color: theme.color.primaryGrey,
            textAlign: 'center',
            marginBottom: THEME.spacing.xl_32
        },
        errorButton: {
            minWidth: 120
        },
        bottomSpacing: {
            height: THEME.spacing.xl_32
        }
    });
