/** @jsxImportSource theme-ui */
import Image from 'next/image';

import TwoColumnVector from '../../layout/TwoColumnVector';
import eCommerceLaptop from '../../../public/images/eCommerce-laptop.png';
import MotionFadeGrow from '../../animations/MotionFadeGrow';
import MultiStepPortalButton from '../../portals/MultiStepPortalButton';

const ECommerceAds = () => {
    return (
        <section id="eCommerceAdvertising">
            <TwoColumnVector
                vectorSide={'left'}
                leftColumnContent={ECommerceAdsLeftColumnContent()}
                rightColumnContent={ECommerceAdsRightColumnContent()}
                sectionName={'eCommerceAdvertising'}
            />
        </section>
    );
};

const ECommerceAdsLeftColumnContent = () => {
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
                <Image
                    alt="Laptop showing eCommerce ad for shoes"
                    src={eCommerceLaptop}
                    width={640}
                    height={532}
                    quality={100}
                />
            </MotionFadeGrow>
        </div>
    );
};

const ECommerceAdsRightColumnContent = () => {
    return (
        <div
            sx={{
                paddingLeft: ['0px', '0px', '75px', '60px'],
                marginTop: ['30px', '20px', '0px', '0px'],
            }}>
            <h3 sx={{ marginBottom: '10px' }}>eCommerce Ads</h3>
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
            <p sx={{ paddingBottom: '10px' }}>
                Whether your organization is B2B or B2C, behavioral targeting
                lets your brand create custom campaigns. Through our ad
                platforms, we can expose your brand to users who have already
                shown interest in similar products or services to yours.
            </p>
            <MotionFadeGrow delay={0.6} threshold={1}>
                <MultiStepPortalButton
                    buttonText="Let's Chat"
                    variant="primary"
                />
            </MotionFadeGrow>
        </div>
    );
};

export default ECommerceAds;
