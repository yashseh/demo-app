import { Stack } from 'expo-router';
import React from 'react';

const HomeLayout = () => {
    return (
        <Stack>
            <Stack.Screen name="home" options={{ headerShown: false }} />
        </Stack>
    );
};

export default HomeLayout;
