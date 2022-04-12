/* eslint-disable @next/next/no-img-element */
/** @jsxImportSource theme-ui */
import Head from 'next/head';

import AppHeader from '../../components/sections/AppHeader';

import CheckListItem from '../../components/CheckListItem';
import MotionFadeGrow from '../../components/animations/MotionFadeGrow';
import SocialAdvertisingIntroStats from '../../components/sections/social-advertising/SocialAdvertisingIntroStats';
import SocialAdvertisingProcess from '../../components/sections/social-advertising/SocialAdvertisingProcess';
import TestimonialCarousel from '../../components/sections/AppTestimonialCarousel';

import FacebookAdvertising from '../../components/sections/social-advertising/FacebookAdvertising';
import LinkedInAdvertising from '../../components/sections/social-advertising/LinkedInAdvertising';
import InstagramAdvertising from '../../components/sections/social-advertising/InstagramAdvertising';

import CTARow from '../../components/sections/AppCTARow';
import { socialAdvertisingSEO } from '../../lib/seo';
import Lottie from 'react-lottie';
import * as socialMediaAnimationData from '../../lib/lottie/social-media-lottie.json';
import MultiStepPortalButton from '../../components/portals/MultiStepPortalButton';

const SocialAdvertising = () => {
    return (
        <div>
            <Head>
                <title>{socialAdvertisingSEO.title}</title>
                <meta
                    name="description"
                    content={socialAdvertisingSEO.description}
                />
                <meta property="og:type" content="website" />
                <meta
                    property="og:title"
                    content={socialAdvertisingSEO.title}
                />
                <meta
                    property="og:description"
                    content={socialAdvertisingSEO.description}
                />
                <meta property="og:url" content={socialAdvertisingSEO.ogUrl} />
                <meta
                    property="og:image"
                    content="/images/RankFuse-OG-Img.jpg"
                />
            </Head>

            <AppHeader
                leftColumnContent={SocialAdvertisingLeftColumn()}
                rightColumnContent={SocialAdvertisingRightColumn()}
            />

            <main>
                <SocialAdvertisingIntroStats />
                <SocialAdvertisingProcess />
                <TestimonialCarousel />
                <FacebookAdvertising />
                <LinkedInAdvertising />
                <InstagramAdvertising />

                <CTARow
                    heading="Stand Out in the Crowd"
                    subheading="Take advantage of our free tools"></CTARow>
            </main>
        </div>
    );
};

export default SocialAdvertising;

const SocialAdvertisingLeftColumn = () => {
    return (
        <div
            sx={{
                paddingTop: ['150px', '125px', '150px', '30px'],
                paddingBottom: ['150px', '150px', '175px', '30px'],
                paddingLeft: ['0px', '6%', '0px', '0px'],
                paddingRight: ['0px', '12%', '0px', '25px'],
            }}>
            <h1
                sx={{
                    color: '#fff',
                    marginBottom: '20px',
                }}>
                Expand Your Reach With Social Advertising
            </h1>
            <CheckListItem bgColor="#fff" checkmarkColor="primary">
                <p sx={{ color: '#fff', fontSize: '24px', marginLeft: '10px' }}>
                    Manage your media buy in real-time
                </p>
            </CheckListItem>
            <CheckListItem bgColor="#fff" checkmarkColor="primary">
                <p sx={{ color: '#fff', fontSize: '24px', marginLeft: '10px' }}>
                    Cut down on wasted impressions
                </p>
            </CheckListItem>
            <CheckListItem bgColor="#fff" checkmarkColor="primary">
                <p sx={{ color: '#fff', fontSize: '24px', marginLeft: '10px' }}>
                    Increase your brand’s ROI
                </p>
            </CheckListItem>
            <MotionFadeGrow delay={0.8}>
                <MultiStepPortalButton
                    buttonText="Let's Work Together"
                    variant="buttons.light"
                />
            </MotionFadeGrow>
        </div>
    );
};

const SocialAdvertisingRightColumn = () => {
    const loadingLottieOptions = {
        loop: true,
        autoplay: true,
        animationData: socialMediaAnimationData,
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
                paddingX: '25px',
                paddingBottom: '75px',
            }}>
            <MotionFadeGrow delay={0.3}>
                <Lottie options={loadingLottieOptions} />
            </MotionFadeGrow>
        </div>
    );
};
