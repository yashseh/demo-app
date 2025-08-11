import Description from '@/src/components/atoms/description/Description';
import { IDescriptionTypes } from '@/src/components/atoms/description/Description.types';
import { loadingMessageFromSlice, loadingStateFromSlice } from '@/src/state/slices/loading/loadingSlice';
import THEME from '@/src/theme/Sizes.theme';
import { useTheme } from '@/src/theme/Theme.context';
import React, { useEffect } from 'react';
import { BackHandler, Platform, StyleSheet, View } from 'react-native';
import { ActivityIndicator, Portal } from 'react-native-paper';
import { useSelector } from 'react-redux';
import { ILoaderWrapperProps } from './LoaderWrapper.types';

const LoaderWrapper: React.FC<ILoaderWrapperProps> = ({ children }) => {
    const isLoading = useSelector(loadingStateFromSlice);
    const loadingMessage = useSelector(loadingMessageFromSlice);
    const { theme } = useTheme();

    // Disable hardware back button when loading
    useEffect(() => {
        let backHandler: any;
        if (isLoading) {
            backHandler = BackHandler.addEventListener('hardwareBackPress', () => true);
        }
        return () => {
            if (backHandler) {
                backHandler.remove();
            }
        };
    }, [isLoading]);

    return (
        <View style={styles.childrenContainer}>
            <View style={styles.childrenContainer} pointerEvents={isLoading ? 'none' : 'auto'}>
                {children}
            </View>
            {isLoading && (
                <Portal>
                    <View style={styles.loaderBlackOverlay}>
                        {loadingMessage ? (
                            <View style={styles.loaderWhiteContainerView}>
                                <ActivityIndicator color={theme.color.primary} size={'small'} />
                                <Description type={IDescriptionTypes.d16} content={loadingMessage} />
                            </View>
                        ) : (
                            <ActivityIndicator color={theme.color.primary} size={'large'} />
                        )}
                    </View>
                </Portal>
            )}
        </View>
    );
};

export default LoaderWrapper;

export const styles = StyleSheet.create({
    childrenContainer: {
        flex: 1
    },
    loaderBlackOverlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999,
        ...(Platform.OS === 'android' && { elevation: 9999 }),
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    },

    loaderWhiteContainerView: {
        borderRadius: 4,
        gap: THEME.padding.horizontal.sm_8,
        padding: THEME.padding.horizontal.lg_24,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255,255,255,1)'
    }
});
