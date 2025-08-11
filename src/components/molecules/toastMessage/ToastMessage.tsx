import { verticalScale, windowWidth } from '@/src/constants/metrics';
import { Theme, useThemeAwareObject } from '@/src/theme';
import THEME from '@/src/theme/Sizes.theme';
import { useTheme } from '@/src/theme/Theme.context';
import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { ToastType } from 'react-native-toast-notifications';
import { ToastProps } from 'react-native-toast-notifications/lib/typescript/toast';

type ICustomToastProps = {
    toast: ToastProps;
};

export const showToast = (
    toast: ToastType,
    message: string,
    type: 'success' | 'error' | 'warning' | 'info' | 'primary' | 'secondary'
) => {
    toast.hideAll();
    toast.show(message, {
        type: type
    });
};

const CustomToast: React.FC<ICustomToastProps> = ({ toast }) => {
    const theme = useTheme();
    const styles = useThemeAwareObject(createStyles);

    return (
        <View
            style={[
                styles.container,
                {
                    backgroundColor:
                        toast.type === 'success'
                            ? theme.theme.color.green
                            : toast.type === 'warning'
                            ? theme.theme.color.ratingYellow
                            : toast.type === 'info'
                            ? 'lightblue'
                            : toast.type === 'primary'
                            ? theme.theme.color.primary
                            : theme.theme.color.red
                }
            ]}
        >
            {toast.type === 'success' && (
                <View style={styles.leftView}>
                    <View style={styles.textView}>
                        <Text style={styles.title}>{toast.message}</Text>
                        {toast?.data?.subtitle && <Text style={styles.subTitle}>{toast?.data?.subtitle}</Text>}
                    </View>
                </View>
            )}
            {toast.type === 'error' && (
                <View style={styles.leftView}>
                    <View style={styles.textView}>
                        <Text style={styles.title}>Error</Text>
                        <Text style={styles.subTitle}>{toast.message}</Text>
                    </View>
                </View>
            )}
            {toast.type === 'primary' && (
                <View style={styles.leftView}>
                    <View style={styles.textView}>
                        <Text style={styles.title}>{toast.message}</Text>
                    </View>
                </View>
            )}
            {toast.type === 'warning' && (
                <View style={styles.leftView}>
                    <View style={styles.textView}>
                        <Text style={styles.titleBlack}>{toast.message}</Text>
                    </View>
                </View>
            )}
        </View>
    );
};

export default CustomToast;

const createStyles = (theme: Theme) =>
    StyleSheet.create({
        container: {
            minHeight: verticalScale(48),
            flexDirection: 'row',
            width: windowWidth - verticalScale(48),
            borderRadius: 8,
            paddingHorizontal: verticalScale(12),
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingVertical: verticalScale(7),
            ...Platform.select({
                ios: {
                    shadowColor: '#121212',
                    shadowOffset: { width: 0, height: 0 },
                    shadowOpacity: 0.24,
                    shadowRadius: 8
                },
                android: {
                    elevation: 12,
                    shadowOpacity: 0.24,
                    shadowRadius: 8
                }
            })
        },
        leftView: {
            flexDirection: 'row',
            alignItems: 'center'
        },
        textView: {
            marginLeft: verticalScale(12)
        },
        title: {
            color: theme.color.background,
            ...THEME.fonts.heading_14
        },
        titleBlack: {
            color: theme.color.textBlack
        },
        subTitle: {
            color: theme.color.background,
            ...THEME.fonts.body_14
        }
    });
