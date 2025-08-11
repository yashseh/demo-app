import { useTheme } from '@/src/theme/Theme.context';
import React, { forwardRef } from 'react';
import { Platform, StyleSheet, Text, TextStyle, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import { moderateScale } from 'react-native-size-matters';
import { IInputProps } from './Input.types';

const Input: React.FC<IInputProps> = forwardRef(({ errorMessage, customInputStyle, ...textInputProps }, ref) => {
    const { theme } = useTheme();
    return (
        <View>
            <TextInput
                ref={ref}
                label={textInputProps.label}
                mode={textInputProps.mode ?? 'outlined'}
                value={textInputProps.value}
                autoComplete="off"
                placeholderTextColor={theme.color.primary}
                outlineStyle={styles.outline}
                activeOutlineColor="#5B5B5B"
                style={[styles.input, customInputStyle as TextStyle]}
                error={errorMessage?.length ? true : false}
                onChangeText={textInputProps.onChangeText}
                {...textInputProps}
            />
            {errorMessage && <Text style={styles.errorText}>{errorMessage}</Text>}
        </View>
    );
});

Input.displayName = 'Input';

export default Input;

const styles = StyleSheet.create({
    input: {
        position: 'relative',
        backgroundColor: '#fff',
        width: '100%',
        borderRadius: 12,
        color: '#000',
        height: moderateScale(46),
        top: 0,
        left: 0,
        fontSize: moderateScale(14, 0.5),
        fontFamily: 'Inter_400Regular',
        ...Platform.select({
            ios: {},
            android: {
                lineHeight: moderateScale(20)
            }
        })
    },
    outline: {
        borderWidth: 1,
        borderRadius: 12
    },
    errorText: {
        fontSize: 10,
        color: 'red',
        marginLeft: 4,
        marginTop: 4
    }
});
