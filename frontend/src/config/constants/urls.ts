import paths from './paths';

export const noAuthPaths: string[] = [paths.adminLogin];
export const publicPaths: string[] = [paths.home, paths.blog, paths.work];
export const authPaths: string[] = [
  paths.adminDashboard,
  paths.adminCreatePost,
  paths.adminCreateWork,
  paths.adminPosts,
  paths.adminWorks,
  paths.adminUpdateSocialMediaLinks,
];
