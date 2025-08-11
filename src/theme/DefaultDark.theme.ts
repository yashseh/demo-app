import { ColorTheme, Theme } from './Theme.type';

const DEFAULT_DARK_COLOR_THEME: ColorTheme = {
    background: '#000000',
    primary: '#1F324D',
    secondary: '#3B8EF6',
    primaryGrey: '#5B5B5B',
    textBlack: '#FFFFFF',
    lightGrey: '#FAFAFC'
};

export const DEFAULT_DARK_THEME_ID = 'default-dark';

export const DEFAULT_DARK_THEME: Theme = {
    id: DEFAULT_DARK_THEME_ID,
    color: DEFAULT_DARK_COLOR_THEME,

    // Spacing scale (in pixels)
    spacing: {
        xs: 4,
        sm: 8,
        md: 16,
        lg: 24,
        xl: 32,
        xxl: 48
    },

    // Border Radius scale
    borderRadius: {
        sm: 4,
        md: 8,
        lg: 12,
        xl: 16,
        full: 9999
    },

    // Font Sizes scale
    fontSize: {
        xs: 10,
        sm: 12,
        base: 14,
        md: 16,
        lg: 18,
        xl: 24,
        xxl: 32
    }
};
