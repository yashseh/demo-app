import { useTheme } from '@/src/theme/Theme.context';
import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { IBlankLoaderWrapper } from './LoaderWrapper.types';

const BlankLoaderWrapper: React.FC<IBlankLoaderWrapper> = ({ children, isLoading }) => {
    const { theme } = useTheme();
    return (
        <View className="flex-1">
            {children}
            {isLoading && (
                <View className="absolute bg-white justify-center items-center  w-full h-full">
                    <ActivityIndicator color={theme.color.primary} size={'large'} />
                </View>
            )}
        </View>
    );
};

export default BlankLoaderWrapper;

const getStyles = () => StyleSheet.create({});
