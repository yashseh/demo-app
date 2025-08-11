import { useScreenInsets } from '@/src/hooks/useScreenInsets';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ICustomSafeAreaProps } from './CustomSafeArea.types';

import THEME from '@/src/theme/Sizes.theme';

const CustomSafeArea: React.FC<ICustomSafeAreaProps> = ({
    children,
    withPadding,
    customClassStyles = 'bg-white',
    customStyles,
    hideTop,
    hideBottom
}) => {
    const { insetsTop, insetsBottom } = useScreenInsets();
    const styles = getStyles(hideTop ? 0 : insetsTop, hideBottom ? 0 : insetsBottom, withPadding);
    return <View style={[styles.container, customStyles]}>{children}</View>;
};

export default CustomSafeArea;

const getStyles = (insetsTop: number, insetsBottom: number, withPadding?: boolean) => {
    const styles = StyleSheet.create({
        container: {
            paddingTop: insetsTop,
            paddingBottom: insetsBottom,
            flex: 1,
            paddingHorizontal: withPadding ? THEME.padding.horizontal.md_20 : 0
        }
    });
    return styles;
};
