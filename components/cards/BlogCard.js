/* eslint-disable @next/next/no-img-element */
/** @jsxImportSource theme-ui */
import Link from 'next/link';
import { Flex } from 'theme-ui';

const BlogCard = ({ post }) => {
    return (
        <Link href={post.uri} passHref>
            <div
                sx={{
                    padding: '25px',
                    borderRadius: '20px',
                    boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.12)',
                    backgroundColor: 'muted',
                    marginTop: '50px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    '&:hover': {
                        cursor: 'pointer',
                        transform: 'scale(1.02)',
                        transition: 'all 0.2s ease-out',
                    },
                }}
            >
                <img
                    src={post.featuredImg}
                    alt={`Featured image for post titled "${post.title}"`}
                    sx={{
                        width: '100%',
                        height: '245px',
                        objectFit: 'cover',
                        marginTop: '-65px',
                        borderRadius: '10px',
                        boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.12)',
                        marginBottom: '20px',
                    }}
                />

                <h3
                    sx={{
                        variant: 'text.h3',
                        fontSize: '24px',
                        marginBottom: '20px',
                    }}
                >
                    {post.title}
                </h3>

                <div
                    dangerouslySetInnerHTML={{ __html: post.excerpt }}
                    sx={{ mb: '30px', fontSize: '18px' }}
                ></div>

                <hr sx={{ my: '10px', borderTop: '#a9a9a9' }}></hr>

                <Flex sx={{ justifyContent: 'space-between' }}>
                    <div>
                        <p sx={{ fontSize: '14px', color: '#a9a9a9' }}>
                            {post.author}
                        </p>
                    </div>
                    <div>
                        <p sx={{ fontSize: '14px', color: '#a9a9a9' }}>
                            {post.date}
                        </p>
                    </div>
                </Flex>
            </div>
        </Link>
    );
};

export default BlogCard;
