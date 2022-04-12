/* eslint-disable @next/next/no-img-element */
/** @jsxImportSource theme-ui */
import TwoColumnVector from '../../layout/TwoColumnVector';
import MotionFadeGrow from '../../animations/MotionFadeGrow';

import Lottie from 'react-lottie';
import * as analyticsReportingAnimationData from '../../../lib/lottie/analytics-reporting-lottie.json';
import MultiStepPortalButton from '../../portals/MultiStepPortalButton';

const AnalyticsReportingRow = () => {
    return (
        <section id="analyticsReporting">
            <TwoColumnVector
                vectorSide={'right'}
                leftColumnContent={AnalyticsReportingLeftColumnContent()}
                rightColumnContent={AnalyticsReportingRightColumnContent()}
                sectionName={'analyticsReporting'}
            />
        </section>
    );
};

const AnalyticsReportingLeftColumnContent = () => {
    return (
        <div
            sx={{
                paddingRight: ['0px', '0px', '75px', '75px'],
            }}>
            <h3 sx={{ marginBottom: '10px' }}>Analytics & Reporting</h3>
            <div
                sx={{
                    width: '100%',
                    maxWidth: '90px',
                    height: '3px',
                    bg: 'accent',
                    marginBottom: '30px',
                }}></div>
            <p>
                Tracking progress is an essential part of any successful SEO
                strategy. Every month, we build a report that allows you (and
                us!) to see how things are going. Your report will cover traffic
                numbers, organic rankings, and so much more!
            </p>
            <p sx={{ marginTop: '20px', marginBottom: '10px' }}>
                Using these reports, our team can learn what is and isn’t
                working for your brand, and this allows us to quickly make
                changes that will benefit your SEO strategy.
            </p>
            <MotionFadeGrow delay={0.5} threshold={1}>
                <MultiStepPortalButton
                    buttonText="Work With Us"
                    variant="primary"
                />
            </MotionFadeGrow>
        </div>
    );
};

const AnalyticsReportingRightColumnContent = () => {
    const loadingLottieOptions = {
        loop: true,
        autoplay: true,
        animationData: analyticsReportingAnimationData,
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
            }}>
            <MotionFadeGrow threshold={0.8}>
                <Lottie options={loadingLottieOptions} />
            </MotionFadeGrow>
        </div>
    );
};

export default AnalyticsReportingRow;
