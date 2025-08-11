import { useTheme } from '@/src/theme/Theme.context';
import React from 'react';
import { Text } from 'react-native';
import { getDescriptionStyles, IDescriptionProps, IDescriptionTypes } from './Description.types';

const Description: React.FC<IDescriptionProps> = ({
    customClassStyles,
    type = IDescriptionTypes.d16,
    content,
    ...textProps
}) => {
    const theme = useTheme();
    return (
        <Text style={[getDescriptionStyles(type, theme.theme), customClassStyles]} {...textProps}>
            {content}
        </Text>
    );
};

export default Description;
