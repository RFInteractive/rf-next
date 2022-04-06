/** @jsxImportSource theme-ui */
import Head from 'next/head';
import Image from 'next/image';
import { Button, Container, Grid } from 'theme-ui';
import { useState } from 'react';

import AppHeader from '../components/sections/AppHeader';
import headerDevices from '../public/images/homepage-header-devices.png';
import WhatWeDoRow from '../components/sections/AppWhatWeDo';
import ServicesBenefitsRow from '../components/sections/AppServiceBenefitsRow';
import WhyUsRow from '../components/sections/AppWhyUsRow';
import AboutUsRow from '../components/sections/home/AboutUsRow';
import TestimonialCarousel from '../components/sections/AppTestimonialCarousel';
import CTARow from '../components/sections/AppCTARow';

import MotionFadeGrow from '../components/animations/MotionFadeGrow';
import GeneralMultiStep from '../components/forms/GeneralMultiStep/GeneralMultiStep';
import { homepageSEO } from '../lib/seo';

import { formatPostsForBlogCard } from '../lib/formatting';
import { client } from '../lib/apollo';
import { QUERY_RECENT_POSTS } from '../lib/queries';
import BlogCard from '../components/cards/BlogCard';

const Home = ({ posts }) => {
    return (
        <>
            <Head>
                <title>{homepageSEO.title}</title>
                <meta name="description" content={homepageSEO.description} />
                <meta property="og:type" content="website" />
                <meta property="og:title" content={homepageSEO.title} />
                <meta
                    property="og:description"
                    content={homepageSEO.description}
                />
                <meta property="og:url" content="https://rankfuse.com" />
                <meta
                    property="og:image"
                    content="/images/RankFuse-OG-Img.jpg"
                />
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
                <Container
                    sx={{
                        maxWidth: ['450px', '900px', '1290px'],
                        padding: '50px 20px 100px',
                    }}>
                    <h2 sx={{ textAlign: 'center', marginBottom: '40px' }}>
                        Recent Posts
                    </h2>
                    <Grid
                        columns={[1, 2, 3, 3]}
                        gap={['40px', '40px', '40px', '60px']}>
                        {posts.map((post) => (
                            <BlogCard key={post.uri} post={post}></BlogCard>
                        ))}
                    </Grid>
                </Container>
                <CTARow
                    heading="Stand Out in the Crowd"
                    subheading="Take advantage of our free tools"></CTARow>
            </main>
        </>
    );
};

const HeaderLeftColumnContent = () => {
    const [showForm, setShowForm] = useState(false);

    if (showForm) {
        return (
            <div
                sx={{
                    paddingTop: ['150px', '125px', '0px', '0px'],
                    paddingBottom: ['150px', '150px', '0px', '0px'],
                }}>
                <GeneralMultiStep formTextColor="light" />
            </div>
        );
    }

    return (
        <div
            sx={{
                paddingTop: ['150px', '125px', '150px', '30px'],
                paddingBottom: ['150px', '150px', '150px', '30px'],
                paddingLeft: ['0px', '6%', '0px', '0px'],
                paddingRight: ['0px', '12%', '0px', '25px'],
            }}>
            <h1
                sx={{
                    color: '#fff',
                }}>
                Rank Higher,
                <br /> Convert More,
                <br /> & Engage with Users
            </h1>
            <h4
                sx={{
                    color: '#fff',
                    marginTop: '30px',
                    marginBottom: '40px',
                    fontSize: '24px',
                }}>
                We help businesses grow through high quality SEO, targeted
                content, and engaging websites.
            </h4>
            <MotionFadeGrow delay={0.8}>
                <Button variant="light" onClick={() => setShowForm(true)}>
                    Let&apos;s Work Together
                </Button>
            </MotionFadeGrow>
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
                paddingBottom: '30px',
            }}
            className="boxShadowRight">
            <MotionFadeGrow delay={0.5}>
                <Image
                    alt="Laptop with overlaying SEO metrics"
                    src={headerDevices}
                    width={541}
                    height={399}
                    quality={100}
                />
            </MotionFadeGrow>
        </div>
    );
};

export default Home;

export const getStaticProps = async () => {
    const result = await client.query({
        query: QUERY_RECENT_POSTS,
        variables: {
            numPosts: 3,
        },
    });

    const posts = formatPostsForBlogCard(result.data.posts.nodes);

    return {
        props: {
            posts,
        },
    };
};
