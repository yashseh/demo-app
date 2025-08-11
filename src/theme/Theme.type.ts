export interface ColorTheme {
    background: string;
    primary: string;
    primaryGrey: string;
    textBlack: string;
    secondary: string;
    lightGrey: string;
    green: string;
    ratingYellow: string;
    red: string;
}

export interface SpacingTheme {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
    xxl: number;
}

export interface BorderRadiusTheme {
    sm: number;
    md: number;
    lg: number;
    xl: number;
    full: number;
}

export interface FontSizeTheme {
    xs: number;
    sm: number;
    base: number;
    md: number;
    lg: number;
    xl: number;
    xxl: number;
}

export interface Theme {
    id: string;
    color: ColorTheme;
    spacing?: SpacingTheme;
    borderRadius?: BorderRadiusTheme;
    fontSize?: FontSizeTheme;
}
