/* eslint-disable @next/next/no-img-element */
/** @jsxImportSource theme-ui */
import Head from 'next/head';

import AppHeader from '../../components/sections/AppHeader';

const BlogFeed = () => {
    return (
        <div>
            <Head>
                <title>
                    Web Design and Development | Rank Fuse Digital Marketing
                </title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
            </Head>

            <AppHeader
                type={'small'}
                leftColumnContent={BlogFeedHeaderLeftColumn()}
            />

            <main></main>
        </div>
    );
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
