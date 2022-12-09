export interface INewsAPI {
    status: string;
    sources: INewsSorse[];
}

export interface INewsSorse {
    id: string;
    name: string;
    description: string;
    url: string;
    category: string;
    language: string;
    country: string;
}
