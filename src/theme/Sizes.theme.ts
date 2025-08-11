import { moderateScale } from 'react-native-size-matters';

const THEME = {
    fonts: {
        fontFamily: {
            regular: 'Inter_400Regular',
            semiBold: 'Inter_600SemiBold',
            bold: 'Inter_700Bold'
        },
        heading_32: {
            fontSize: moderateScale(32, 0.3),
            fontFamily: 'Inter_700Bold'
        },
        heading_28: {
            fontSize: moderateScale(28, 0.3),
            fontFamily: 'Inter_700Bold'
        },
        heading_24: {
            fontSize: moderateScale(24, 0.3),
            fontFamily: 'Inter_700Bold'
        },
        heading_24_medium: {
            fontSize: moderateScale(24, 0.3),
            fontFamily: 'Inter_500Medium'
        },
        heading_20: {
            fontSize: moderateScale(20, 0.3),
            fontFamily: 'Inter_700Bold'
        },
        heading_18: {
            fontSize: moderateScale(18, 0.3),
            fontFamily: 'Inter_700Bold'
        },
        heading_16: {
            fontSize: moderateScale(16, 0.3),
            fontFamily: 'Inter_700Bold'
        },
        heading_14: {
            fontSize: moderateScale(14, 0.3),
            fontFamily: 'Inter_700Bold'
        },
        heading_12: {
            fontSize: moderateScale(12, 0.3),
            fontFamily: 'Inter_700Bold'
        },
        subheading_20: {
            fontSize: moderateScale(20, 0.3),
            fontFamily: 'Inter_600SemiBold'
        },

        body_24: {
            fontSize: moderateScale(24, 0.3),
            fontFamily: 'Inter_400Regular'
        },
        body_20: {
            fontSize: moderateScale(20, 0.3),
            fontFamily: 'Inter_400Regular'
        },
        body_16: {
            fontSize: moderateScale(16, 0.3),
            fontFamily: 'Inter_400Regular'
        },
        body_14: {
            fontSize: moderateScale(14, 0.3),
            fontFamily: 'Inter_400Regular'
        },
        body_12: {
            fontSize: moderateScale(12, 0.3),
            fontFamily: 'Inter_400Regular'
        },
        body_10: {
            fontSize: moderateScale(10, 0.3),
            fontFamily: 'Inter_400Regular'
        },

        label_14: {
            fontSize: moderateScale(14, 0.3),
            fontFamily: 'Inter_600SemiBold'
        },
        caption_12: {
            fontSize: moderateScale(12, 0.3),
            fontFamily: 'Inter_400Regular'
        }
    },

    spacing: {
        xs_4: moderateScale(4, 0.5),
        sm_8: moderateScale(8, 0.5),
        md_16: moderateScale(16, 0.5),
        md_20: moderateScale(20, 0.5),
        lg_24: moderateScale(24, 0.5),
        xl_32: moderateScale(32, 0.5)
    },

    padding: {
        horizontal: {
            xs_4: moderateScale(4, 0.5),
            sm_6: moderateScale(6, 0.5),
            sm_8: moderateScale(8, 0.5),
            sm_12: moderateScale(12, 0.5),
            md_16: moderateScale(16, 0.5),
            md_20: moderateScale(20, 0.5),
            lg_24: moderateScale(24, 0.5),
            xl_32: moderateScale(32, 0.5)
        },
        vertical: {
            xs_4: moderateScale(4, 0.5),
            xs_6: moderateScale(6, 0.5),
            sm_8: moderateScale(8, 0.5),
            sm_12: moderateScale(12, 0.5),
            md_16: moderateScale(16, 0.5),
            lg_24: moderateScale(24, 0.5),
            lg_30: moderateScale(30, 0.5),
            xl_32: moderateScale(32, 0.5)
        }
    },

    margin: {
        horizontal: {
            xs_4: moderateScale(4, 0.5),
            sm_8: moderateScale(8, 0.5),
            sm_12: moderateScale(12, 0.5),
            md_16: moderateScale(16, 0.5),
            md_20: moderateScale(20, 0.5),
            lg_24: moderateScale(24, 0.5),
            xl_32: moderateScale(32, 0.5),
            xxl_44: moderateScale(44, 0.5)
        },
        vertical: {
            xs_4: moderateScale(4, 0.5),
            sm_8: moderateScale(8, 0.5),
            sm_12: moderateScale(12, 0.5),
            md_16: moderateScale(16, 0.5),
            lg_24: moderateScale(24, 0.5),
            xl_32: moderateScale(32, 0.5)
        }
    },

    borderRadius: {
        sm_4: moderateScale(4, 0.5),
        md_8: moderateScale(8, 0.5),
        sm_12: moderateScale(12, 0.5),
        lg_16: moderateScale(16, 0.5),
        xl_24: moderateScale(24, 0.5)
    }
};

export default THEME;
