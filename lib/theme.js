export const theme = {
    breakpoints: ['40em', '56.25em', '64em'],
    space: [
        0, 5, 8, 10, 15, 16, 20, 25, 32, 35, 40, 50, 75, 100, 125, 150, 200,
        400,
    ],
    fonts: {
        body: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
        heading: '"Inter", sans-serif',
        monospace: 'Menlo, monospace',
    },
    fontSizes: [12, 14, 16, 18, 20, 22, 28, 32, 36, 44, 60, 75],
    fontWeights: {
        body: 400,
        medium: 500,
        mediumBold: 600,
        heading: 700,
        bold: 700,
        black: 900,
    },
    lineHeights: {
        body: 1.6,
        heading: 1.2,
    },
    config: {
        initialColorModeName: 'light',
    },
    colors: {
        text: '#2F495E',
        background: '#fff',
        primary: '#179CE6', // light blue
        primaryDark: '#106EA2', // dark blue
        secondary: '#0ECD9D', // teal
        accent: '#FF6006', // orange
        highlight: '#179CE6', // light blue
        muted: '#f6f6f6',
        gradientDark: '#179CE6', // light blue
        gradientLight: '#8BCEF3', // super light blue
        alwaysLight: '#fff',
        modes: {
            dark: {
                text: '#eee',
                background: '#333',
                primary: '#333',
            },
            deep: {
                text: '#fff',
                background: '#2F495E',
                primary: '#106EA2',
            },
            orange: {
                text: '#fff',
                background: '#FF6006',
                primary: '#FF6006',
            },
        },
    },
    text: {
        h1: {
            fontFamily: 'heading',
            lineHeight: 'heading',
            fontWeight: 'black',
            fontSize: 10,
        },
        h2: {
            fontFamily: 'heading',
            lineHeight: 'heading',
            fontWeight: 'black',
            fontSize: 9,
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
};
