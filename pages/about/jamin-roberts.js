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
import { jaminSEO } from '../../lib/seo';

const JaminRoberts = ({ authorPosts }) => {
    return (
        <>
            <Head>
                <title>{jaminSEO.title}</title>
                <meta name="description" content={jaminSEO.description} />
                <meta property="og:type" content="website" />
                <meta property="og:title" content={jaminSEO.title} />
                <meta
                    property="og:description"
                    content={jaminSEO.description}
                />
                <meta property="og:url" content={jaminSEO.ogUrl} />
            </Head>

            <AppHeader
                centerColumnContent={JaminRobertsHeading()}
                type={'small'}
            />
            <main>
                <Container
                    sx={{
                        maxWidth: '1290px',
                        padding: '50px 0px',
                        mt: '-100px',
                    }}>
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
                            }}>
                            <Grid sx={{ justifyItems: 'center' }}>
                                <MotionFadeGrow>
                                    <Image
                                        src="/images/jamin-roberts-headshot.png"
                                        width={325}
                                        height={325}
                                        alt={`Image of Rank Fuse Digital Marketing web developer Jamin Roberts`}
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
                                    }}>
                                    Jamin Roberts
                                </h3>
                                <h4
                                    sx={{
                                        color: 'text',
                                        textAlign: 'center',
                                        fontSize: '22px',
                                    }}>
                                    Web Developer
                                </h4>
                            </Grid>
                        </div>
                        <Grid
                            gap={15}
                            sx={{
                                px: '25px',
                                gridTemplateRows: 'min-content',
                            }}>
                            <p>
                                Jamin started programming in 2016, where he
                                became enamored with JavaScript and front-end
                                web development in general. His major focus is
                                in JS frameworks like React and Vue, and
                                back-end frameworks like Node JS. Like many
                                developers, Jamin picked up working knowledge of
                                PHP and WordPress along the way before joining
                                Rank Fuse in 2017 as their Webmaster/Developer.
                            </p>
                            <p>
                                By combining this working knowledge of WordPress
                                with the latest and greatest meta frameworks
                                like Next JS and Nuxt JS, he&apos;s become an
                                expert in headless WordPress. In the last five
                                years, he has added a great deal of SEO
                                experience and knowledge to his repertoire as
                                well.
                            </p>
                            <p>
                                <strong>Favorite progamming language</strong>:
                                JavaScript 💗. Python is cool too.
                            </p>
                            <p>
                                <strong>Hobbies</strong>: Hiking, long walks
                                with his wife and dog, and recently... home
                                renovation 😒
                            </p>
                            <p>
                                <strong>
                                    Would you rather spend a week in the forest
                                    or a night in a real haunted house?
                                </strong>
                                : Forest. That&apos;s just called camping...
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
                    }}>
                    <h2 sx={{ mb: '30px' }}>Posts Written By Jamin</h2>
                    <Grid
                        columns={[1, 2, 3, 3]}
                        gap={['40px', '40px', '10px', '10px']}>
                        {authorPosts.map((post) => (
                            <BlogCard key={post.uri} post={post}></BlogCard>
                        ))}
                    </Grid>
                </Container>
            </section>
        </>
    );
};

export default JaminRoberts;

const JaminRobertsHeading = () => {
    return (
        <div
            sx={{
                paddingTop: ['200px', '200px', '125px', '200px'],
                paddingBottom: ['100px', '75px', '50px', '50px'],
                paddingLeft: ['0px', '6%', '0px', '0px'],
                paddingRight: ['0px', '12%', '0px', '25px'],
            }}>
            <h1
                sx={{
                    color: '#fff',
                    marginBottom: '20px',
                }}>
                Jamin Roberts
            </h1>
        </div>
    );
};

export async function getStaticProps() {
    const authorPostsData = await client.query({
        query: QUERY_RECENT_POSTS_BY_AUTHOR,
        variables: {
            authorName: 'Jamin Roberts',
        },
    });

    let authorPosts = formatPostsForBlogCard(authorPostsData.data.posts.nodes);

    return {
        props: {
            authorPosts,
        },
    };
}
