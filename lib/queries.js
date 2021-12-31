import { gql } from '@apollo/client';

export const QUERY_ALL_POSTS = gql`
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
                categories {
                    nodes {
                        name
                    }
                }
            }
        }
    }
`;
