import Config from './Config';

export class BaseConfig implements Config {

    public devServerPort = 8081;
}

export default new BaseConfig();
