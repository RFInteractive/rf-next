/* eslint-disable @next/next/no-img-element */
/** @jsxImportSource theme-ui */
import Head from 'next/head';
import Image from 'next/image';
import { Grid, Container } from 'theme-ui';
import MotionFadeGrow from '../../components/animations/MotionFadeGrow';

import AppHeader from '../../components/sections/AppHeader';
import { client } from '../../lib/apollo';
import { QUERY_RECENT_POSTS_BY_AUTHOR } from '../../lib/queries';
import { formatPostsForBlogCard } from '../../lib/formatting';
import BlogCard from '../../components/cards/BlogCard';

const ChelseaRoller = ({ authorPosts }) => {
    return (
        <>
            <Head>
                <title>
                    Chelsea Roller: Account Manager, SEO & Content Marketing |
                    Rank Fuse
                </title>
                <meta
                    name="description"
                    content="Get to know our Account Manager & Content Marketing expert Chelsea Roller"
                />
            </Head>

            <AppHeader
                centerColumnContent={ChelseaRollerHeading()}
                type={'small'}
            />
            <main>
                <Container
                    sx={{
                        maxWidth: '1290px',
                        padding: '50px 0px',
                        mt: '-100px',
                    }}
                >
                    <Grid columns={[1, 1, '1fr 2fr', '1fr 2fr']} gap={20}>
                        <div
                            sx={{
                                '& div': { overflow: 'visible !important' },
                                '& img': {
                                    borderRadius: '50%',
                                    boxShadow:
                                        '0px 5px 20px rgba(0, 0, 0, 0.04)',
                                },
                                mb: '25px',
                                px: '25px',
                            }}
                        >
                            <Grid
                                rows={'min-content'}
                                sx={{ justifyItems: 'center' }}
                            >
                                <MotionFadeGrow>
                                    <Image
                                        src="/images/chelsea-roller-headshot.png"
                                        width={325}
                                        height={325}
                                        alt={`Image of Rank Fuse Digital Marketing content manager Chelsea Roller`}
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
                                    Chelsea Roller
                                </h3>
                                <h4
                                    sx={{
                                        color: 'text',
                                        textAlign: 'center',
                                        fontSize: '22px',
                                    }}
                                >
                                    Account Manager, SEO & Content Marketing
                                </h4>
                            </Grid>
                        </div>
                        <Grid
                            gap={15}
                            sx={{ px: '25px', gridTemplateRows: 'min-content' }}
                        >
                            <p>
                                Chelsea Roller is the SEO and Content Marketing
                                Account Manager at Rank Fuse Digital Marketing.
                                She graduated from the University of Kansas with
                                a degree in Journalism and a minor in
                                Linguistics in 2014. Since that time, she has
                                dedicated her professional life to writing
                                top-of-the-line content covering a wide range of
                                topics spanning from health and fitness to home
                                buying to precious metals and beyond. Her
                                interest in linguistics has also led her to
                                explore the nuances of language and grammar
                                further.
                            </p>
                            <p>
                                As an avid animal lover, Chelsea got a dog after
                                college—a Pomsky named Jacomo (Jock-uh-mo).
                                Having her own dog led her into the realm of pet
                                writing. To date, she has written over 150
                                articles about a variety of pet-related topics.
                            </p>
                            <p>
                                Even before she attended KU, Chelsea was a
                                Jayhawk basketball fan. During peak basketball
                                season, she sports KU gear almost daily (pun
                                definitely intended); in fact, her closet is
                                mostly crimson and blue.
                            </p>
                            <p>
                                When Chelsea isn’t in the office, she is
                                spending time with her son, husband, and dog and
                                exploring the KC food scene—especially sushi and
                                taco joints. Always seeking laughter, you can
                                also find Chelsea reading blogs and books by
                                author Jenny Lawson (also known as The Bloggess)
                                and watching Schitt’s Creek and Parks and Rec.
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
                    <h2 sx={{ mb: '30px' }}>Posts Written By Chelsea</h2>
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

export default ChelseaRoller;

const ChelseaRollerHeading = () => {
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
                Chelsea Roller
            </h1>
        </div>
    );
};

export async function getStaticProps() {
    const authorPostsData = await client.query({
        query: QUERY_RECENT_POSTS_BY_AUTHOR,
        variables: {
            authorName: 'Chelsea Roller',
        },
    });

    let authorPosts = formatPostsForBlogCard(authorPostsData.data.posts.nodes);

    return {
        props: {
            authorPosts,
        },
    };
}
