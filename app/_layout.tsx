import { DEFAULT_LIGHT_THEME } from '@/src/theme';
import { ThemeProvider, useTheme } from '@/src/theme/Theme.context';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { DefaultTheme, PaperProvider } from 'react-native-paper';
import 'react-native-reanimated';

export default function RootLayout() {
    const [loaded] = useFonts({
        SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf')
    });

    const { theme } = useTheme();

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

    if (!loaded) {
        // Async font loading only occurs in development.
        return null;
    }

    return (
        <PaperProvider>
            <ThemeProvider initial={DEFAULT_LIGHT_THEME}>
                <Stack>
                    <Stack.Screen name="index" options={{ headerShown: false }} />
                    <Stack.Screen name="(auth)" options={{ headerShown: false }} />
                    <Stack.Screen name="+not-found" />
                </Stack>
                <StatusBar style="auto" />
            </ThemeProvider>
        </PaperProvider>
    );
}
