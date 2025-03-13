export const paths = {
  home: '/', // Needs revalidation
  blog: '/blog', // Needs revalidation
  work: '/work', // Needs revalidation
  blogDetails: (postId: string) => `/blog/${postId}`,
  workDetails: (workId: string) => `/work/${workId}`,
  adminLogin: '/admin/sign-in',
  adminDashboard: '/admin', // Needs revalidation
  adminPosts: '/admin/posts',
  adminWorks: '/admin/works',
  adminCreatePost: '/admin/posts/create',
  adminUpdatePost: (postId: string) => `/admin/posts/${postId}/edit`,
  adminCreateWork: '/admin/works/create',
  adminUpdateWork: (workId: string) => `/admin/works/${workId}/edit`,
  adminUpdateSocialMediaLinks: '/admin/social-media-links', // Needs revalidation
};

export default paths;
