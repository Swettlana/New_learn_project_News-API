import { IResponseNews, IResponseSource } from '../../interfaces/interfaces';
import { News } from './news/news';
import { Sources } from './sources/sources';

export class AppView {
  static drawNews(data: IResponseNews) {
    const values = data?.articles ? data?.articles : [];
    News.draw(values);
  }

  static drawSources(data: IResponseSource) {
    const values = data?.sources ? data?.sources : [];
    Sources.draw(values);
  }
}
