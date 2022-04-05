/** @jsxImportSource theme-ui */
import { Button } from 'theme-ui';

import TwoColumnVector from '../../layout/TwoColumnVector';
import MotionFadeGrow from '../../animations/MotionFadeGrow';

import Lottie from 'react-lottie';
import * as instagramAnimationData from '../../../lib/lottie/instagram-lottie.json';

const InstagramAdvertising = () => {
    return (
        <section
            id="instagramAdvertising"
            sx={{ pb: ['50px', null, null, null] }}>
            <TwoColumnVector
                vectorSide={'left'}
                leftColumnContent={InstagramAdvertisingLeftColumnContent()}
                rightColumnContent={InstagramAdvertisingRightColumnContent()}
                sectionName={'instagramAdvertising'}
            />
        </section>
    );
};

const InstagramAdvertisingLeftColumnContent = () => {
    const loadingLottieOptions = {
        loop: true,
        autoplay: true,
        animationData: instagramAnimationData,
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
                my: ['100px', '50px', '100px', '100px'],
                padding: ['0px', '0px', '75px', '75px'],
            }}>
            <MotionFadeGrow threshold={0.7}>
                <Lottie options={loadingLottieOptions} />
            </MotionFadeGrow>
        </div>
    );
};

const InstagramAdvertisingRightColumnContent = () => {
    return (
        <div
            sx={{
                paddingLeft: ['0px', '0px', '75px', '60px'],
            }}>
            <h3 sx={{ marginBottom: '10px' }}>Instagram Advertising</h3>
            <div
                sx={{
                    width: '100%',
                    maxWidth: '90px',
                    height: '3px',
                    bg: 'accent',
                    marginBottom: '30px',
                }}></div>
            <p sx={{ paddingBottom: '20px' }}>
                Promoting your content through brand thought leadership on a
                native ad network has multiple benefits including, increased
                website traffic, more social shares, comments, referral links,
                and overall awareness of your brand.
            </p>
            <p sx={{ paddingBottom: '30px' }}>
                By exposing your target audience to content that seamlessly
                blends with the page, native ads lead to higher engagement rates
                for your article content and in turn generates highly relevant
                leads.
            </p>
            <MotionFadeGrow delay={0.6} threshold={1}>
                <Button variant="primary">Let&apos;s Chat</Button>
            </MotionFadeGrow>
        </div>
    );
};

export default InstagramAdvertising;
