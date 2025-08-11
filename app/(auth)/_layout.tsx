import { Stack } from 'expo-router';
import React from 'react';

const AuthLayout = () => {
    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="signupOrlogin" />
            <Stack.Screen name="verifyOtp" />
        </Stack>
    );
};

export default AuthLayout;
