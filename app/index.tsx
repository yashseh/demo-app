import { tokenFromSlice } from '@/src/state/slices/login/LoginSlice';
import { useAppSelector } from '@/src/state/Store';
import { Theme, useThemeAwareObject } from '@/src/theme';
import { useRouter } from 'expo-router';
import React, { useEffect } from 'react';
import { StyleSheet, Text } from 'react-native';
import Animated, { FadeIn } from 'react-native-reanimated';

const Splash = () => {
    const styles = useThemeAwareObject(getStyles);
    const router = useRouter();
    const token = useAppSelector(tokenFromSlice);

    useEffect(() => {
        setTimeout(() => {
            if (token) {
                router.replace('/home');
            } else {
                router.replace('/signupOrlogin');
            }
        }, 1000);
    }, []);

    return (
        <Animated.View entering={FadeIn} style={[styles.container]}>
            <Text style={styles.text}>Welcome to the Liquide</Text>
        </Animated.View>
    );
};

export default Splash;

const getStyles = (theme: Theme) => {
    return StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: theme.color.background
        },
        text: {
            color: theme.color.textBlack,
            fontSize: theme.fontSize?.xl,
            fontWeight: 'bold'
        }
    });
};
