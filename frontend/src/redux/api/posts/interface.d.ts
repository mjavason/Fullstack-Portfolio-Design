interface CreatePostDTO {
  title: string;
  categories: string[];
  summary: string;
  body: string;
  published: boolean;
}

interface IPostsQuery {
  title?: string;
  categories?: string[];
  published?: boolean;
  pagination_size?: number;
  pagination_page?: number;
}

interface IPost {
  id: string;
  title: string;
  categories: string[];
  summary: string;
  body: string;
  published: boolean;
  createdAt: string;
  updatedAt: string;
}
