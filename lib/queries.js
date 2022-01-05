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

// export const QUERY_ALL_POSTS_BY_SLUG = gql``;

// export const QUERY_SINGLE_POST_BY_SLUG = gql``;

// export const QUERY_POSTS_BY_CATEGORY = gql``;

// export const QUERY_SEARCH_POSTS = gql``;
