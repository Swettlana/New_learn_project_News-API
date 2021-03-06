import { INewsItem } from '../../../interfaces/interfaces';
import './news.css';

export class News {
  static draw(data: INewsItem[]): void {
    const news: INewsItem[] = data.length >= 10 ? data.filter((_item: INewsItem, idx: number) => idx < 10) : data;

    const fragment: DocumentFragment = document.createDocumentFragment();
    const newsItemTemp = document.querySelector('#newsItemTemp') as HTMLTemplateElement;

    news.forEach((item: INewsItem, idx: number) => {
      const newsClone = newsItemTemp!.content.cloneNode(true) as Element;

      if (idx % 2) newsClone.querySelector('.news__item')!.classList.add('alt');

      (newsClone.querySelector('.news__meta-photo')! as HTMLElement).style.backgroundImage = `url(${
        item.urlToImage || 'img/news_placeholder.jpg'
      })`;
      newsClone.querySelector('.news__meta-author')!.textContent = item.author || item.source.name;
      newsClone.querySelector('.news__meta-date')!.textContent = item.publishedAt
        .slice(0, 10)
        .split('-')
        .reverse()
        .join('-');

      newsClone.querySelector('.news__description-title')!.textContent = item.title;
      newsClone.querySelector('.news__description-source')!.textContent = item.source.name;
      newsClone.querySelector('.news__description-content')!.textContent = item.description;
      newsClone.querySelector('.news__read-more a')!.setAttribute('href', item.url);

      fragment.append(newsClone);
    });

    document.querySelector('.news')!.innerHTML = '';
    document.querySelector('.news')!.appendChild(fragment);
  }
}
