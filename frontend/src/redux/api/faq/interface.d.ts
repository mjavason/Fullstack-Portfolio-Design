interface IFAQ {
  id: string;
  question: string;
  answer: string;
  type: string;
}

interface IQuery {
  Search: string;
  Page?: number;
  PageSize?: number;
}
