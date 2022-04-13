/** @jsxImportSource theme-ui */
import { Container, Grid } from 'theme-ui';

import MotionFadeGrow from '../../animations/MotionFadeGrow';

import Lottie from 'react-lottie';
import * as webDevIntroAnimationData from '../../../lib/lottie/website-build-lottie.json';

const WebDevIntroStats = () => {
    const loadingLottieOptions = {
        loop: true,
        autoplay: true,
        animationData: webDevIntroAnimationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };

    return (
        <section
            id="webDevIntroStats"
            sx={{
                marginBottom: ['125px', '100px', '125px', '125px'],
            }}>
            <Container sx={{ maxWidth: '1290px', px: '30px' }}>
                <Grid
                    columns={[1, 1, 2, 2]}
                    gap={'50px'}
                    sx={{ alignItems: 'center' }}>
                    <div sx={{ transform: 'rotateY(180deg)' }}>
                        <MotionFadeGrow threshold={0.7}>
                            <Lottie options={loadingLottieOptions} />
                        </MotionFadeGrow>
                    </div>
                    <div
                        sx={{
                            paddingLeft: ['0px', '0px', '50px', '30px'],
                        }}>
                        <h2 sx={{ marginBottom: '10px' }}>
                            We Stand by Our Sites
                        </h2>
                        <div
                            sx={{
                                width: '100%',
                                maxWidth: '90px',
                                height: '3px',
                                bg: 'accent',
                                marginBottom: '30px',
                            }}></div>
                        <p sx={{ my: '15px' }}>
                            Our core focus is centered around effective SEM and
                            SEO campaigns for local and national companies
                            looking to boost revenues from online marketing and
                            advertising.
                        </p>
                        <p sx={{ mb: '10px' }}>
                            We have a proven record of boosting website
                            performance, sales, and rankings. More importantly,
                            we take pride in delivering strategy that earns the
                            types of clicks that deliver positive ROI.
                        </p>
                    </div>
                </Grid>
            </Container>
        </section>
    );
};

export default WebDevIntroStats;
