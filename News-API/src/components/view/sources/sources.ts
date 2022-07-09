import { ISourceItem } from '../../../interfaces/interfaces';
import './sources.css';

export class Sources {
  static draw(data: ISourceItem[]) {
    const fragment = document.createDocumentFragment();
    const sourceItemTemp = document.querySelector('#sourceItemTemp') as HTMLTemplateElement;

    data.forEach((item: ISourceItem) => {
      const sourceClone = sourceItemTemp!.content.cloneNode(true) as Element;

      sourceClone.querySelector('.source__item-name')!.textContent = item.name;
      sourceClone.querySelector('.source__item')!.setAttribute('data-source-id', item.id);

      fragment.append(sourceClone);
    });

    document.querySelector('.sources')!.append(fragment);
  }
}
