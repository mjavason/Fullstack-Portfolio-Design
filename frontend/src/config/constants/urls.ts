import paths from './paths';

export const noAuthPaths = [paths.adminLogin];
export const publicPaths = [paths.home, paths.blog, paths.work];
export const authPaths = [
  paths.adminDashboard,
  paths.adminCreatePost,
  paths.adminCreateWork,
  paths.adminPosts,
  paths.adminWorks,
  paths.adminUpdateSocialMediaLinks,
];
