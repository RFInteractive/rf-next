/** @jsxImportSource theme-ui */
import Image from 'next/image';

import TwoColumnVector from '../../layout/TwoColumnVector';
import YouTubeDisplayLaptop from '../../../public/images/Yt-display-laptop.png';
import MotionFadeGrow from '../../animations/MotionFadeGrow';

const YouTubeDisplay = () => {
    return (
        <section id="youTubeDisplay" sx={{ pb: ['50px', '0px', null, null] }}>
            <TwoColumnVector
                vectorSide={'right'}
                leftColumnContent={YouTubeDisplayLeftColumnContent()}
                rightColumnContent={YouTubeDisplayRightColumnContent()}
                sectionName={'youTubeDisplay'}
            />
        </section>
    );
};

const YouTubeDisplayLeftColumnContent = () => {
    return (
        <div
            sx={{
                paddingRight: ['0px', '0px', '80px', '40px'],
            }}>
            <h3 sx={{ marginBottom: '10px' }}>YouTube Display</h3>
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

const YouTubeDisplayRightColumnContent = () => {
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
                    alt="Laptop showing YouTube display ad"
                    src={YouTubeDisplayLaptop}
                    width={600}
                    height={582}
                    quality={100}
                />
            </MotionFadeGrow>
        </div>
    );
};

export default YouTubeDisplay;
