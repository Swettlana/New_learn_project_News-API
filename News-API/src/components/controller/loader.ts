import { Callback, IOptions, IResponseOptions } from '../../interfaces/interfaces';

export class Loader {
  constructor(public baseLink: string, public options: IOptions) {
    this.baseLink = baseLink;
    this.options = options;
  }

  makeUrl(options: IOptions, endpoint: string): string {
    const urlOptions = { ...this.options, ...options };
    let url = `${this.baseLink}${endpoint}?`;

    Object.keys(urlOptions).forEach((key) => {
      url += `${key}=${urlOptions[key as keyof typeof urlOptions]}&`;
    });

    return url.slice(0, -1);
  }

  static errorHandler(res: Response): Response {
    if (!res.ok) {
      if (res.status === 401 || res.status === 404) {
        console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
      }
      throw Error(res.statusText);
    }
    return res;
  }

  load(method: string, endpoint: string, callback: Callback, options: IOptions = {}) {
    fetch(this.makeUrl(options, endpoint), { method })
      .then(Loader.errorHandler)
      .then((res) => res.json())
      .then((data) => callback(data))
      .catch((err) => console.error(err));
  }

  getResp(
    { endpoint, options = {} }: IResponseOptions,
    callback: Callback = () => {
      console.error('No callback for GET response');
    },
  ): void {
    this.load('GET', endpoint, callback, options);
  }
}
