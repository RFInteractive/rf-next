export const formatPostsForBlogCard = (posts) => {
    return posts.map((post) => {
        return {
            uri: post.uri,
            title: post.title,
            author: post.author.node.name,
            date: new Date(post.date)
                .toDateString()
                .split(' ')
                .slice(1, 4)
                .join(' '),
            excerpt: `${post.excerpt.replace(/^(.{80}[^\s]*).*/, '$1')}...</p>`,
            featuredImg: post.featuredImage
                ? post.featuredImage.node.sourceUrl
                : 'https://rankfuse.com/wp-content/uploads/2020/05/rf-team-photo-300x164.jpg',
        };
    });
};
