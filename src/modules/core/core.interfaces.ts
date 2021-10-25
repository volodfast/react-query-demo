interface ApiListInfo {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}

export interface ApiListResponse<T> {
  info: ApiListInfo;
  results: T;
}
