import Description from '@/src/components/atoms/description/Description';
import { IDescriptionTypes } from '@/src/components/atoms/description/Description.types';
import Heading from '@/src/components/atoms/heading/Heading';
import { IHeadingTypes } from '@/src/components/atoms/heading/Heading.types';

import { useScreenInsets } from '@/src/hooks/useScreenInsets';
import THEME from '@/src/theme/Sizes.theme';
import { useTheme } from '@/src/theme/Theme.context';
import CustomSafeArea from '@/src/wrappers/customSafeArea/CustomSafeArea';
import React from 'react';
import { View } from 'react-native';
import BackButton from '../../atoms/backbutton/BackButton';
import { getStyles } from './AuthBackgorund.styles';
import { IAuthBackgroundProps } from './AuthBackground.types';

const AuthBackground: React.FC<IAuthBackgroundProps> = ({
    children,
    heading,
    customTopContent,
    description,
    hideBottom,
    hideBack,
    childrenStyles,
    hidePadding,
    headerRight
}) => {
    const { insetsBottom } = useScreenInsets();
    const { theme } = useTheme();

    const styles = getStyles(theme);

    return (
        <CustomSafeArea hideBottom customStyles={styles.safeAreaBackground}>
            <View
                pointerEvents="box-only"
                style={[styles.container, { paddingHorizontal: hidePadding ? 0 : THEME.padding.horizontal.lg_24 }]}
            >
                <View style={styles.headerContainer}>
                    <View style={styles.contentContainer}>
                        {!hideBack && <BackButton />}
                        <View>
                            <Heading type={IHeadingTypes.h24} content={heading} />
                            {description && <Description type={IDescriptionTypes.d16} content={description} />}
                        </View>
                    </View>

                    {headerRight && <View>{headerRight()}</View>}
                </View>
                {customTopContent && (
                    <>
                        <View style={styles.spacer} />
                        {customTopContent}
                    </>
                )}
            </View>
            <View style={[styles.childrenContainer, childrenStyles]}>
                {children}
                {!hideBottom && <View style={{ height: insetsBottom }} />}
            </View>
        </CustomSafeArea>
    );
};

export default AuthBackground;
