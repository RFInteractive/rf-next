/** @jsxImportSource theme-ui */
import { useThemeUI, Button, Grid } from 'theme-ui';

import AppHeader from '../components/sections/AppHeader';

const ThemePage = () => {
    const { theme, setColorMode } = useThemeUI();

    return (
        <>
            <AppHeader
                type={'small'}
                leftColumnContent={
                    <h1
                        sx={{
                            variant: 'text.h1',
                            color: '#fff',
                            paddingTop: ['80px', '50px', '0px', '0px'],
                        }}
                    >
                        Application Theme
                    </h1>
                }
            />
            <section sx={{ margin: '0 auto', maxWidth: '1000px' }}>
                <Grid
                    columns={[2, 3, 5]}
                    sx={{
                        maxWidth: '1000px',
                        div: {
                            width: '100%',
                        },
                    }}
                >
                    <div>
                        <div
                            sx={{
                                variant: 'styles.themeColorPalette',
                                bg: 'text',
                            }}
                        ></div>
                        <h3 sx={{ variant: 'text.h3', textAlign: 'center' }}>
                            Text
                        </h3>
                    </div>
                    <div>
                        <div
                            sx={{
                                variant: 'styles.themeColorPalette',
                                bg: 'primary',
                            }}
                        ></div>
                        <h3 sx={{ variant: 'text.h3', textAlign: 'center' }}>
                            Primary
                        </h3>
                    </div>
                    <div>
                        <div
                            sx={{
                                variant: 'styles.themeColorPalette',
                                bg: 'primaryDark',
                            }}
                        ></div>
                        <h3 sx={{ variant: 'text.h3', textAlign: 'center' }}>
                            Primary Dark
                        </h3>
                    </div>
                    <div>
                        <div
                            sx={{
                                variant: 'styles.themeColorPalette',
                                bg: 'secondary',
                            }}
                        ></div>
                        <h3 sx={{ variant: 'text.h3', textAlign: 'center' }}>
                            Secondary
                        </h3>
                    </div>
                    <div>
                        <div
                            sx={{
                                variant: 'styles.themeColorPalette',
                                bg: 'accent',
                            }}
                        ></div>
                        <h3 sx={{ variant: 'text.h3', textAlign: 'center' }}>
                            Accent
                        </h3>
                    </div>
                </Grid>
                <h1 sx={{ variant: 'text.h1', my: 5 }}>h1 - Primary</h1>
                <h2 sx={{ variant: 'text.h2', my: 5 }}>
                    h2 - Secondary Heading
                </h2>
                <h3 sx={{ variant: 'text.h3', my: 5 }}>
                    h3 - Tertiary Heading
                </h3>
                <h4 sx={{ variant: 'text.h4', my: 5 }}>h4 - Another Heading</h4>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                </p>
                <h1 sx={{ variant: 'text.h1', my: '30px' }}>Color Modes</h1>
                <div sx={{ my: '30px' }}>
                    {Object.entries(theme.rawColors.modes).map(
                        ([mode, values]) => {
                            return (
                                <Button
                                    sx={{
                                        bg: values.primary,
                                        color: values.text,
                                        border: '1px solid',
                                        borderColor: values.primary,
                                        mr: 4,
                                        px: 9,
                                        py: 3,
                                        '&:hover': {
                                            cursor: 'pointer',
                                            bg: '#fff',
                                            color: '#2F495E',
                                            transform: 'scale(1.1)',
                                            transition: 'all .2s ease-in-out',
                                        },
                                    }}
                                    key={mode}
                                    onClick={() => setColorMode(mode)}
                                >
                                    {mode}
                                </Button>
                            );
                        }
                    )}
                </div>
                <div
                    sx={{ variant: 'wrappers.blogWrapper' }}
                    dangerouslySetInnerHTML={{
                        __html: '<h1>Hello</h1><p>Lorem ipsum dolor sit amet, <a href="/">consectetur adipiscing elit</a>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p><p>Testing stuff</p>',
                    }}
                />
            </section>
        </>
    );
};

export default ThemePage;
