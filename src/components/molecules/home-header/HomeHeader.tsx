import { phoneFromSlice } from '@/src/state/slices/login/LoginSlice';
import { store, useAppSelector } from '@/src/state/Store';
import { useThemeAwareObject } from '@/src/theme';
import { DEFAULT_DARK_THEME_ID } from '@/src/theme/DefaultDark.theme';
import { useTheme } from '@/src/theme/Theme.context';
import { useRouter } from 'expo-router';
import React from 'react';
import { Alert, StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native';
import { Avatar, IconButton } from 'react-native-paper';

const HomeHeader = () => {
    const { theme, toggleTheme } = useTheme();
    const styles = useThemeAwareObject(getStyles);
    const router = useRouter();

    const phone = useAppSelector(phoneFromSlice);

    const handleLogout = () => {
        Alert.alert('Logout', 'Are you sure you want to logout?', [
            {
                text: 'Cancel',
                style: 'cancel'
            },
            {
                text: 'Logout',
                style: 'destructive',
                onPress: () => {
                    store.dispatch({ type: 'auth/logout' });
                    router.dismissAll();
                    router.replace('/(auth)/signupOrlogin');
                }
            }
        ]);
    };

    return (
        <View style={styles.container}>
            {/* User Avatar */}
            <TouchableOpacity style={styles.avatarContainer}>
                <Avatar.Icon
                    size={40}
                    icon="account"
                    style={[styles.avatar, { backgroundColor: theme.color.secondary }]}
                />
                <View style={styles.avatarTextContainer}>
                    <Text style={styles.avatarText}>John Doe</Text>
                    <Text style={styles.avatarText}>{phone}</Text>
                </View>
            </TouchableOpacity>

            {/* Theme Toggle Switch */}
            <View style={styles.themeToggleContainer}>
                <Text style={styles.themeLabel}>🌙</Text>
                <Switch
                    value={theme.id === DEFAULT_DARK_THEME_ID}
                    onValueChange={toggleTheme}
                    trackColor={{ false: theme.color.lightGrey, true: theme.color.secondary }}
                    thumbColor={theme.id === DEFAULT_DARK_THEME_ID ? theme.color.background : theme.color.primary}
                />
                <Text style={styles.themeLabel}>☀️</Text>
            </View>

            {/* Logout Button */}
            <TouchableOpacity style={styles.logoutContainer} onPress={handleLogout}>
                <IconButton icon="logout" size={24} iconColor={theme.color.secondary} style={styles.logoutButton} />
            </TouchableOpacity>
        </View>
    );
};

const getStyles = (theme: any) =>
    StyleSheet.create({
        container: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: theme.spacing?.md || 16,
            paddingVertical: theme.spacing?.sm || 8,
            backgroundColor: theme.color.primary
        },
        avatarContainer: {
            flexDirection: 'row',
            alignItems: 'flex-start'
        },
        avatar: {
            marginRight: theme.spacing?.xs || 4
        },
        logoutContainer: {
            flexDirection: 'row',
            alignItems: 'center'
        },
        avatarTextContainer: {
            flexDirection: 'column',
            marginLeft: theme.spacing?.xs || 4,
            alignItems: 'flex-start'
        },
        avatarText: {
            fontSize: theme.fontSize?.md,
            fontWeight: 'bold',
            color: theme.color.secondary
        },
        logoutButton: {
            margin: 0
        },
        themeToggleContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            gap: theme.spacing?.xs || 4
        },
        themeLabel: {
            fontSize: theme.fontSize?.md || 16,
            color: theme.color.secondary
        }
    });

export default HomeHeader;
