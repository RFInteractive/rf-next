/* eslint-disable @next/next/no-img-element */
/** @jsxImportSource theme-ui */
import Head from 'next/head';
import Image from 'next/image';

import AppHeader from '../../components/sections/appHeader';
import aboutHeaderDevices from '../../public/images/about-header-devices.png';
import { Button } from 'theme-ui';
import CheckListItem from '../../components/checkListItem';
import SEOIntroStats from '../../components/sections/seo/seoIntroStats';
import SEOProcess from '../../components/sections/seo/seoProcess';
import TestimonialCarousel from '../../components/sections/appTestimonialCarousel';
import OnPageSEO from '../../components/sections/seo/onPageSEO';
import OffPageSEO from '../../components/sections/seo/offPageSEO';
import LocalSEO from '../../components/sections/seo/localSEO';
import AnalyticsReportingRow from '../../components/sections/seo/analyticsReporting';
import CTARow from '../../components/sections/appCTARow';

const SEOServices = () => {
    return (
        <div>
            <Head>
                <title>
                    SEO Services from Top Experts | Rank Fuse Digital Marketing
                </title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
            </Head>

            <AppHeader
                leftColumnContent={SEOContentLeftColumn()}
                rightColumnContent={SEOContentRightColumn()}
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
                    subheading="Take advantage of our free tools"
                ></CTARow>
            </main>
        </div>
    );
};

export default SEOServices;

const SEOContentLeftColumn = () => {
    return (
        <div
            sx={{
                paddingTop: ['125px', '125px', '150px', '30px'],
                paddingBottom: ['150px', '150px', '175px', '30px'],
                paddingLeft: ['0px', '6%', '0px', '0px'],
                paddingRight: ['0px', '12%', '0px', '25px'],
            }}
        >
            <h1
                sx={{
                    variant: 'text.h1',
                    color: '#fff',
                    marginBottom: '20px',
                }}
            >
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

const SEOContentRightColumn = () => {
    return (
        <div
            sx={{
                display: 'grid',
                justifyItems: 'center',
                position: 'relative',
                pt: '50px',
                paddingX: '25px',
            }}
        >
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
