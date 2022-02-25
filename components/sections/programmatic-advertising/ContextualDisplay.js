/** @jsxImportSource theme-ui */
import Image from 'next/image';

import TwoColumnVector from '../../layout/TwoColumnVector';
import ContextualDisplayAd from '../../../public/images/contextual-display-ad.png';
import MotionFadeGrow from '../../animations/MotionFadeGrow';

const ContextualDisplay = () => {
    return (
        <section id="contextualDisplay" sx={{ pb: ['50px', null, null, null] }}>
            <TwoColumnVector
                vectorSide={'right'}
                leftColumnContent={ContextualDisplayLeftColumnContent()}
                rightColumnContent={ContextualDisplayRightColumnContent()}
                sectionName={'contextualDisplay'}
            />
        </section>
    );
};

const ContextualDisplayLeftColumnContent = () => {
    return (
        <div
            sx={{
                paddingRight: ['0px', '0px', '80px', '40px'],
            }}>
            <h3 sx={{ marginBottom: '10px' }}>Contextual Display</h3>
            <div
                sx={{
                    width: '100%',
                    maxWidth: '90px',
                    height: '3px',
                    bg: 'accent',
                    marginBottom: '30px',
                }}></div>
            <p>
                As a programmatic strategy, Contextual Display Advertising
                allows brands to serve ads based on the context of the web page.
                This approach ensures that your brand is positioned alongside
                relevant content.
            </p>
            <p sx={{ margin: '20px 0px 35px' }}>
                By pairing Contextual Display with your Paid Search campaigns,
                you can capitalize on these key terms to help drive relevant
                traffic to your website. Learn more about how our team can help
                you develop Contextual Display Ads for your brand.
            </p>
        </div>
    );
};

const ContextualDisplayRightColumnContent = () => {
    return (
        <div
            sx={{
                display: 'grid',
                justifyItems: 'center',
                position: 'relative',
                my: ['70px', '50px', '100px', '100px'],
            }}>
            <MotionFadeGrow threshold={0.7}>
                <Image
                    alt="Content strategy calendar"
                    src={ContextualDisplayAd}
                    width={642}
                    height={492}
                    quality={100}
                />
            </MotionFadeGrow>
        </div>
    );
};

export default ContextualDisplay;
