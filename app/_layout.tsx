import CustomToast from '@/src/components/molecules/toastMessage/ToastMessage';
import { useScreenInsets } from '@/src/hooks/useScreenInsets';
import { persistor, store } from '@/src/state/Store';
import { DEFAULT_LIGHT_THEME } from '@/src/theme';
import { ThemeProvider, useTheme } from '@/src/theme/Theme.context';
import LoaderWrapper from '@/src/wrappers/loaderWrapper/LoaderWrapper';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Platform } from 'react-native';
import { DefaultTheme, PaperProvider } from 'react-native-paper';
import 'react-native-reanimated';
import { ToastProvider } from 'react-native-toast-notifications';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

// Separate component to use theme inside the provider
function ThemedApp() {
    const { theme } = useTheme();
    const { insetsTop } = useScreenInsets();

    const paperTheme = {
        ...DefaultTheme,
        colors: {
            ...DefaultTheme.colors,
            primaryContainer: theme.color.primary,
            secondaryContainer: theme.color.primary,
            primary: theme.color.primary,
            accent: theme.color.primary,
            background: theme.color.background,

            elevation: {
                level0: 'transparent',
                level1: theme.color.primary,
                level2: theme.color.primary,
                level3: theme.color.primary,
                level4: theme.color.primary,
                level5: theme.color.primary
            }
        }
    };

    return (
        <PaperProvider theme={paperTheme}>
            <LoaderWrapper>
                <ToastProvider
                    renderToast={(toast) => <CustomToast toast={toast} />}
                    placement="top"
                    duration={3000}
                    offset={Platform.OS === 'android' ? insetsTop : 0}
                    animationType="slide-in"
                    swipeEnabled
                >
                    <Stack screenOptions={{ headerShown: false }}>
                        <Stack.Screen name="index" options={{ headerShown: false }} />
                        <Stack.Screen name="(home)" options={{ headerShown: false }} />
                        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
                        <Stack.Screen name="+not-found" />
                    </Stack>
                    <StatusBar style="auto" />
                </ToastProvider>
            </LoaderWrapper>
        </PaperProvider>
    );
}

export default function RootLayout() {
    const [loaded] = useFonts({
        SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf')
    });

    if (!loaded) {
        // Async font loading only occurs in development.
        return null;
    }

    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <ThemeProvider initial={DEFAULT_LIGHT_THEME}>
                    <ThemedApp />
                </ThemeProvider>
            </PersistGate>
        </Provider>
    );
}
