import { IResponseNews, IResponseSource } from '../../interfaces/interfaces';
import { AppController } from '../controller/controller';
import { AppView } from '../view/appView';

class App {
  private controller: AppController;

  constructor() {
    this.controller = new AppController();
  }

  start() {
    document
      .querySelector('.sources')!
      .addEventListener('click', (e: Event) => this.controller.getNews(e, (data: IResponseNews) => AppView.drawNews(data)));
    this.controller.getSources((data: IResponseSource) => AppView.drawSources(data));
  }
}

export default App;
