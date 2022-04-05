/* eslint-disable @next/next/no-img-element */
/** @jsxImportSource theme-ui */
import { Button } from 'theme-ui';
import Head from 'next/head';
import Image from 'next/image';

import AppHeader from '../../components/sections/AppHeader';
import IMacPaidSearch from '../../public/images/iMac-paid-search.png';
import CheckListItem from '../../components/CheckListItem';

import MotionFadeGrow from '../../components/animations/MotionFadeGrow';
import PaidSearchIntroStats from '../../components/sections/paid-search/PaidSearchIntroStats';
import PaidSearchProcess from '../../components/sections/paid-search/PaidSearchProcess';
import TestimonialCarousel from '../../components/sections/AppTestimonialCarousel';

import ECommerceAds from '../../components/sections/paid-search/ECommerceAds';
import YouTubeDisplay from '../../components/sections/paid-search/YouTubeDisplay';
import GoogleMapsAdvertisement from '../../components/sections/paid-search/GoogleMaps';

import CTARow from '../../components/sections/AppCTARow';
import { paidSearchSEO } from '../../lib/seo';

const PaidSearchAdvertising = () => {
    return (
        <div>
            <Head>
                <title>{paidSearchSEO.title}</title>
                <meta name="description" content={paidSearchSEO.description} />
                <meta property="og:type" content="website" />
                <meta property="og:title" content={paidSearchSEO.title} />
                <meta
                    property="og:description"
                    content={paidSearchSEO.description}
                />
                <meta property="og:url" content={paidSearchSEO.ogUrl} />
                <meta
                    property="og:image"
                    content="/images/RankFuse-OG-Img.jpg"
                />
            </Head>

            <AppHeader
                leftColumnContent={PaidSearchAdvertisingLeftColumn()}
                rightColumnContent={PaidSearchAdvertisingRightColumn()}
            />

            <main>
                <PaidSearchIntroStats />
                <PaidSearchProcess />
                <TestimonialCarousel />
                <ECommerceAds />
                <YouTubeDisplay />
                <GoogleMapsAdvertisement />
                <CTARow
                    heading="Stand Out in the Crowd"
                    subheading="Take advantage of our free tools"></CTARow>
            </main>
        </div>
    );
};

export default PaidSearchAdvertising;

const PaidSearchAdvertisingLeftColumn = () => {
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
                We Deliver Ads That Deliver Results
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
                <Button variant="light" sx={{ marginTop: '20px' }}>
                    Let&apos;s Work Together
                </Button>
            </MotionFadeGrow>
        </div>
    );
};

const PaidSearchAdvertisingRightColumn = () => {
    return (
        <div
            sx={{
                display: 'grid',
                justifyItems: 'center',
                position: 'relative',
                paddingX: '25px',
                paddingBottom: '35px',
            }}>
            <MotionFadeGrow delay={0.3}>
                <Image
                    alt="Laptop with overlaying SEO metrics"
                    src={IMacPaidSearch}
                    width={475}
                    height={416}
                    quality={100}
                />
            </MotionFadeGrow>
        </div>
    );
};
