/* eslint-disable @next/next/no-img-element */
/** @jsxImportSource theme-ui */
import { Button } from 'theme-ui';
import Head from 'next/head';
import Image from 'next/image';

import AppHeader from '../../components/sections/AppHeader';
import headerDevices from '../../public/images/homepage-header-devices.png';
import CheckListItem from '../../components/CheckListItem';
import WebDevIntroStats from '../../components/sections/web-design-and-dev/WebDevIntroStats';
import WebDevProcess from '../../components/sections/web-design-and-dev/WebDevProcess';
import WebDesign from '../../components/sections/web-design-and-dev/WebDesign';
import FastSites from '../../components/sections/web-design-and-dev/FastSites';
import HeadlessWordPress from '../../components/sections/web-design-and-dev/HeadlessWordPress';
import TestimonialCarousel from '../../components/sections/AppTestimonialCarousel';
import CTARow from '../../components/sections/AppCTARow';
import { webDesignDevSEO } from '../../lib/seo';

const WebDesignAndDev = () => {
    return (
        <div>
            <Head>
                <title>{webDesignDevSEO.title}</title>
                <meta
                    name="description"
                    content={webDesignDevSEO.description}
                />
                <meta property="og:type" content="website" />
                <meta property="og:title" content={webDesignDevSEO.title} />
                <meta
                    property="og:description"
                    content={webDesignDevSEO.description}
                />
                <meta property="og:url" content={webDesignDevSEO.ogUrl} />
            </Head>

            <AppHeader
                leftColumnContent={WebDesignAndDevLeftColumn()}
                rightColumnContent={WebDesignAndDevRightColumn()}
            />

            <main>
                <WebDevIntroStats />
                <WebDevProcess />
                <TestimonialCarousel />
                <WebDesign />
                <FastSites />
                <HeadlessWordPress />
                <CTARow
                    heading="Stand Out in the Crowd"
                    subheading="Take advantage of our free tools"></CTARow>
            </main>
        </div>
    );
};

export default WebDesignAndDev;

const WebDesignAndDevLeftColumn = () => {
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
                Is Your Website<br></br>
                Not Performing?
            </h1>
            <CheckListItem bgColor="#fff" checkmarkColor="primary">
                <p sx={{ color: '#fff', fontSize: '24px', marginLeft: '10px' }}>
                    Double your site speed
                </p>
            </CheckListItem>
            <CheckListItem bgColor="#fff" checkmarkColor="primary">
                <p sx={{ color: '#fff', fontSize: '24px', marginLeft: '10px' }}>
                    Reach users on all devices
                </p>
            </CheckListItem>
            <CheckListItem bgColor="#fff" checkmarkColor="primary">
                <p sx={{ color: '#fff', fontSize: '24px', marginLeft: '10px' }}>
                    Increase your conversions
                </p>
            </CheckListItem>
            <Button variant="light" sx={{ marginTop: '20px' }}>
                Let&apos;s Work Together
            </Button>
        </div>
    );
};

const WebDesignAndDevRightColumn = () => {
    return (
        <div
            sx={{
                display: 'grid',
                justifyItems: 'center',
                position: 'relative',
                paddingX: '25px',
                paddingBottom: '75px',
            }}
            className="boxShadowRight">
            <Image
                alt="Laptop with overlaying SEO metrics"
                src={headerDevices}
                width={541}
                height={399}
                quality={100}
            />
        </div>
    );
};
