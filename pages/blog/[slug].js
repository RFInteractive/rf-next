/* eslint-disable @next/next/no-img-element */
/** @jsxImportSource theme-ui */
import Head from 'next/head';
import { Container, Grid } from 'theme-ui';

import AppHeader from '../../components/sections/AppHeader';
import { client } from '../../lib/apollo';
import {
    QUERY_ALL_POST_SLUGS,
    QUERY_POST_BY_SLUG,
    QUERY_RELATED_POSTS,
} from '../../lib/queries';
import { formatPostsForBlogCard } from '../../lib/formatting';
import BlogCard from '../../components/cards/BlogCard';

const BlogPost = ({ post, relatedPosts }) => {
    return (
        <div>
            <Head>
                <title>{post.title} | Rank Fuse Digital Marketing</title>
                <meta name="description" content={post.excerpt} />
            </Head>

            <AppHeader
                type={'large'}
                centerColumnContent={<BlogPostHeader post={post} />}
            />

            <main
                sx={{
                    variant: 'wrappers.blogWrapper',
                    marginTop: ['-100px', '-150px', '-375px', '-375px'],
                    mb: '75px',
                    zIndex: '500',
                }}
            >
                <Container
                    sx={{
                        maxWidth: '960px',
                        px: '30px',
                    }}
                >
                    <img
                        src={post.featuredImg}
                        alt={`Featured image for ${post.title}`}
                        sx={{
                            width: '100%',
                            objectFit: 'cover',
                            height: '100%',
                            maxHeight: ['350px', '450px', '550px', '550px'],
                        }}
                    />
                    <section
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    ></section>
                </Container>
            </main>
            <section>
                <Container
                    sx={{
                        maxWidth: '1160px',
                        padding: '50px 30px 75px',
                    }}
                >
                    <h2 sx={{ variant: 'text.h2', mb: '30px' }}>
                        Related Posts
                    </h2>
                    <Grid
                        columns={[1, 2, 3, 3]}
                        gap={['40px', '40px', '10px', '10px']}
                    >
                        {relatedPosts.map((post) => (
                            <BlogCard key={post.uri} post={post}></BlogCard>
                        ))}
                    </Grid>
                </Container>
            </section>
        </div>
    );
};

export default BlogPost;

const BlogPostHeader = ({ post }) => {
    return (
        <div
            sx={{
                paddingTop: ['200px', '125px', '250px', '100px'],
                paddingBottom: ['200px', '150px', '425px', '250px'],
            }}
        >
            <Container
                sx={{
                    maxWidth: '900px',
                    paddingRight: ['10px', '125px', '150px', '225px'],
                }}
            >
                <h1
                    sx={{
                        variant: 'text.h1',
                        color: '#fff',
                    }}
                >
                    {post.title}
                </h1>
            </Container>
        </div>
    );
};

export async function getStaticPaths() {
    const postsSlugs = await client.query({ query: QUERY_ALL_POST_SLUGS });

    const paths = postsSlugs.data.posts.nodes.map((post) => ({
        params: { slug: post.slug },
    }));

    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    const post = await client.query({
        query: QUERY_POST_BY_SLUG,
        variables: {
            SLUG: params.slug,
        },
    });

    const formattedPost = formatPostForPage(post.data.postBy);

    const relatedPostsData = await client.query({
        query: QUERY_RELATED_POSTS,
        variables: {
            categoryName: formattedPost.relatedCategory,
        },
    });

    let relatedPosts = formatPostsForBlogCard(
        relatedPostsData.data.posts.nodes
    );

    relatedPosts = relatedPosts
        .filter((post) => post.title !== formattedPost.title)
        .slice(0, 3);

    return {
        props: {
            post: formattedPost,
            relatedPosts: relatedPosts,
        },
    };
}

const formatPostForPage = (post) => {
    return {
        title: post.title,
        author: post.author.node.name,
        date: new Date(post.date)
            .toDateString()
            .split(' ')
            .slice(1, 4)
            .join(' '),
        categories: post.categories.nodes
            .map((category) => category.name)
            .join(', '),
        featuredImg: post.featuredImage
            ? post.featuredImage.node.sourceUrl
            : 'https://rankfuse.com/wp-content/uploads/2020/05/rf-team-photo-300x164.jpg',
        content: post.content,
        relatedCategory: post.categories.nodes[0].name,
        excerpt: post.excerpt.slice(0, 120).replace('<p>', ''),
    };
};
