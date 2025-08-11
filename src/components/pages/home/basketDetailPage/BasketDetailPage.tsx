import BackButton from '@/src/components/atoms/backbutton/BackButton';
import Button from '@/src/components/atoms/button/Button';
import Heading from '@/src/components/atoms/heading/Heading';
import { IHeadingTypes } from '@/src/components/atoms/heading/Heading.types';
import SubscribeBasketBottomSheet from '@/src/components/organisms/bottom-sheets/subscribebasket-bottomsheet/SubscribeBasketBottomSheet';
import { useGetBasketChartDetailsQuery, useGetBasketDetailQuery } from '@/src/state/slices/user/UserApi';
import { useThemeAwareObject } from '@/src/theme';
import { useTheme } from '@/src/theme/Theme.context';
import CustomSafeArea from '@/src/wrappers/customSafeArea/CustomSafeArea';
import BottomSheet from '@gorhom/bottom-sheet';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useRef, useState } from 'react';
import { ActivityIndicator, Dimensions, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { getStyles } from './BasketDetailPage.styles';

const { width: screenWidth } = Dimensions.get('window');

type PeriodType = '1w' | '1m' | '6m' | '1y';

const BasketDetailPage = () => {
    const { id } = useLocalSearchParams();
    const router = useRouter();
    const { theme } = useTheme();
    const subscribeBasketBottomSheetRef = useRef<BottomSheet>(null);
    const styles = useThemeAwareObject(getStyles);
    const [selectedPeriod, setSelectedPeriod] = useState<PeriodType>('1w');

    const {
        data: basketDetail,
        isLoading: isLoadingDetail,
        error: detailError
    } = useGetBasketDetailQuery({ id: id as string });
    const {
        data: basketChartDetails,
        isLoading: isLoadingChart,
        error: chartError
    } = useGetBasketChartDetailsQuery({
        id: id as string,
        period: selectedPeriod
    });

    const basket = basketDetail?.data?.[0];
    const chartData = basketChartDetails?.data || [];

    const formatCurrency = (value: number): string => {
        if (value >= 10000000) {
            return `₹${(value / 10000000).toFixed(1)}Cr`;
        } else if (value >= 100000) {
            return `₹${(value / 100000).toFixed(1)}L`;
        } else if (value >= 1000) {
            return `₹${(value / 1000).toFixed(1)}K`;
        }
        return `₹${value.toFixed(0)}`;
    };

    const formatPercentage = (value: number): string => {
        const sign = value >= 0 ? '+' : '';
        return `${sign}${value.toFixed(2)}%`;
    };

    const getRiskColor = (risk: string) => {
        const riskLower = risk?.toLowerCase();
        if (riskLower?.includes('low')) {
            return theme.color.green;
        } else if (riskLower?.includes('medium') || riskLower?.includes('moderate')) {
            return '#FFA500';
        } else {
            return theme.color.red;
        }
    };

    const prepareChartData = () => {
        if (!chartData.length) return null;

        const values = chartData.map((point) => point.value);
        const labels = chartData
            .map((point, index) => {
                if (index % Math.ceil(chartData.length / 4) === 0) {
                    const date = new Date(point.timestamp * 1000);
                    return `${date.getDate()}/${date.getMonth() + 1}`;
                }
                return '';
            })
            .filter((label) => label !== '');

        return {
            labels,
            datasets: [
                {
                    data: values,
                    color: (opacity = 1) => theme.color.secondary,
                    strokeWidth: 2
                }
            ]
        };
    };

    const chartConfig = {
        backgroundGradientFrom: theme.color.background,
        backgroundGradientTo: theme.color.background,
        color: (opacity = 1) => theme.color.secondary,
        strokeWidth: 2,
        barPercentage: 0.5,
        useShadowColorFromDataset: false,
        decimalPlaces: 0,
        propsForLabels: {
            fontSize: 12,
            fontWeight: '400',
            fill: theme.color.primaryGrey
        },
        propsForBackgroundLines: {
            strokeDasharray: '',
            stroke: theme.color.lightGrey,
            strokeWidth: 1
        }
    };

    const periodOptions: PeriodType[] = ['1w', '1m', '6m', '1y'];

    const renderPeriodSelector = () => (
        <View style={styles.periodSelector}>
            {periodOptions.map((period) => (
                <TouchableOpacity
                    key={period}
                    style={[styles.periodButton, selectedPeriod === period && styles.periodButtonActive]}
                    onPress={() => setSelectedPeriod(period)}
                >
                    <Text style={[styles.periodButtonText, selectedPeriod === period && styles.periodButtonTextActive]}>
                        {period}
                    </Text>
                </TouchableOpacity>
            ))}
        </View>
    );

    const renderHeader = () => (
        <View style={styles.headerContainer}>
            <BackButton onPressBack={() => router.back()} />
            <View style={styles.headerContent}>
                <Heading
                    type={IHeadingTypes.h20}
                    content={basket?.name || 'Basket Details'}
                    numberOfLines={1}
                    customClassStyles={styles.headerTitle}
                />
                <Text style={styles.headerSubtitle}>{basket?.label}</Text>
            </View>
        </View>
    );

    const renderBasketInfo = () => (
        <View style={styles.basketInfoContainer}>
            <View style={styles.valueSection}>
                <Text style={styles.currentValue}>{formatCurrency(basket?.currentValue || 0)}</Text>
                <View style={styles.changeContainer}>
                    <Text
                        style={[
                            styles.changeText,
                            (basket?.oneDayChangePct || 0) >= 0 ? styles.positiveChange : styles.negativeChange
                        ]}
                    >
                        {(basket?.oneDayChangePct || 0) >= 0 ? '▲' : '▼'}{' '}
                        {formatPercentage(basket?.oneDayChangePct || 0)}
                    </Text>
                </View>
            </View>

            <View style={styles.riskContainer}>
                <Text style={styles.riskLabel}>Risk Level</Text>
                <View style={[styles.riskBadge, { backgroundColor: getRiskColor(basket?.risk || '') + '20' }]}>
                    <Text style={[styles.riskText, { color: getRiskColor(basket?.risk || '') }]}>{basket?.risk}</Text>
                </View>
            </View>
        </View>
    );

    const renderChart = () => {
        if (isLoadingChart) {
            return (
                <View style={styles.chartLoadingContainer}>
                    <ActivityIndicator size="large" color={theme.color.secondary} />
                    <Text style={styles.loadingText}>Loading chart...</Text>
                </View>
            );
        }

        if (chartError || !chartData.length) {
            return (
                <View style={styles.chartErrorContainer}>
                    <Text style={styles.errorText}>Unable to load chart data</Text>
                </View>
            );
        }

        const chartDataFormatted = prepareChartData();
        if (!chartDataFormatted) return null;

        return (
            <View style={styles.chartContainer}>
                <Text style={styles.chartTitle}>Performance Chart</Text>
                {renderPeriodSelector()}
                <LineChart
                    data={chartDataFormatted}
                    width={screenWidth - 40}
                    height={220}
                    chartConfig={chartConfig}
                    bezier
                    style={styles.chart}
                />
            </View>
        );
    };

    const renderHoldings = () => {
        if (!basket?.holdings?.length) return null;

        return (
            <View style={styles.holdingsContainer}>
                <Text style={styles.holdingsTitle}>Holdings ({basket.holdings.length})</Text>
                {basket.holdings.map((holding, index) => (
                    <View key={index} style={styles.holdingItem}>
                        <View style={styles.holdingLeft}>
                            <Text style={styles.holdingSymbol}>{holding.symbol}</Text>
                            <Text style={styles.holdingName} numberOfLines={1}>
                                {holding.name}
                            </Text>
                        </View>
                        <View style={styles.holdingRight}>
                            <Text style={styles.holdingWeight}>{holding.weight.toFixed(1)}%</Text>
                            <Text style={styles.holdingPrice}>₹{holding.price.toFixed(2)}</Text>
                            <Text
                                style={[
                                    styles.holdingChange,
                                    holding.changePct >= 0 ? styles.positiveChange : styles.negativeChange
                                ]}
                            >
                                {formatPercentage(holding.changePct)}
                            </Text>
                        </View>
                    </View>
                ))}
            </View>
        );
    };

    const renderDescription = () => {
        if (!basket?.description) return null;

        return (
            <View style={styles.descriptionContainer}>
                <Text style={styles.descriptionTitle}>About this Basket</Text>
                <Text style={styles.descriptionText}>{basket.description}</Text>
            </View>
        );
    };

    if (isLoadingDetail) {
        return (
            <CustomSafeArea withPadding>
                <View style={styles.loadingContainer}>
                    <ActivityIndicator size="large" color={theme.color.secondary} />
                    <Text style={styles.loadingText}>Loading basket details...</Text>
                </View>
            </CustomSafeArea>
        );
    }

    if (detailError || !basket) {
        return (
            <CustomSafeArea withPadding>
                <View style={styles.errorContainer}>
                    <Text style={styles.errorTitle}>Error Loading Basket</Text>
                    <Text style={styles.errorText}>Unable to load basket details. Please try again.</Text>
                    <Button content="Go Back" onPress={() => router.back()} customClassStyles={styles.errorButton} />
                </View>
            </CustomSafeArea>
        );
    }

    return (
        <CustomSafeArea customStyles={styles.containerMain} withPadding>
            <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
                {renderHeader()}
                {renderBasketInfo()}
                {renderChart()}
                {renderDescription()}
                {renderHoldings()}
                <View style={styles.bottomSpacing} />
            </ScrollView>
            <Button content="Subscribe" onPress={() => subscribeBasketBottomSheetRef.current?.expand()} />
            <SubscribeBasketBottomSheet ref={subscribeBasketBottomSheetRef} />
        </CustomSafeArea>
    );
};

export default BasketDetailPage;
