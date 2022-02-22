/* eslint-disable @next/next/no-img-element */
/** @jsxImportSource theme-ui */
import { Button } from 'theme-ui';
import Head from 'next/head';
import Image from 'next/image';

import AppHeader from '../../components/sections/AppHeader';
import aboutHeaderDevices from '../../public/images/about-header-devices.png';
import CheckListItem from '../../components/CheckListItem';
import SEOIntroStats from '../../components/sections/seo/SeoIntroStats';
import SEOProcess from '../../components/sections/seo/SeoProcess';
import TestimonialCarousel from '../../components/sections/AppTestimonialCarousel';
import OnPageSEO from '../../components/sections/seo/OnPageSEO';
import OffPageSEO from '../../components/sections/seo/OffPageSEO';
import LocalSEO from '../../components/sections/seo/LocalSEO';
import AnalyticsReportingRow from '../../components/sections/seo/AnalyticsReporting';
import CTARow from '../../components/sections/AppCTARow';
import { seoServicesSEO } from '../../lib/seo';

const SEOServices = () => {
    return (
        <div>
            <Head>
                <title>{seoServicesSEO.title}</title>
                <meta name="description" content={seoServicesSEO.description} />
                <meta property="og:type" content="website" />
                <meta property="og:title" content={seoServicesSEO.title} />
                <meta
                    property="og:description"
                    content={seoServicesSEO.description}
                />
                <meta property="og:url" content={seoServicesSEO.ogUrl} />
                <meta
                    property="og:image"
                    content="/images/RankFuse-OG-Img.jpg"
                />
            </Head>

            <AppHeader
                leftColumnContent={SEOServicesLeftColumn()}
                rightColumnContent={SEOServicesRightColumn()}
            />

            <main>
                <SEOIntroStats />
                <SEOProcess />
                <TestimonialCarousel />
                <OnPageSEO />
                <OffPageSEO />
                <LocalSEO />
                <AnalyticsReportingRow />
                <CTARow
                    heading="Stand Out in the Crowd"
                    subheading="Take advantage of our free tools"></CTARow>
            </main>
        </div>
    );
};

export default SEOServices;

const SEOServicesLeftColumn = () => {
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
                Not Getting the<br></br>
                Traffic You Deserve?
            </h1>
            <CheckListItem bgColor="#fff" checkmarkColor="primary">
                <p sx={{ color: '#fff', fontSize: '24px', marginLeft: '10px' }}>
                    Increase your traffic
                </p>
            </CheckListItem>
            <CheckListItem bgColor="#fff" checkmarkColor="primary">
                <p sx={{ color: '#fff', fontSize: '24px', marginLeft: '10px' }}>
                    Monthly insights & reports
                </p>
            </CheckListItem>
            <CheckListItem bgColor="#fff" checkmarkColor="primary">
                <p sx={{ color: '#fff', fontSize: '24px', marginLeft: '10px' }}>
                    Get more qualified leads
                </p>
            </CheckListItem>
            <Button variant="light" sx={{ marginTop: '20px' }}>
                Let&apos;s Work Together
            </Button>
        </div>
    );
};

const SEOServicesRightColumn = () => {
    return (
        <div
            sx={{
                display: 'grid',
                justifyItems: 'center',
                position: 'relative',
                pt: '50px',
                paddingX: '25px',
            }}>
            <Image
                alt="Laptop with overlaying SEO metrics"
                src={aboutHeaderDevices}
                width={900}
                height={740}
                quality={100}
            />
        </div>
    );
};
