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
                Our team of dedicated writers has valuable experience developing
                a variety of different types of content. Whether you need a
                blog, a page, an infographic, or an e-book, we have the
                experience needed to create relevant content that will engage
                your audience and keep search engines happy.
            </p>
            <p sx={{ margin: '20px 0px 35px' }}>
                After hundreds of website audits an thousands of reports we
                understand that quality is a moving target and the bar seems to
                be raised higher and higher every day.
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
