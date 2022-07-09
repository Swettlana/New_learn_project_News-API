import { BaseOptions } from '../../enums/enum';
import { Loader } from './loader';

export class AppLoader extends Loader {
  constructor() {
    super(BaseOptions.url, {
      apiKey: BaseOptions.key,
    });
  }
}
