/* eslint-disable @next/next/no-img-element */
/** @jsxImportSource theme-ui */
import { Container, Grid, Button, Flex, Spinner } from 'theme-ui';
import Head from 'next/head';
import { useState } from 'react';

import BlogCard from '../../components/cards/BlogCard';
import AppHeader from '../../components/sections/AppHeader';
import { client } from '../../lib/apollo';
import { QUERY_RECENT_POSTS } from '../../lib/queries';
import { formatPostsForBlogCard } from '../../lib/formatting';
import { blogSEO } from '../../lib/seo';

const BlogFeed = ({ posts }) => {
    const [state, setState] = useState({
        blogPosts: posts,
        page: 1,
        loadingState: 'More Posts',
        hasMore: true,
    });

    const loadMorePosts = async () => {
        if (!state.hasMore) {
            return;
        }

        setState({ ...state, loadingState: 'Loading' });

        const newPosts = await getPosts(state.page + 1);
        const formattedNewPosts = formatPostsForBlogCard(
            newPosts.data.posts.nodes
        );
        setState((prevState) => {
            if (formattedNewPosts.length === prevState.blogPosts.length) {
                return {
                    ...prevState,
                    hasMore: false,
                };
            }
            return {
                ...prevState,
                blogPosts: formattedNewPosts,
                page: prevState.page + 1,
                loadingState: 'More Posts',
            };
        });
    };

    return (
        <div>
            <Head>
                <title>{blogSEO.title}</title>
                <meta name="description" content={blogSEO.description} />
                <meta property="og:type" content="website" />
                <meta property="og:title" content={blogSEO.title} />
                <meta property="og:description" content={blogSEO.description} />
                <meta property="og:url" content={blogSEO.ogUrl} />
                <meta
                    property="og:image"
                    content="/images/RankFuse-OG-Img.jpg"
                />
            </Head>

            <AppHeader
                type={'small'}
                leftColumnContent={BlogFeedHeaderLeftColumn()}
            />

            <main>
                <Container
                    sx={{
                        maxWidth: ['450px', '900px', '1290px'],
                        padding: '50px 20px 100px',
                    }}>
                    <Grid
                        columns={[1, 2, 3, 3]}
                        gap={['40px', '40px', '40px', '60px']}>
                        {state.blogPosts.map((post) => (
                            <BlogCard key={post.uri} post={post}></BlogCard>
                        ))}
                    </Grid>
                </Container>
                <Flex sx={{ justifyContent: 'center', mb: '50px' }}>
                    {state.hasMore ? (
                        <Button
                            variant="primary"
                            onClick={loadMorePosts}
                            sx={{ display: 'flex', alignItems: 'center' }}>
                            {state.loadingState}
                            {showLoader(state.loadingState)}
                        </Button>
                    ) : (
                        <Button>All Posts Loaded!</Button>
                    )}
                </Flex>
            </main>
        </div>
    );
};

export const getStaticProps = async () => {
    const result = await getPosts();

    const posts = formatPostsForBlogCard(result.data.posts.nodes);

    return {
        props: {
            posts,
        },
    };
};

export default BlogFeed;

const BlogFeedHeaderLeftColumn = () => {
    return (
        <div
            sx={{
                paddingTop: ['175px', '175px', '200px', '200px'],
                paddingBottom: ['100px', '75px', '100px', '50px'],
                paddingLeft: ['0px', '6%', '0px', '0px'],
                paddingRight: ['0px', '12%', '0px', '25px'],
            }}>
            <h1
                sx={{
                    color: '#fff',
                    marginBottom: '20px',
                }}>
                Recent Posts
            </h1>
        </div>
    );
};

const getPosts = (pageNum = 1) => {
    return client.query({
        query: QUERY_RECENT_POSTS,
        variables: {
            numPosts: pageNum * 9,
        },
    });
};

const showLoader = (loadingState) => {
    if (loadingState === 'Loading') {
        return <Spinner color={'text'} size={20} sx={{ marginLeft: '12px' }} />;
    }
    return null;
};
