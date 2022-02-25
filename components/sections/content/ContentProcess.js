/** @jsxImportSource theme-ui */
import { Container, Grid, useThemeUI } from 'theme-ui';
import { darken } from '@theme-ui/color';

import ProcessCard from '../../cards/ProcessCard';
import MotionFadeGrow from '../../animations/MotionFadeGrow';

const ContentProcess = () => {
    return (
        <section
            id="seoProcess"
            sx={{
                marginBottom: ['25px', '25px', '100px', '100px'],
                display: 'grid',
                justifyItems: 'center',
                position: 'relative',
                paddingBottom: '30px',
            }}>
            <h2 sx={{ marginBottom: '10px' }}>Our Process</h2>
            <div
                sx={{
                    width: '100%',
                    maxWidth: '90px',
                    height: '3px',
                    bg: 'accent',
                    marginBottom: '75px',
                }}></div>
            <BgSVG />
            <Container
                sx={{ maxWidth: ['450px', '600px', '1290px'], px: '30px' }}>
                <Grid
                    columns={[1, 1, 3, 3]}
                    gap={['50px', '50px', '3%', '60px']}>
                    <MotionFadeGrow threshold={0.2} delay={0}>
                        <ProcessCard
                            heading="Chat With Us"
                            icon="chat"
                            number="1">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt.
                        </ProcessCard>
                    </MotionFadeGrow>
                    <MotionFadeGrow threshold={0.2} delay={0.2}>
                        <ProcessCard
                            heading="Research"
                            icon="research"
                            number="2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt.
                        </ProcessCard>
                    </MotionFadeGrow>
                    <MotionFadeGrow threshold={0.2} delay={0.4}>
                        <ProcessCard
                            heading="Delivery"
                            icon="delivery"
                            number="3">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt.
                        </ProcessCard>
                    </MotionFadeGrow>
                </Grid>
            </Container>
        </section>
    );
};

const BgSVG = () => {
    const { theme } = useThemeUI();

    const bg = theme.rawColors.background;

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1107"
            height="513"
            viewBox="0 0 1107 513"
            fill="none"
            sx={{
                position: 'absolute',
                zIndex: '-1',
                width: '90%',
                height: '120%',
            }}>
            <ellipse
                rx="15.5148"
                ry="15.2828"
                transform="matrix(0.94101 0.33838 -0.305558 0.952173 436.59 38.2129)"
                fill="url(#test0_linear)"
            />
            <ellipse
                rx="37.6787"
                ry="37.1154"
                transform="matrix(0.94101 0.33838 -0.305558 0.952173 522.527 464.539)"
                fill="url(#test1_linear)"
            />
            <ellipse
                rx="19.5043"
                ry="19.2127"
                transform="matrix(0.94101 0.33838 -0.305558 0.952173 767.302 236.413)"
                fill="url(#test2_linear)"
            />
            <ellipse
                rx="9.75215"
                ry="9.60633"
                transform="matrix(0.94101 0.33838 -0.305558 0.952173 12.1122 12.9468)"
                fill="url(#test3_linear)"
            />
            <ellipse
                rx="15.5148"
                ry="15.2828"
                transform="matrix(0.94101 0.33838 -0.305558 0.952173 1087.64 421.646)"
                fill="url(#test4_linear)"
            />
            <defs>
                <linearGradient
                    id="test0_linear"
                    x1="-10"
                    y1="-10"
                    x2="80.5621"
                    y2="81.026"
                    gradientUnits="userSpaceOnUse">
                    <stop offset="0.0194792" sx={{ stopColor: bg }} />
                    <stop offset=".6" sx={{ stopColor: darken(bg, 0.3) }} />
                </linearGradient>
                <linearGradient
                    id="test1_linear"
                    x1="-10"
                    y1="-10"
                    x2="74.2223"
                    y2="75.3489"
                    gradientUnits="userSpaceOnUse">
                    <stop offset="0.0194792" sx={{ stopColor: bg }} />
                    <stop offset="1" sx={{ stopColor: darken(bg, 0.3) }} />
                </linearGradient>
                <linearGradient
                    id="test2_linear"
                    x1="-10"
                    y1="-10"
                    x2="38.421"
                    y2="39.0042"
                    gradientUnits="userSpaceOnUse">
                    <stop offset="0.0194792" sx={{ stopColor: bg }} />
                    <stop offset="1" sx={{ stopColor: darken(bg, 0.3) }} />
                </linearGradient>
                <linearGradient
                    id="test3_linear"
                    x1="-10"
                    y1="-10"
                    x2="29.2105"
                    y2="29.5021"
                    gradientUnits="userSpaceOnUse">
                    <stop offset="0.0594792" sx={{ stopColor: bg }} />
                    <stop offset=".7" sx={{ stopColor: darken(bg, 0.3) }} />
                </linearGradient>
                <linearGradient
                    id="test4_linear"
                    x1="-10"
                    y1="-10"
                    x2="30.5621"
                    y2="31.026"
                    gradientUnits="userSpaceOnUse">
                    <stop offset="0.0194792" sx={{ stopColor: bg }} />
                    <stop offset="1" sx={{ stopColor: darken(bg, 0.3) }} />
                </linearGradient>
            </defs>
        </svg>
    );
};

export default ContentProcess;
