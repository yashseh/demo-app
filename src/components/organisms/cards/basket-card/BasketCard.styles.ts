import { Theme } from '@/src/theme/Theme.type';
import { StyleSheet } from 'react-native';

export const getStyles = (theme: Theme) => {
    return StyleSheet.create({
        container: {
            backgroundColor: theme.color.background,
            borderRadius: theme.borderRadius.lg,
            padding: theme.spacing.md,
            marginVertical: theme.spacing.sm,
            marginHorizontal: theme.spacing.md,
            shadowColor: theme.color.primary,
            shadowOffset: {
                width: 0,
                height: 2
            },
            shadowOpacity: 0.1,
            shadowRadius: 4,
            elevation: 3,
            borderWidth: 1,
            borderColor: theme.color.lightGrey
        },
        header: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            marginBottom: theme.spacing.sm
        },
        titleSection: {
            flex: 1,
            marginRight: theme.spacing.sm
        },
        basketName: {
            fontSize: theme.fontSize.lg,
            fontWeight: '600',
            color: theme.color.textBlack,
            marginBottom: theme.spacing.xs
        },
        basketLabel: {
            fontSize: theme.fontSize.sm,
            color: theme.color.primaryGrey,
            marginBottom: theme.spacing.xs
        },
        riskBadge: {
            paddingHorizontal: theme.spacing.sm,
            paddingVertical: theme.spacing.xs,
            borderRadius: theme.borderRadius.sm,
            alignSelf: 'flex-start'
        },
        riskText: {
            fontSize: theme.fontSize.xs,
            fontWeight: '500',
            textTransform: 'uppercase'
        },
        lowRisk: {
            backgroundColor: '#E8F5E8'
        },
        lowRiskText: {
            color: '#2E7D32'
        },
        mediumRisk: {
            backgroundColor: '#FFF3E0'
        },
        mediumRiskText: {
            color: '#F57C00'
        },
        highRisk: {
            backgroundColor: '#FFEBEE'
        },
        highRiskText: {
            color: '#D32F2F'
        },
        valueSection: {
            alignItems: 'flex-end'
        },
        currentValue: {
            fontSize: theme.fontSize.xl,
            fontWeight: '700',
            color: theme.color.textBlack
        },
        changeContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: theme.spacing.xs
        },
        changeText: {
            fontSize: theme.fontSize.sm,
            fontWeight: '500',
            marginLeft: theme.spacing.xs
        },
        positiveChange: {
            color: theme.color.green
        },
        negativeChange: {
            color: theme.color.red
        },
        description: {
            fontSize: theme.fontSize.base,
            color: theme.color.primaryGrey,
            lineHeight: 20,
            marginBottom: theme.spacing.md
        },
        holdingsSection: {
            marginTop: theme.spacing.sm
        },
        holdingsTitle: {
            fontSize: theme.fontSize.base,
            fontWeight: '600',
            color: theme.color.textBlack,
            marginBottom: theme.spacing.sm
        },
        holdingsList: {
            flexDirection: 'row',
            flexWrap: 'wrap',
            gap: theme.spacing.xs
        },
        holdingChip: {
            backgroundColor: theme.color.lightGrey,
            paddingHorizontal: theme.spacing.sm,
            paddingVertical: theme.spacing.xs,
            borderRadius: theme.borderRadius.full,
            marginRight: theme.spacing.xs,
            marginBottom: theme.spacing.xs
        },
        holdingText: {
            fontSize: theme.fontSize.sm,
            color: theme.color.primary,
            fontWeight: '500'
        },
        moreText: {
            fontSize: theme.fontSize.sm,
            color: theme.color.secondary,
            fontWeight: '500'
        },
        changeIcon: {
            fontSize: 12
        }
    });
};
