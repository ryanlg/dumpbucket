import Config from 'config/Config';
import DevelopmentConfig from 'config/DevelopmentConfig';
import EnvConstants from 'build/env.constants';
import MockConfig from 'config/MockConfig';

let exportConfig: Config;

if (process.env.NODE_ENV === EnvConstants.dev) {

    exportConfig = DevelopmentConfig;
} else if (process.env.NODE_ENV === EnvConstants.mock) {

    exportConfig = MockConfig; 
} else {

    // TODO: new config
    exportConfig = DevelopmentConfig;
}

export default exportConfig;
