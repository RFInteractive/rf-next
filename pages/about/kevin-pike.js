/* eslint-disable @next/next/no-img-element */
/** @jsxImportSource theme-ui */
import Head from 'next/head';
import Image from 'next/image';
import { useEffect } from 'react';
import { Grid, Container } from 'theme-ui';
import MotionFadeGrow from '../../components/animations/MotionFadeGrow';

import AppHeader from '../../components/sections/AppHeader';
import { client } from '../../lib/apollo';
import { QUERY_RECENT_POSTS_BY_AUTHOR } from '../../lib/queries';
import { formatPostsForBlogCard } from '../../lib/formatting';
import BlogCard from '../../components/cards/BlogCard';

const KevinPike = ({ authorPosts }) => {
    useEffect(() => {
        window.scroll({ top: 0, behavior: 'smooth' });
    }, []);

    return (
        <>
            <Head>
                <title>
                    Kevin Pike: President & Owner | Rank Fuse Digital Marketing
                </title>
                <meta
                    name="description"
                    content="Get to know the president and owner of Rank Fuse Digital Marketing: Kevin Pike"
                />
            </Head>

            <AppHeader
                centerColumnContent={KevinPikeHeading()}
                type={'small'}
            />
            <main>
                <Container
                    sx={{
                        maxWidth: '1290px',
                        padding: '50px 30px',
                        mt: '-100px',
                    }}
                >
                    <Grid columns={[1, 1, '1fr 1.5fr', '1fr 1.5fr']} gap={20}>
                        <div
                            sx={{
                                '& div': { overflow: 'visible !important' },
                                '& img': {
                                    borderRadius: '50%',
                                    boxShadow:
                                        '0px 5px 20px rgba(0, 0, 0, 0.04)',
                                },
                                mb: '25px',
                            }}
                        >
                            <Grid
                                rows={'min-content'}
                                sx={{ justifyItems: 'center' }}
                            >
                                <MotionFadeGrow>
                                    <Image
                                        src="/images/kevin-pike-headshot.png"
                                        width={325}
                                        height={325}
                                        alt={`Image of Rank Fuse Digital Marketing owner Kevin Pike`}
                                        quality={90}
                                    />
                                </MotionFadeGrow>
                                <h3
                                    sx={{
                                        color: 'text',
                                        textAlign: 'center',
                                        fontSize: '32px',
                                        fontWeight: '900',
                                        my: '15px',
                                    }}
                                >
                                    Kevin Pike
                                </h3>
                                <h4
                                    sx={{
                                        color: 'text',
                                        textAlign: 'center',
                                        fontSize: '22px',
                                    }}
                                >
                                    President/Owner
                                </h4>
                                <p sx={{ textAlign: 'center', mt: '30px' }}>
                                    kevin@rankfuse.com
                                </p>
                                <p sx={{ textAlign: 'center' }}>
                                    913.270.6770 x100
                                </p>
                            </Grid>
                        </div>
                        <Grid gap={15}>
                            <p>
                                Kevin Pike is the Owner and President of Rank
                                Fuse Digital Marketing located in Overland Park,
                                KS. He founded the search engine marketing
                                company in 2015 after a decade of experience
                                working with multiple advertising and marketing
                                agencies in the Kansas City area.
                            </p>
                            <p>
                                Throughout his career, Kevin has organizational
                                achievements including agency rankings on Inc
                                500’s list of fastest growing companies and
                                Ingrams Fastest Growing Companies. When Kevin
                                founded Rank Fuse Digital Marketing, his core
                                mission was to provided transparent and advanced
                                search engine marketing solutions to companies
                                and agencies looking for a digital marketing
                                partner.
                            </p>
                            <p>
                                Today, his team’s ability to plan and optimize
                                day-to-day has helped hundreds of businesses
                                grow their revenues and profits from online
                                sales and client acquisition. For companies
                                struggling with their online presence and
                                execution, Kevin’s ability to audit and improve
                                the status quo has been proven over and over
                                again.
                            </p>
                            <p>
                                Kevin’s professional passion is helping brands
                                evolve their marketing strategy. You may see him
                                speaking at marketing conferences and business
                                development seminars. He also has a wealth of
                                knowledge and experience he would be happy to
                                share with any company looking to take their
                                digital marketing plans to the next level.
                            </p>
                        </Grid>
                    </Grid>
                </Container>
            </main>
            <section id="authorPosts">
                <Container
                    sx={{
                        maxWidth: '1290px',
                        padding: '100px 30px 75px',
                    }}
                >
                    <h2 sx={{ mb: '30px' }}>Posts Written By Kevin</h2>
                    <Grid
                        columns={[1, 2, 3, 3]}
                        gap={['40px', '40px', '10px', '10px']}
                    >
                        {authorPosts.map((post) => (
                            <BlogCard key={post.uri} post={post}></BlogCard>
                        ))}
                    </Grid>
                </Container>
            </section>
        </>
    );
};

export default KevinPike;

const KevinPikeHeading = () => {
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
                Kevin Pike
            </h1>
        </div>
    );
};

export async function getStaticProps() {
    const authorPostsData = await client.query({
        query: QUERY_RECENT_POSTS_BY_AUTHOR,
        variables: {
            authorName: 'Kevin Pike',
        },
    });

    let authorPosts = formatPostsForBlogCard(authorPostsData.data.posts.nodes);

    return {
        props: {
            authorPosts,
        },
    };
}
