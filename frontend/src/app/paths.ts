/**
 * An object containing various application paths.
 *
 * @property {string} home - The path for the home page.
 * @property {string} blog - The path for the blog page.
 * @property {string} work - The path for the work page.
 * @property {(postId: string) => string} blogDetails - A function that returns the path for a specific blog post.
 * @property {(workId: string) => string} workDetails - A function that returns the path for a specific work item.
 * @property {string} adminDashboard - The path for the admin dashboard.
 * @property {(postId: string) => string} adminUpdatePost - A function that returns the path for editing a specific blog post in the admin dashboard.
 * @property {(workId: string) => string} adminUpdateWork - A function that returns the path for editing a specific work item in the admin dashboard.
 * @property {string} adminUpdateSocialMediaLinks - The path for updating social media links in the admin dashboard.
 */
const paths = {
  home: '/', // Needs revalidation
  blog: '/blog', // Needs revalidation
  work: '/work', // Needs revalidation
  blogDetails: (postId: string) => `/blog/${postId}`,
  workDetails: (workId: string) => `/work/${workId}`,
  adminDashboard: '/admin', // Needs revalidation
  adminUpdatePost: (postId: string) => `/admin/posts/${postId}/edit`,
  adminUpdateWork: (workId: string) => `/admin/works/${workId}/edit`,
  adminUpdateSocialMediaLinks: '/admin/social-media-links', // Needs revalidation
};

export default paths;
