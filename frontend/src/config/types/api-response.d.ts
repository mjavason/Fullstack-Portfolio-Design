interface ISuccessResponse<T = void> {
  success: boolean;
  message: string;
  data: T;
}

interface IPaginatedResponse<T> {
  status: number;
  message: string;
  data: {
    items: T[];
    page: number;
    pageSize: number;
    totalCount: number;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
  };
}

interface IErrorResponse {
  success: boolean;
  status: number;
  error: string;
  errors: string[];
}
