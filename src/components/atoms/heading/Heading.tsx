import { useTheme } from '@/src/theme/Theme.context';
import React from 'react';
import { Text } from 'react-native';
import { getHeadingStyles, IHeadingProps, IHeadingTypes } from './Heading.types';

const Heading: React.FC<IHeadingProps> = ({
    customClassStyles,
    type = IHeadingTypes.h28,
    content,
    numberOfLines,
    ellipsizeMode = 'tail'
}) => {
    const theme = useTheme();
    return (
        <Text
            style={[getHeadingStyles(type, theme.theme), customClassStyles]}
            numberOfLines={numberOfLines}
            ellipsizeMode={ellipsizeMode}
        >
            {content}
        </Text>
    );
};

export default Heading;
