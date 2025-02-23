const paths = {
  home: '/',
  blog: '/blog',
  work: '/work',
  blogDetails: (postId: string) => `/blog/${postId}`,
  workDetails: (workId: string) => `/work/${workId}`,
  adminDashboard: '/admin',
  adminUpdatePost: (postId: string) => `/admin/posts/${postId}/edit`,
  adminUpdateWork: (workId: string) => `/admin/works/${workId}/edit`,
  adminUpdateSocialMediaLinks: '/admin/social-media-links',
};

export default paths;
