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
    const [blogPosts, setBlogPosts] = useState(posts);
    const [page, setPage] = useState(1);
    const [loadingState, setLoadingState] = useState('More Posts');
    const [hasMore, setHasMore] = useState(true);

    const loadMorePosts = async () => {
        if (!hasMore) {
            return;
        }

        setLoadingState('Loading');

        const newPosts = await getPosts(page + 1);
        const formattedNewPosts = formatPostsForBlogCard(
            newPosts.data.posts.nodes
        );

        setBlogPosts((previousPosts) => {
            if (formattedNewPosts.length === previousPosts.length) {
                setHasMore(false);
                return previousPosts;
            }
            return formattedNewPosts;
        });

        setPage((currentPage) => currentPage + 1);
        setLoadingState('More Posts');
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
                        {blogPosts.map((post) => (
                            <BlogCard key={post.uri} post={post}></BlogCard>
                        ))}
                    </Grid>
                </Container>
                <Flex sx={{ justifyContent: 'center', mb: '50px' }}>
                    {hasMore ? (
                        <Button
                            variant="primary"
                            onClick={loadMorePosts}
                            sx={{ display: 'flex', alignItems: 'center' }}>
                            {loadingState}
                            {showLoader(loadingState)}
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
