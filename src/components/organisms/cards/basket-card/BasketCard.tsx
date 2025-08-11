import { useThemeAwareObject } from '@/src/theme';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { getStyles } from './BasketCard.styles';
import { IBasketCardProps } from './BasketCard.types';

const BasketCard: React.FC<IBasketCardProps> = ({ basket, onPress, containerStyle }) => {
    const styles = useThemeAwareObject(getStyles);

    const formatCurrency = (value: number): string => {
        if (value >= 10000000) {
            // 1 crore
            return `₹${(value / 10000000).toFixed(1)}Cr`;
        } else if (value >= 100000) {
            // 1 lakh
            return `₹${(value / 100000).toFixed(1)}L`;
        } else if (value >= 1000) {
            // 1 thousand
            return `₹${(value / 1000).toFixed(1)}K`;
        }
        return `₹${value.toFixed(0)}`;
    };

    const formatPercentage = (value: number): string => {
        const sign = value >= 0 ? '+' : '';
        return `${sign}${value.toFixed(2)}%`;
    };

    const getRiskStyles = (risk: string) => {
        const riskLower = risk.toLowerCase();
        if (riskLower.includes('low')) {
            return { badge: styles.lowRisk, text: styles.lowRiskText };
        } else if (riskLower.includes('medium') || riskLower.includes('moderate')) {
            return { badge: styles.mediumRisk, text: styles.mediumRiskText };
        } else {
            return { badge: styles.highRisk, text: styles.highRiskText };
        }
    };

    const renderChangeIndicator = (changePct: number) => {
        const isPositive = changePct >= 0;
        return (
            <View style={styles.changeContainer}>
                <Text style={[styles.changeIcon, isPositive ? styles.positiveChange : styles.negativeChange]}>
                    {isPositive ? '▲' : '▼'}
                </Text>
                <Text style={[styles.changeText, isPositive ? styles.positiveChange : styles.negativeChange]}>
                    {formatPercentage(changePct)}
                </Text>
            </View>
        );
    };

    const renderTopHoldings = () => {
        if (!basket.holdings || basket.holdings.length === 0) return null;

        const topHoldings = basket.holdings.slice(0, 3);
        const remainingCount = basket.holdings.length - topHoldings.length;

        return (
            <View style={styles.holdingsSection}>
                <Text style={styles.holdingsTitle}>Top Holdings</Text>
                <View style={styles.holdingsList}>
                    {topHoldings.map((holding, index) => (
                        <View key={index} style={styles.holdingChip}>
                            <Text style={styles.holdingText}>
                                {holding.symbol} ({holding.weight.toFixed(1)}%)
                            </Text>
                        </View>
                    ))}
                    {remainingCount > 0 && (
                        <View style={styles.holdingChip}>
                            <Text style={styles.moreText}>+{remainingCount} more</Text>
                        </View>
                    )}
                </View>
            </View>
        );
    };

    const riskStyles = getRiskStyles(basket.risk);

    const CardContent = (
        <View style={[styles.container, containerStyle]}>
            {/* Header Section */}
            <View style={styles.header}>
                <View style={styles.titleSection}>
                    <Text style={styles.basketName} numberOfLines={1}>
                        {basket.name}
                    </Text>
                    <Text style={styles.basketLabel} numberOfLines={1}>
                        {basket.label}
                    </Text>
                    <View style={[styles.riskBadge, riskStyles.badge]}>
                        <Text style={[styles.riskText, riskStyles.text]}>{basket.risk}</Text>
                    </View>
                </View>

                <View style={styles.valueSection}>
                    <Text style={styles.currentValue}>{formatCurrency(basket.currentValue)}</Text>
                    {renderChangeIndicator(basket.oneDayChangePct)}
                </View>
            </View>

            {/* Description */}
            {basket.description && (
                <Text style={styles.description} numberOfLines={2}>
                    {basket.description}
                </Text>
            )}

            {/* Holdings */}
            {renderTopHoldings()}
        </View>
    );

    if (onPress) {
        return (
            <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
                {CardContent}
            </TouchableOpacity>
        );
    }

    return CardContent;
};

export default BasketCard;
