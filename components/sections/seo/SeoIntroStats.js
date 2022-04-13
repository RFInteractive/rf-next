/** @jsxImportSource theme-ui */
import { Container, Grid } from 'theme-ui';
import MotionFadeGrow from '../../animations/MotionFadeGrow';

import Lottie from 'react-lottie';
import * as seoIntroAnimationData from '../../../lib/lottie/searchResults.json';

const SEOIntroStats = () => {
    const loadingLottieOptions = {
        loop: true,
        autoplay: true,
        animationData: seoIntroAnimationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };

    return (
        <section
            id="seoIntroStats"
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
                            We&apos;re SEO Experts
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
                            When you need help ranking better in search results,
                            Search Engine Optimization is exactly what you are
                            looking for. You need a professional team of SEO
                            experts to help you expand your online presence and
                            bring more leads to your business.
                        </p>
                        <p sx={{ mb: '10px' }}>
                            Our experts have a proven record of boosting website
                            performance using technical on-page, off-page, and
                            local SEO techniques. Learn more about each of our
                            SEO services below!
                        </p>
                    </div>
                </Grid>
            </Container>
        </section>
    );
};

export default SEOIntroStats;
