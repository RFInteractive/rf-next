/** @jsxImportSource theme-ui */
import { Container, Grid } from 'theme-ui';

import MotionFadeGrow from '../../animations/MotionFadeGrow';

import Lottie from 'react-lottie';
import * as advertisingIntroAnimationData from '../../../lib/lottie/analytics-reporting-lottie.json';

const AdvertisingIntroStats = () => {
    const loadingLottieOptions = {
        loop: true,
        autoplay: true,
        animationData: advertisingIntroAnimationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };

    return (
        <section
            id="advertisingIntro"
            sx={{
                marginBottom: ['125px', '100px', '125px', '125px'],
            }}>
            <Container sx={{ maxWidth: '1290px', px: '30px' }}>
                <Grid
                    columns={[1, 1, 2, 2]}
                    gap={'50px'}
                    sx={{ alignItems: 'center' }}>
                    <div>
                        <MotionFadeGrow threshold={0.7}>
                            <Lottie options={loadingLottieOptions} />
                        </MotionFadeGrow>
                    </div>
                    <div
                        sx={{
                            paddingLeft: ['0px', '0px', '50px', '30px'],
                        }}>
                        <h2 sx={{ marginBottom: '10px' }}>
                            Tailored Campaigns
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
                            Advertising in the digital world can mean many
                            things. There are a lot of different advertising
                            options for businesses to choose from, and working
                            with a team of experts is the best way to ensure
                            that your ad dollars are being used in the most
                            efficient way possible.
                        </p>
                        <p sx={{ mb: '10px' }}>
                            At Rank Fuse, we believe that every company should
                            have a custom advertising strategy. Talk to our
                            digital advertising experts today to see what we can
                            do for you!
                        </p>
                    </div>
                </Grid>
            </Container>
        </section>
    );
};

export default AdvertisingIntroStats;
