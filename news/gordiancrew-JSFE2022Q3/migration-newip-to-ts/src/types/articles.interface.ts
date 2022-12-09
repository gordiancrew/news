export interface IArticles {
    filter(arg0: (_item: string, idx: number) => boolean): unknown;
    length: number;
    status: string;
    totalResults: number;
    articles: IArticle[];
}

export interface IArticle {
    source: IArticleSource;
    author: null | string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
}

export interface IArticleSource {
    id: null | string;
    name: string;
}
