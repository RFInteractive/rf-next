/** @jsxImportSource theme-ui */
import { Button } from 'theme-ui';

import TwoColumnVector from '../../layout/TwoColumnVector';
import MotionFadeGrow from '../../animations/MotionFadeGrow';

import Lottie from 'react-lottie';
import * as localSEOAnimationData from '../../../lib/lottie/local-seo-lottie.json';

const LocalSEO = () => {
    return (
        <section id="localSEO" sx={{ pb: ['50px', null, null, null] }}>
            <TwoColumnVector
                vectorSide={'left'}
                leftColumnContent={LocalSEOLeftColumnContent()}
                rightColumnContent={LocalSEORightColumnContent()}
                sectionName={'localSEO'}
            />
        </section>
    );
};

const LocalSEOLeftColumnContent = () => {
    const loadingLottieOptions = {
        loop: true,
        autoplay: true,
        animationData: localSEOAnimationData,
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
                pb: '30px',
                my: ['100px', '50px', '100px', '100px'],
            }}>
            <MotionFadeGrow threshold={0.8}>
                <Lottie options={loadingLottieOptions} />
            </MotionFadeGrow>
        </div>
    );
};

const LocalSEORightColumnContent = () => {
    return (
        <div
            sx={{
                paddingLeft: ['0px', '0px', '75px', '60px'],
                marginTop: ['30px', '0px', '0px', '0px'],
            }}>
            <h3 sx={{ marginBottom: '10px' }}>Local SEO</h3>
            <div
                sx={{
                    width: '100%',
                    maxWidth: '90px',
                    height: '3px',
                    bg: 'accent',
                    marginBottom: '30px',
                }}></div>
            <p sx={{ paddingBottom: '20px' }}>
                Local SEO is the practice of increasing your website’s
                visibility when it comes to local search results. This approach
                involves a variety of Local directories, schema markup, review
                tools as well as incorporating fundamental SEO best practices
                such as keyword-rich content and domain authority.
            </p>
            <p sx={{ paddingBottom: '30px' }}>
                Focusing on all of these algorithm factors for local search will
                help your company among local competitors. Whether you own a
                local brick-and-mortar business or a local service provider that
                travels your your customers, it’s important to grow your
                business thru local search keywords.
            </p>
            <MotionFadeGrow delay={0.5} threshold={1}>
                <Button variant="primary">Let&apos;s Chat</Button>
            </MotionFadeGrow>
        </div>
    );
};

export default LocalSEO;
