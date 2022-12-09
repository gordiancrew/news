import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '53ba0b1050c5403385e3fdf05ea5b43e', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
