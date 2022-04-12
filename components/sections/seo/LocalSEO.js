/** @jsxImportSource theme-ui */
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
                Local search results are fundamental for local brick-and-mortar
                businesses. When it comes to local search results, our team
                knows how to increase your visibility and draw more people to
                your website. Our approach involves a variety of local
                directories, schema markup, review tools, and fundamental SEO
                best practices, such as keyword-rich content and domain
                authority.
            </p>
            <p sx={{ paddingBottom: '30px' }}>
                As we focus on all of these algorithm factors to improve your
                local search, you will start to stand out among your
                competitors. Whether you own a local brick-and-mortar business
                or are a local service provider that travels to your customers,
                it’s important to grow your business through local search
                keywords.
            </p>
        </div>
    );
};

export default LocalSEO;
