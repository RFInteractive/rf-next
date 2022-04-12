import { client } from '../lib/apollo';
import { QUERY_ALL_POST_SLUGS } from '../lib/queries';

const Sitemap = () => {
    return null;
};

export const getServerSideProps = async ({ res }) => {
    const BASE_URL = 'https://rankfuse.com';

    // get all files in the /pages directory
    const staticPaths = [
        'about',
        'blog',
        'contact-us',
        'paid-search',
        'programmatic-advertising',
        'seo-content',
        'seo-services',
        'social-advertising',
        'web-design-and-development',
        'privacy-policy',
        'cookie-policy',
    ].map((staticPagePath) => {
        return `${BASE_URL}/${staticPagePath}`;
    });

    // add homepage to the beginning
    staticPaths.unshift(`${BASE_URL}/`);

    // get all blog post slugs from GraphQL
    const dynamicPathResponse = await client.query({
        query: QUERY_ALL_POST_SLUGS,
    });

    const dynamicPathData = dynamicPathResponse.data.posts.nodes;

    // map through and add base URL to blog slugs
    const dynamicPaths = dynamicPathData.map((path) => {
        return `${BASE_URL}/blog/${path.slug}`;
    });

    // merge static and dynamic paths
    const allPaths = [...staticPaths, ...dynamicPaths];

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
          ${allPaths
              .map((url) => {
                  return `
                <url>
                  <loc>${url}</loc>
                  <lastmod>${new Date().toISOString()}</lastmod>
                  <changefreq>monthly</changefreq>
                  <priority>1.0</priority>
                </url>
              `;
              })
              .join('')}
        </urlset>
      `;

    res.setHeader('Content-Type', 'text/xml');
    res.write(sitemap);
    res.end();

    return {
        props: {},
    };
};

export default Sitemap;
