export interface IOptions {
  sources?: string;
  apiKey?: string;
}

export interface IResponseOptions {
  endpoint: string;
  options?: IOptions;
}

interface IDataNewsSource {
  id: string | null;
  name: string;
}
export interface INewsItem {
  source: IDataNewsSource;
  author: string | null;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}
export interface IResponseNews {
  status: string;
  totalResults: number;
  articles: Array<INewsItem>;
}

export type Callback = ((data: IResponseSource) => void) | ((data: IResponseNews) => void) | (() => void);
type SourceItemFields = 'id' | 'name' | 'description' | 'url' | 'urlToImage' | 'category' | 'language' | 'country';
export type ISourceItem = Record<SourceItemFields, string>;
export interface IResponseSource {
  status: string;
  sources: Array<ISourceItem>;
}
