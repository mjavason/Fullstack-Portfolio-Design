interface ISuccessResponse<T = void> {
  success: boolean;
  message: string;
  data: T;
  pagination?: {
    hasNextPage: boolean;
    totalPages: number;
    totalCount: number;
    nextPage: null | number;
    hasPreviousPage: boolean;
  };
}

interface IErrorResponse {
  success: boolean;
  status: number;
  error: string;
  errors: string[];
}
