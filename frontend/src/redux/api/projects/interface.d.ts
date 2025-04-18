interface CreateProjectDTO {
  title: string;
  category: string;
  coverImage: string;
  summary: string;
  body: string;
  published: boolean;
}

interface IProjectQuery {
  category?: string;
  title?: string;
  published?: boolean;
  pagination_size?: number;
  pagination_page?: number;
}

interface IProject {
  published: boolean;
  title: string;
  category: string;
  coverImage: string;
  summary: string;
  body: string;
  createdAt: string;
  updatedAt: string;
  id: string;
}

interface IAdvancedProjectQuery {
  searchTerm?: string;
  fields?: (keyof IProject)[];
  pagination_size?: number;
  pagination_page?: number;
}
