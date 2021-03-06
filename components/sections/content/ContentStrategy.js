/** @jsxImportSource theme-ui */
import Image from 'next/image';

import TwoColumnVector from '../../layout/TwoColumnVector';
import contentTimeline from '../../../public/images/content-timeline.png';
import MotionFadeGrow from '../../animations/MotionFadeGrow';
import MultiStepPortalButton from '../../portals/MultiStepPortalButton';

const ContentStrategy = () => {
    return (
        <section id="contentStrategy">
            <TwoColumnVector
                vectorSide={'left'}
                leftColumnContent={ContentStrategyLeftColumnContent()}
                rightColumnContent={ContentStrategyRightColumnContent()}
                sectionName={'contentStrategy'}
            />
        </section>
    );
};

const ContentStrategyLeftColumnContent = () => {
    return (
        <div
            sx={{
                display: 'grid',
                justifyItems: 'center',
                position: 'relative',
                my: ['100px', '50px', '100px', '100px'],
            }}>
            <MotionFadeGrow threshold={0.5}>
                <Image
                    alt="Content strategy calendar"
                    src={contentTimeline}
                    width={591}
                    height={472}
                    quality={100}
                />
            </MotionFadeGrow>
        </div>
    );
};

const ContentStrategyRightColumnContent = () => {
    return (
        <div
            sx={{
                paddingLeft: ['0px', '0px', '75px', '60px'],
            }}>
            <h3 sx={{ marginBottom: '10px' }}>Content Strategy</h3>
            <div
                sx={{
                    width: '100%',
                    maxWidth: '90px',
                    height: '3px',
                    bg: 'accent',
                    marginBottom: '30px',
                }}></div>
            <p sx={{ paddingBottom: '20px' }}>
                Our content strategists provide you with a detailed analysis of
                the content on your website, a list of the keywords you rank
                for, and a list of the keywords you will want to target next. We
                also offer expert SEO writing services to ensure your keyword
                focus is never lost.
            </p>
            <p sx={{ paddingBottom: '10px' }}>
                The goal of every content marketing strategy we produce is to
                organically improve your rankings in search engines using proven
                research to write the answers to the questions real people are
                asking.
            </p>
            <MotionFadeGrow threshold={0.6} delay={0.6}>
                <MultiStepPortalButton
                    buttonText="Let's Chat"
                    variant="primary"
                />
            </MotionFadeGrow>
        </div>
    );
};

export default ContentStrategy;
