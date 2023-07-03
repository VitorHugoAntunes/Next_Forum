import { createStitches } from '@stitches/react';

export const {
    config,
    styled,
    css,
    globalCss,
    keyframes,
    getCssText,
    theme,
    reset,
    createTheme,
} = createStitches({
})

export const lightTheme = createTheme('lightTheme', {
    colors: {
        background: '#FCFCFC',
        title: '#303030',
        text: '#ACACAC',
        input: '#F3F3F3',
        primary: '#FFFFFF',
        secondary: '#3D5AF1',
        tertiary: '#6D83F4',
        quaternary: '#B2BEF7',
        danger: '#ea0035',
        confirm: '#1abb95',
    },

    fontSizes: {
        md: '1.125rem',
        lg: '1.25rem',
        xl: '1.5rem',
        '2xl': '2rem',
    },
})

export const darkTheme = createTheme('darkTheme', {
    colors: {
        background: '#212121',
        title: '#ffffff',
        text: '#ACACAC',
        input: '#F3F3F3',
        primary: '#303030',
        secondary: '#3D5AF1',
        tertiary: '#6D83F4',
        quaternary: '#B2BEF7',
        danger: '#ea0035',
        confirm: '#1abb95',
    },

    fontSizes: {
        md: '1.125rem',
        lg: '1.25rem',
        xl: '1.5rem',
        '2xl': '2rem',
    },
})