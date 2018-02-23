import Config from './Config';

export class BaseConfig implements Config {

    public devServerPort = 8081;

    public localStorage = {
        contentKey: 'content',
    };
}

export default new BaseConfig();
