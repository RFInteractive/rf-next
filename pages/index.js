/** @jsxImportSource theme-ui */
import Head from 'next/head';
import Image from 'next/image';
import { Button } from 'theme-ui';

import AppHeader from '../components/sections/appHeader';
import headerDevices from '../public/images/homepage-header-devices.png';
import WhatWeDoRow from '../components/sections/appWhatWeDo';
import ServicesBenefitsRow from '../components/sections/appServiceBenefitsRow';
import WhyUsRow from '../components/sections/appWhyUsRow';
import AboutUsRow from '../components/sections/home/aboutUsRow';
import TestimonialCarousel from '../components/sections/appTestimonialCarousel';

const Home = () => {
    return (
        <>
            <Head>
                <title>Rank Fuse Digital Marketing</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <AppHeader
                leftColumnContent={HeaderLeftColumnContent()}
                rightColumnContent={HeaderRightColumnContent()}
            />

            <main>
                <ServicesBenefitsRow />
                <WhatWeDoRow />
                <WhyUsRow />
                <AboutUsRow />
                <TestimonialCarousel />
            </main>
        </>
    );
};

const HeaderLeftColumnContent = () => {
    return (
        <div
            sx={{
                paddingTop: ['125px', '150px', '50px', '30px'],
                paddingBottom: ['150px', '225px', '30px', '30px'],
                paddingLeft: ['0px', '6%', '0px', '0px'],
                paddingRight: ['0px', '12%', '0px', '25px'],
            }}
        >
            <h1
                sx={{
                    variant: 'text.h1',
                    color: '#fff',
                }}
            >
                Rank Higher,
                <br /> Convert More,
                <br /> & Engage with Users
            </h1>
            <h4
                sx={{
                    variant: 'text.h4',
                    color: '#fff',
                    marginTop: '30px',
                    marginBottom: '40px',
                    fontSize: '24px',
                }}
            >
                We help businesses grow through high quality SEO, targeted
                content, and engaging websites.
            </h4>
            <Button variant="light">Let&apos;s Work Together</Button>
        </div>
    );
};

const HeaderRightColumnContent = () => {
    return (
        <div
            sx={{
                display: 'grid',
                justifyItems: 'center',
                position: 'relative',
                pb: '30px',
            }}
            className="boxShadowRight"
        >
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

export default Home;
