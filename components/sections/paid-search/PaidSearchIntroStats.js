/** @jsxImportSource theme-ui */
import { Container, Grid } from 'theme-ui';
import MotionFadeGrow from '../../animations/MotionFadeGrow';

import Lottie from 'react-lottie';
import * as paidSearchIntroAnimationData from '../../../lib/lottie/searchResults.json';

const PaidSearchIntroStats = () => {
    const loadingLottieOptions = {
        loop: true,
        autoplay: true,
        animationData: paidSearchIntroAnimationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };

    return (
        <section
            id="paidSearchIntro"
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
                            Tailored Campaigns <br></br> & Target with Intent
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
                            Who are you trying to reach, and what geo are you
                            trying to target? Our access to programmatic ad
                            networks allows us to target people based on online
                            and off-line behaviors, geographic region, shopping
                            behaviors, and more.
                        </p>
                        <p sx={{ mb: '10px' }}>
                            Not every business is the same, so your programmatic
                            ad strategy shouldn’t be approached in a
                            cookie-cutter manner.
                        </p>
                    </div>
                </Grid>
            </Container>
        </section>
    );
};

export default PaidSearchIntroStats;
