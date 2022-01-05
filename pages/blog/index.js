/* eslint-disable @next/next/no-img-element */
/** @jsxImportSource theme-ui */
import { Container, Grid, Button, Flex } from 'theme-ui';
import Head from 'next/head';
import { useState } from 'react';

import BlogCard from '../../components/cards/BlogCard';
import AppHeader from '../../components/sections/AppHeader';
import { client } from '../../lib/apollo';
import { QUERY_RECENT_POSTS } from '../../lib/queries';
import { formatPostsForBlogCard } from '../../lib/formatting';

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
                <title>Blog Posts | Rank Fuse Digital Marketing</title>
                <meta
                    name="description"
                    content="Generated by create next app"
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
                    }}
                >
                    <Grid
                        columns={[1, 2, 3, 3]}
                        gap={['40px', '40px', '40px', '60px']}
                    >
                        {blogPosts.map((post) => (
                            <BlogCard key={post.uri} post={post}></BlogCard>
                        ))}
                    </Grid>
                </Container>
                <Flex sx={{ justifyContent: 'center', mb: '50px' }}>
                    {hasMore ? (
                        <Button variant="primary" onClick={loadMorePosts}>
                            {loadingState}
                        </Button>
                    ) : (
                        <Button>All Posts Loaded!</Button>
                    )}
                </Flex>
            </main>
        </div>
    );
};

export const getServerSideProps = async () => {
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
                paddingTop: ['125px', '125px', '200px', '200px'],
                paddingBottom: ['150px', '150px', '50px', '50px'],
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
