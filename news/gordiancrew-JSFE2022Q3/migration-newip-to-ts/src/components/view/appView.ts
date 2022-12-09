import { IArticle, IArticles, IArticleSource, INewsAPI, INewsSorse  } from './../../types/index';
import News from './news/news';
import Sources from './sources/sources';

export class AppView {
    news: News;
    sources: Sources;
    
    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data:any|undefined):void {
        const values:IArticle[] = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    drawSources(data:INewsAPI|undefined) {
        const values:INewsSorse[] = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
