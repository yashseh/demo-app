import HomeHeader from '@/src/components/molecules/home-header/HomeHeader';
import { useThemeAwareObject } from '@/src/theme';
import { useTheme } from '@/src/theme/Theme.context';
import CustomSafeArea from '@/src/wrappers/customSafeArea/CustomSafeArea';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { getStyles } from './HomePage.styles';

const HomePage = () => {
    const { theme } = useTheme();
    const styles = useThemeAwareObject(getStyles);
    return (
        <CustomSafeArea hideBottom customStyles={{ backgroundColor: theme.color.primary }}>
            <HomeHeader />
            <View style={styles.container}>
                <Text>HomePage</Text>
            </View>
        </CustomSafeArea>
    );
};

export default HomePage;

const styles = StyleSheet.create({});
