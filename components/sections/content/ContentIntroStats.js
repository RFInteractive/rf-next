/** @jsxImportSource theme-ui */
import { Container, Grid } from 'theme-ui';
import MotionFadeGrow from '../../animations/MotionFadeGrow';

import Lottie from 'react-lottie';
import * as contentIntroAnimationData from '../../../lib/lottie/contentScan-lottie.json';

const ContentIntroStats = () => {
    const loadingLottieOptions = {
        loop: true,
        autoplay: true,
        animationData: contentIntroAnimationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };

    return (
        <section
            id="contentIntroStats"
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
                            Our Content Shines
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
                            All websites need well-written, thoughtfully planned
                            content. To ensure that your content is providing
                            the most value to your website, work with our
                            professional team of writers who specialize in
                            SEO-focused content.
                        </p>
                        <p sx={{ mb: '10px' }}>
                            Using our keyword research and content planning
                            methods, your content is in the best hands. Our
                            writers will take the time to craft each piece of
                            content based on your brand’s voice and specific
                            needs without sacrificing SEO value.
                        </p>
                    </div>
                </Grid>
            </Container>
        </section>
    );
};

export default ContentIntroStats;
