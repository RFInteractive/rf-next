/* eslint-disable @next/next/no-img-element */
/** @jsxImportSource theme-ui */
import { Container, Grid, useThemeUI } from 'theme-ui';

import Link from 'next/link';

const CTARow = ({
    heading,
    subheading,
    buttonText = 'Start Now',
    link = '/',
}) => {
    const { theme } = useThemeUI();

    const gradientLight = theme.rawColors.gradientLight;
    const gradientDark = theme.rawColors.gradientDark;

    return (
        <div sx={{ px: ['20px', '20px', null, null] }}>
            <Container
                sx={{
                    maxWidth: '1250px',
                    padding: '50px',
                    background: `linear-gradient(270deg, ${gradientLight}, ${gradientDark});`,
                    borderRadius: '30px',
                    marginTop: '125px',
                    marginBottom: '75px',
                }}
            >
                <Grid columns={[1, 1, 2, 2]} sx={{ position: 'relative' }}>
                    <div
                        sx={{
                            gridColumn: ['1/-1', '1/-1', '1/2', '1/2'],
                            gridRow: ['2/3', '2/3', '1/-1', '1/-1'],
                            marginTop: ['-50px', '-50px', '0px', '0px'],
                        }}
                    >
                        <h2
                            sx={{
                                variant: 'text.h2',
                                color: '#fff',
                                mb: '20px',
                                fontSize: '50px',
                                zIndex: '5',
                                position: 'relative',
                            }}
                        >
                            {heading}
                        </h2>
                        <p sx={{ fontSize: '26px', color: '#fff', mb: '30px' }}>
                            {subheading}
                        </p>
                        <Link href={link}>
                            <a sx={{ variant: 'buttons.light' }}>
                                {buttonText}
                            </a>
                        </Link>
                    </div>
                    <div
                        sx={{
                            position: 'relative',
                            gridColumn: ['1/-1', '1/-1', '2/-1', '2/-1'],
                            gridRow: ['1/2', '1/2', '1/-1', '1/-1'],
                        }}
                    >
                        <img
                            src="/images/phone-array.png"
                            alt="a cell phone mockup"
                            sx={{
                                position: [
                                    'relative',
                                    'relative',
                                    'absolute',
                                    'absolute',
                                ],
                                top: '0',
                                transform: 'translateY(-32%)',
                                zIndex: '2',
                                width: ['75%', '75%', 'auto', 'auto'],
                            }}
                        />
                    </div>
                    <CTABgSVG />
                </Grid>
            </Container>
        </div>
    );
};

const CTABgSVG = () => {
    const { theme } = useThemeUI();

    const gradientLight = theme.rawColors.gradientLight;
    const gradientDark = theme.rawColors.gradientDark;
    return (
        <svg
            viewBox="0 0 878 401"
            sx={{
                width: '80%',
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -60%)',
                zIndex: '0',
            }}
            xmlns="http://www.w3.org/2000/svg"
        >
            <ellipse
                rx="14.7437"
                ry="14.5233"
                transform="matrix(-0.94101 0.33838 0.305558 0.952173 18.3117 126.818)"
                fill="url(#ctaRow0_linear)"
            />
            <ellipse
                rx="35.8062"
                ry="35.2709"
                transform="matrix(-0.94101 0.33838 0.305558 0.952173 671.471 354.7)"
                fill="url(#ctaRow1_linear)"
            />
            <ellipse
                rx="18.535"
                ry="18.2579"
                transform="matrix(-0.94101 0.33838 0.305558 0.952173 475.02 169.657)"
                fill="url(#ctaRow2_linear)"
            />
            <ellipse
                rx="9.2675"
                ry="9.12893"
                transform="matrix(-0.94101 0.33838 0.305558 0.952173 865.756 11.8283)"
                fill="url(#ctaRow3_linear)"
            />
            <ellipse
                rx="14.7437"
                ry="14.5233"
                transform="matrix(-0.94101 0.33838 0.305558 0.952173 213.312 335.818)"
                fill="url(#ctaRow4_linear)"
            />
            <defs>
                <linearGradient
                    id="ctaRow0_linear"
                    x1="-10"
                    y1="-10"
                    x2="23.0433"
                    y2="23.4841"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset="0.051875" sx={{ stopColor: gradientLight }} />
                    <stop offset="0.885417" sx={{ stopColor: gradientDark }} />
                </linearGradient>
                <linearGradient
                    id="ctaRow1_linear"
                    x1="-20"
                    y1="-20"
                    x2="98.5337"
                    y2="99.6044"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset="0.01875" sx={{ stopColor: gradientLight }} />
                    <stop offset="0.585417" sx={{ stopColor: gradientDark }} />
                </linearGradient>
                <linearGradient
                    id="ctaRow2_linear"
                    x1="-15"
                    y1="-15"
                    x2="120.5116"
                    y2="120.0658"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset="0.01875" sx={{ stopColor: gradientLight }} />
                    <stop offset="0.305417" sx={{ stopColor: gradientDark }} />
                </linearGradient>
                <linearGradient
                    id="ctaRow3_linear"
                    x1="-10"
                    y1="-10"
                    x2="140.2558"
                    y2="140.5329"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset="0.01875" sx={{ stopColor: gradientLight }} />
                    <stop offset="0.125417" sx={{ stopColor: gradientDark }} />
                </linearGradient>
                <linearGradient
                    id="ctaRow4_linear"
                    x1="-10"
                    y1="-10"
                    x2="120.0433"
                    y2="120.4841"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset="0.01875" sx={{ stopColor: gradientLight }} />
                    <stop offset="0.155417" sx={{ stopColor: gradientDark }} />
                </linearGradient>
            </defs>
        </svg>
    );
};

export default CTARow;
