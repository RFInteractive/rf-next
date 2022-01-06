import { gql } from '@apollo/client';

export const QUERY_RECENT_POSTS = gql`
    query GetRecentPosts($numPosts: Int!) {
        posts(first: $numPosts) {
            nodes {
                uri
                title
                date
                excerpt
                featuredImage {
                    node {
                        sourceUrl(size: MEDIUM)
                    }
                }
                author {
                    node {
                        name
                    }
                }
            }
        }
    }
`;

export const QUERY_ALL_POST_SLUGS = gql`
    query GetAllPostSlugs {
        posts(first: 10000) {
            nodes {
                slug
            }
        }
    }
`;

export const QUERY_POST_BY_SLUG = gql`
    query GetPostBySlug($SLUG: String!) {
        postBy(slug: $SLUG) {
            title
            author {
                node {
                    name
                }
            }
            date
            categories {
                nodes {
                    name
                }
            }
            featuredImage {
                node {
                    sourceUrl(size: LARGE)
                }
            }
            content
            excerpt
        }
    }
`;

export const QUERY_RELATED_POSTS = gql`
    query GetRelatedPostsByCategory($categoryName: String!) {
        posts(first: 3, where: { categoryName: $categoryName }) {
            nodes {
                uri
                title
                date
                excerpt
                featuredImage {
                    node {
                        sourceUrl(size: MEDIUM)
                    }
                }
                author {
                    node {
                        name
                    }
                }
            }
        }
    }
`;

export const QUERY_SEARCH_ALL_POSTS = gql`
    query SearchPosts($numPosts: Int!, $query: String!) {
        posts(first: $numPosts, where: { search: $query }) {
            nodes {
                uri
                title
                date
                excerpt
                featuredImage {
                    node {
                        sourceUrl(size: MEDIUM)
                    }
                }
                author {
                    node {
                        name
                    }
                }
            }
        }
    }
`;
