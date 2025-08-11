import { Theme, useThemeAwareObject } from '@/src/theme';
import { useRouter } from 'expo-router';
import React, { useEffect } from 'react';
import { StyleSheet, Text } from 'react-native';
import Animated, { FadeIn } from 'react-native-reanimated';

const Splash = () => {
    const styles = useThemeAwareObject(getStyles);
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('/signupOrlogin');
        }, 1000);
    }, [router]);

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
