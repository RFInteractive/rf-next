/* eslint-disable @next/next/no-img-element */
/** @jsxImportSource theme-ui */
import Head from 'next/head';

import AppHeader from '../../components/sections/AppHeader';
import TestimonialCarousel from '../../components/sections/AppTestimonialCarousel';
import CTARow from '../../components/sections/AppCTARow';
import AboutIntroStats from '../../components/sections/about/AboutIntro';
import MeetTheTeam from '../../components/sections/about/MeetTheTeam';
import Certifications from '../../components/sections/about/Certs';

const About = () => {
    return (
        <>
            <Head>
                <title>
                    Content Strategy from Top Experts | Rank Fuse Digital
                    Marketing
                </title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
            </Head>

            <AppHeader
                centerColumnContent={AboutCenterColumn()}
                type={'small'}
            />

            <main>
                <AboutIntroStats />
                <MeetTheTeam />
                <TestimonialCarousel />
                <Certifications />
                <CTARow
                    heading="Stand Out in the Crowd"
                    subheading="Take advantage of our free tools"
                ></CTARow>
            </main>
        </>
    );
};

export default About;

const AboutCenterColumn = () => {
    return (
        <div
            sx={{
                paddingTop: ['200px', '200px', '125px', '200px'],
                paddingBottom: ['100px', '75px', '50px', '50px'],
                paddingLeft: ['0px', '6%', '0px', '0px'],
                paddingRight: ['0px', '12%', '0px', '25px'],
            }}
        >
            <h1
                sx={{
                    color: '#fff',
                    marginBottom: '20px',
                }}
            >
                About Rank Fuse
            </h1>
        </div>
    );
};
