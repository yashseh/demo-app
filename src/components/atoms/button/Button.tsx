import { useThemeAwareObject } from '@/src/theme';
import { useTheme } from '@/src/theme/Theme.context';
import _ from 'lodash';
import React, { useCallback, useMemo } from 'react';
import { View } from 'react-native';
import { Button as PaperButton } from 'react-native-paper';
import { getStyles } from './Button.styles';
import { IButtonProps } from './Button.types';

const Button: React.FC<IButtonProps> = ({
    onPress,
    content,
    isDisabled,
    titleStyle,
    buttonWidth,
    customClassStyles,
    ...ButtonProps
}) => {
    const { theme } = useTheme();
    const styles = useThemeAwareObject(getStyles);

    const debouncedOnPress = useMemo(() => _.debounce((callback: () => void) => callback(), 200), []);

    const onPressHandler = useCallback(() => {
        if (!isDisabled && onPress) {
            debouncedOnPress(onPress);
        }
    }, [isDisabled, onPress, debouncedOnPress]);

    return (
        <View style={styles.buttonContainer}>
            <PaperButton
                onPress={onPressHandler}
                style={[styles.button, customClassStyles, { shadowColor: theme.color.background }]}
                disabled={ButtonProps.loading || isDisabled}
                mode={ButtonProps.mode ?? 'elevated'}
                textColor={ButtonProps.textColor ?? theme.color.background}
                labelStyle={[styles.title, titleStyle]}
                {...ButtonProps}
            >
                {content}
            </PaperButton>
        </View>
    );
};

export default Button;
