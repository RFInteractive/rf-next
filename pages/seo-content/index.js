/* eslint-disable @next/next/no-img-element */
/** @jsxImportSource theme-ui */
import Head from 'next/head';
import Image from 'next/image';

import AppHeader from '../../components/sections/AppHeader';
import MultiStepPortalButton from '../../components/portals/MultiStepPortalButton';
import contentHeaderDevices from '../../public/images/content-header-devices.png';
import CheckListItem from '../../components/CheckListItem';
import MotionFadeGrow from '../../components/animations/MotionFadeGrow';
import ContentIntroStats from '../../components/sections/content/ContentIntroStats';
import ContentProcess from '../../components/sections/content/ContentProcess';
import TestimonialCarousel from '../../components/sections/AppTestimonialCarousel';
import ContentStrategy from '../../components/sections/content/ContentStrategy';
import ContentDevelopment from '../../components/sections/content/ContentDevelopment';
import KeywordResearch from '../../components/sections/content/KeywordResearch';
import CTARow from '../../components/sections/AppCTARow';
import { contentSEO } from '../../lib/seo';

const Content = () => {
    return (
        <div>
            <Head>
                <title>{contentSEO.title}</title>
                <meta name="description" content={contentSEO.description} />
                <meta property="og:type" content="website" />
                <meta property="og:title" content={contentSEO.title} />
                <meta
                    property="og:description"
                    content={contentSEO.description}
                />
                <meta property="og:url" content={contentSEO.ogUrl} />
                <meta
                    property="og:image"
                    content="/images/RankFuse-OG-Img.jpg"
                />
            </Head>

            <AppHeader
                leftColumnContent={ContentLeftColumn()}
                rightColumnContent={ContentRightColumn()}
            />

            <main>
                <ContentIntroStats />
                <ContentProcess />
                <TestimonialCarousel />
                <ContentStrategy />
                <ContentDevelopment />
                <KeywordResearch />
                <CTARow
                    heading="Stand Out in the Crowd"
                    subheading="Take advantage of our free tools"></CTARow>
            </main>
        </div>
    );
};

export default Content;

const ContentLeftColumn = () => {
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
                Need More<br></br>
                Engaging Content?
            </h1>
            <CheckListItem bgColor="#fff" checkmarkColor="primary">
                <p sx={{ color: '#fff', fontSize: '24px', marginLeft: '10px' }}>
                    Increase your traffic
                </p>
            </CheckListItem>
            <CheckListItem bgColor="#fff" checkmarkColor="primary">
                <p sx={{ color: '#fff', fontSize: '24px', marginLeft: '10px' }}>
                    Reach users across more platforms
                </p>
            </CheckListItem>
            <CheckListItem bgColor="#fff" checkmarkColor="primary">
                <p sx={{ color: '#fff', fontSize: '24px', marginLeft: '10px' }}>
                    Target Audiences with optimized keywords
                </p>
            </CheckListItem>
            <MotionFadeGrow delay={0.65}>
                <MultiStepPortalButton
                    buttonText="Let's Work Together"
                    variant="light"
                />
            </MotionFadeGrow>
        </div>
    );
};

const ContentRightColumn = () => {
    return (
        <div
            sx={{
                display: 'grid',
                justifyItems: 'center',
                position: 'relative',
                paddingX: '25px',
            }}>
            <MotionFadeGrow delay={0.3}>
                <Image
                    alt="Laptop with overlaying SEO metrics"
                    src={contentHeaderDevices}
                    width={532}
                    height={477}
                    quality={100}
                />
            </MotionFadeGrow>
        </div>
    );
};
