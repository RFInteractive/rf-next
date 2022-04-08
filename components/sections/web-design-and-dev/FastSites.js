/** @jsxImportSource theme-ui */
import Image from 'next/image';

import TwoColumnVector from '../../layout/TwoColumnVector';
import PhonesPerformance from '../../../public/images/3-phones-performance.png';
import MotionFadeGrow from '../../animations/MotionFadeGrow';

const FastSites = () => {
    return (
        <section id="fastSites">
            <TwoColumnVector
                vectorSide={'right'}
                leftColumnContent={FastSitesLeftColumnContent()}
                rightColumnContent={FastSitesRightColumnContent()}
                sectionName={'fastSites'}
            />
        </section>
    );
};

const FastSitesLeftColumnContent = () => {
    return (
        <div
            sx={{
                paddingRight: ['0px', '0px', '80px', '40px'],
            }}>
            <h3 sx={{ marginBottom: '10px' }}>
                The Fastest Sites on Any Platform
            </h3>
            <div
                sx={{
                    width: '100%',
                    maxWidth: '90px',
                    height: '3px',
                    bg: 'accent',
                    marginBottom: '30px',
                }}></div>
            <p>
                Our expert web developers understand that a well-optimized
                website is crucial for performance and long-term success. We
                focus on keeping page load speeds low by checking that images
                are properly sized and reducing bulk in the code.
            </p>
            <p sx={{ margin: '20px 0px 35px' }}>
                If you want one of the fastest websites on the internet, talk to
                us about converting to a headless setup!
            </p>
        </div>
    );
};

const FastSitesRightColumnContent = () => {
    return (
        <div
            sx={{
                display: 'grid',
                justifyItems: 'center',
                position: 'relative',
                my: ['100px', '50px', '100px', '100px'],
            }}>
            <MotionFadeGrow threshold={0.7}>
                <Image
                    alt="Content strategy calendar"
                    src={PhonesPerformance}
                    width={652}
                    height={497}
                    quality={100}
                />
            </MotionFadeGrow>
        </div>
    );
};

export default FastSites;
