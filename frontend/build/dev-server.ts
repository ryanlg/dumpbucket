import * as express from 'express';
import * as webpack from 'webpack';
import * as webpackMerge from 'webpack-merge';
import * as WebpackDevMiddleware from 'webpack-dev-middleware';
import * as WebpackHotMiddleware from 'webpack-hot-middleware';
import * as HistoryFallbackMiddleware from 'connect-history-api-fallback';

import config from '@config';

// add HMR client side code into entry
let webpackDevelopmentConfig = require('./webpack.dev.config');
webpackDevelopmentConfig = webpackMerge(webpackDevelopmentConfig, {

    entry: [
        'webpack-hot-middleware/client',
    ],
});

// Using express for server
const app: express.Express = express();
const compiler: webpack.Compiler = webpack(webpackDevelopmentConfig);

const devMiddleware = WebpackDevMiddleware(compiler);
const hotMiddleware = WebpackHotMiddleware(compiler);
app.use(devMiddleware);
app.use(hotMiddleware);

// HTML5 history fallback for Vue
const historyMiddle = HistoryFallbackMiddleware({
    verbose: true,
    index: 'dist/index.html',
});
const staticFileMiddleware = express.static('.');
app.use(historyMiddle);
app.use(staticFileMiddleware);

app.listen(config.devServerPort);
export default app;
