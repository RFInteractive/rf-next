import { lighten } from '@theme-ui/color';

export const theme = {
    breakpoints: ['784px', '1062px', '1618px', '2400px'],
    space: [null],
    fonts: {
        body: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
        heading: `'Poppins', sans-serif`,
    },
    fontSizes: [12, 14, 16, 18, 20, 22, 28, 32, 36, 44, 55, 75],
    fontWeights: {
        body: 400,
        medium: 500,
        mediumBold: 600,
        heading: 700,
        bold: 700,
    },
    lineHeights: {
        body: 1.6,
        heading: 1.1,
    },
    config: {
        initialColorModeName: 'light',
    },
    colors: {
        text: '#2F495E',
        background: '#fff',
        muted: '#fafafa',
        primary: '#179CE6',
        primaryDark: '#106EA2',
        secondary: '#0ECD9D',
        accent: '#FF6006',
        highlight: '#179CE6',
        gradientDark: '#179CE6',
        gradientLight: '#8BCEF3',
        iconPrimary: '#179CE6',
        iconSecondary: '#0ECD9D',
        iconTertiary: '#FF6006',
        linkPrimary: '#179CE6',
        linkSecondary: '#0ECD9D',
        linkTertiary: '#FF6006',
        alwaysLight: '#fff',
        dottedSquares: '#179CE6',
        modes: {
            black: {
                text: '#eee',
                background: '#333',
                primary: '#333',
                gradientDark: '#333',
                gradientLight: '#bbb',
                muted: '#555',
                iconPrimary: '#333',
                iconSecondary: '#333',
                iconTertiary: '#333',
                dottedSquares: '#fff',
            },
            deep: {
                text: '#fff',
                background: '#2F495E',
                primary: '#106EA2',
                gradientDark: '#2F495E',
                gradientLight: '#179CE6',
                muted: lighten('#2F495E', 0.15),
                iconPrimary: '#106EA2',
                iconSecondary: '#106EA2',
                iconTertiary: '#106EA2',
                dottedSquares: '#fff',
            },
            orange: {
                text: '#fff',
                background: '#FF6006',
                primary: '#FF6006',
                gradientDark: '#333',
                gradientLight: '#bbb',
            },
        },
    },
    text: {
        h1: {
            fontFamily: 'heading',
            lineHeight: 'heading',
            fontWeight: 'bold',
            fontSize: ['44px', '44px', '55px', '55px'],
        },
        h2: {
            fontFamily: 'heading',
            lineHeight: 'heading',
            fontWeight: 'bold',
            fontSize: ['36px', '36px', '44px', '44px'],
        },
        h3: {
            fontFamily: 'heading',
            lineHeight: 'heading',
            fontWeight: 'medium',
            fontSize: 6,
        },
        h4: {
            fontFamily: 'heading',
            lineHeight: 'heading',
            fontWeight: 'medium',
            fontSize: 5,
        },
    },
    styles: {
        root: {
            fontFamily: 'body',
            lineHeight: 'body',
            fontWeight: 'body',
            fontSize: 4,
        },
        h1: {
            variant: 'text.h1',
        },
        h2: {
            variant: 'text.h2',
        },
        h3: {
            variant: 'text.h3',
            fontSize: 3,
        },
        h4: {
            variant: 'text.h4',
            fontSize: 2,
        },
        pre: {
            fontFamily: 'monospace',
            overflowX: 'auto',
            code: {
                color: 'inherit',
            },
        },
        code: {
            fontFamily: 'monospace',
            fontSize: 'inherit',
        },
        table: {
            width: '100%',
            borderCollapse: 'separate',
            borderSpacing: 0,
        },
        th: {
            textAlign: 'left',
            borderBottomStyle: 'solid',
        },
        td: {
            textAlign: 'left',
            borderBottomStyle: 'solid',
        },
        themeColorPalette: {
            width: '100%',
            height: '200px',
            borderRadius: '50%',
        },
    },
    buttons: {
        baseStyles: {
            px: '35px',
            py: '10px',
            borderRadius: 5,
            cursor: 'pointer',
            transition: 'all 0.15s ease-out',
        },
        primary: {
            variant: 'buttons.baseStyles',
            bg: 'primary',
            color: 'background',
            '&:hover': {
                bg: 'accent',
                transform: 'scale(1.02)',
            },
        },
        light: {
            variant: 'buttons.baseStyles',
            bg: '#fff',
            color: 'primaryDark',
            '&:hover': {
                bg: 'primary',
                color: '#fff',
                transform: 'scale(1.02)',
            },
        },
    },
    layouts: {
        twoColumnContainedGrid: {
            display: 'grid',
            gridTemplateColumns:
                'minmax(25px, 1fr) repeat(2, minmax(0, 620px)) minmax(25px, 1fr)',
            alignItems: 'center',
        },
    },
    links: {
        navLink: {
            color: '#fff',
            p: '10px 15px',
            '&:hover': {
                color: '#fff',
                cursor: 'pointer',
                textDecoration: 'underline',
                textUnderlineOffset: '10px',
            },
        },
    },
};
