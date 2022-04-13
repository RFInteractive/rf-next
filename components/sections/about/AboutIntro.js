/** @jsxImportSource theme-ui */
import { Container, Grid } from 'theme-ui';
import MotionFadeGrow from '../../animations/MotionFadeGrow';

import Lottie from 'react-lottie';
import * as aboutIntroAnimationData from '../../../lib/lottie/team-lottie.json';

const AboutIntroStats = () => {
    const loadingLottieOptions = {
        loop: true,
        autoplay: true,
        animationData: aboutIntroAnimationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };

    return (
        <section
            id="contentIntroStats"
            sx={{
                marginBottom: '75px',
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
                            Custom Solutions, <br></br>
                            Research Driven
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
                            Rank Fuse opened in Overland Park, Kansas, in 2015.
                            Since then, our agency as been grown to help many
                            businesses expand their sales and customer base.
                        </p>
                        <p sx={{ mb: '40px' }}>
                            We know how to research and craft strategies for
                            your unique challenges and goals because our team
                            has decades of agency experience.
                        </p>
                    </div>
                </Grid>
            </Container>
        </section>
    );
};

export default AboutIntroStats;
