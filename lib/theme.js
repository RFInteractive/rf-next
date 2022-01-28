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
        highlight: lighten('#179CE6', 0.5),
        gradientDark: '#179CE6',
        gradientLight: '#8BCEF3',
        links: '#179CE6',
        iconPrimary: '#179CE6',
        iconSecondary: '#0ECD9D',
        iconTertiary: '#FF6006',
        linkPrimary: '#179CE6',
        linkSecondary: '#0ECD9D',
        linkTertiary: '#FF6006',
        alwaysLight: '#fff',
        dottedSquares: '#179CE6',
        btnPrimary: '#179CE6',
        btnSecondary: '#fff',
        modes: {
            deep: {
                text: '#fff',
                background: '#2F495E',
                primary: '#106EA2',
                gradientDark: '#2F495E',
                gradientLight: '#179CE6',
                links: '#FF6006',
                muted: lighten('#2F495E', 0.05),
                iconPrimary: '#106EA2',
                iconSecondary: '#106EA2',
                iconTertiary: '#106EA2',
                dottedSquares: '#fff',
            },
        },
    },
    styles: {
        root: {
            fontFamily: 'body',
            lineHeight: 'body',
            fontWeight: 'body',
            fontSize: 4,
            '& a': {
                color: 'links',

                '&:hover': {
                    color: '#106EA2',
                },
            },
            '& h1': {
                fontFamily: 'heading',
                lineHeight: 'heading',
                fontWeight: 'bold',
                fontSize: ['40px', '44px', '55px', '55px'],
            },
            '& h2': {
                fontFamily: 'heading',
                lineHeight: 'heading',
                fontWeight: 'bold',
                fontSize: ['30px', '36px', '40px', '44px'],
            },
            '& h3': {
                fontFamily: 'heading',
                lineHeight: 'heading',
                fontWeight: 'medium',
                fontSize: 6,
            },
            '& h4': {
                fontFamily: 'heading',
                lineHeight: 'heading',
                fontWeight: 'medium',
                fontSize: 5,
            },
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
            bg: 'btnPrimary',
            color: 'btnSecondary',
            border: '2px solid',
            borderColor: 'btnPrimary',
            '&:hover': {
                bg: 'btnSecondary',
                color: 'btnPrimary',
                border: '2px solid',
                borderColor: 'btnPrimary',
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
    wrappers: {
        blogWrapper: {
            '& h1, & h2, & h3, & h4, & p': {
                my: '20px',
            },
            '& img': {
                width: '100%',
                maxWidth: '900px',
                objectFit: 'cover',
                height: '100%',
                display: 'block',
                my: '35px',
                mx: 'auto',
            },
            '& table': {
                width: '95%',
            },
        },
    },
    navigation: {
        desktopNavWrapper: {
            '& .desktopNavLinkContainer': {
                position: 'relative',
                '&:hover .desktopNavDropdownContainer': {
                    visibility: 'visible',
                    opacity: '1',
                    top: '38px',
                    transition: 'all .15s',
                },
            },
            '& .desktopNavLink': {
                color: '#fff',
                fontSize: '18px',
                fontWeight: '500',
                padding: '12px 14px',
                '&:hover': {
                    textDecoration: 'underline',
                    textUnderlineOffset: '7px',
                    cursor: 'pointer',
                },
            },
            '& #navCTABtn': {
                variant: 'buttons.primary',
                justifySelf: 'end',
                px: '26px',
                py: '8px',
                fontSize: '18px',
                fontWeight: '500',
            },
        },
        desktopNavDropdownContainer: {
            position: 'absolute',
            top: '50px',
            left: '0',
            transform: 'translateX(-35%)',
            bg: 'muted',
            padding: '10px',
            borderRadius: '7px',
            visibility: 'hidden',
            opacity: '0',
            width: '425px',
            display: 'grid',
            gap: '2px',
        },
    },
};
