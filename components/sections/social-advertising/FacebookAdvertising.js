/** @jsxImportSource theme-ui */
import { Button } from 'theme-ui';

import TwoColumnVector from '../../layout/TwoColumnVector';
import MotionFadeGrow from '../../animations/MotionFadeGrow';

import Lottie from 'react-lottie';
import * as facebookAnimationData from '../../../lib/lottie/facebook-lottie.json';

const FacebookAdvertising = () => {
    return (
        <section id="facebookAdvertising">
            <TwoColumnVector
                vectorSide={'left'}
                leftColumnContent={FacebookAdvertisingLeftColumnContent()}
                rightColumnContent={FacebookAdvertisingRightColumnContent()}
                sectionName={'facebookAdvertising'}
            />
        </section>
    );
};

const FacebookAdvertisingLeftColumnContent = () => {
    const loadingLottieOptions = {
        loop: true,
        autoplay: true,
        animationData: facebookAnimationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };

    return (
        <div
            sx={{
                display: 'grid',
                justifyItems: 'center',
                position: 'relative',
                my: ['70px', '50px', '100px', '100px'],
                padding: ['25px', '35px', '50px', '50px'],
            }}>
            <MotionFadeGrow threshold={0.7}>
                <Lottie options={loadingLottieOptions} width="110%" />
            </MotionFadeGrow>
        </div>
    );
};

const FacebookAdvertisingRightColumnContent = () => {
    return (
        <div
            sx={{
                paddingLeft: ['0px', '0px', '75px', '60px'],
            }}>
            <h3 sx={{ marginBottom: '10px' }}>Facebook Advertising</h3>
            <div
                sx={{
                    width: '100%',
                    maxWidth: '90px',
                    height: '3px',
                    bg: 'accent',
                    marginBottom: '30px',
                }}></div>
            <p sx={{ paddingBottom: '20px' }}>
                You probably have specific customers or clientele that you want
                to attract to your business. Behavioral targeting allows us to
                seamlessly stitch together the personas you want to reach with
                digital ads.
            </p>
            <p sx={{ paddingBottom: '30px' }}>
                Whether your organization is B2B or B2C, behavioral targeting
                lets your brand create custom campaigns. Through our ad
                platforms, we can expose your brand to users who have already
                shown interest in similar products or services to yours.
            </p>
            <MotionFadeGrow delay={0.6} threshold={1}>
                <Button variant="primary">Let&apos;s Chat</Button>
            </MotionFadeGrow>
        </div>
    );
};

export default FacebookAdvertising;
