import bs from 'browser-sync';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import stripAnsi from 'strip-ansi';
import CONST from '../CONSTANTS';
const SERVERPORT = CONST.BACKEND_SERVER_PORT;
const browserSync = bs.create();

/**
 * FRONT END SETUP
 */
import webpackConfig from '../../webpack.config';

const bundler = webpack(webpackConfig);
/**
 * Reload all devices when bundle is complete
 * or send a fullscreen error message to the browser instead
 */
bundler.plugin('done', function (stats) {
  if (stats.hasErrors() || stats.hasWarnings()) {
    return browserSync.sockets.emit('fullscreen:message', {
      title: 'Webpack Error:',
      body: stripAnsi(stats.toString()),
      timeout: 100000
    });
  }
  browserSync.reload();
});

/**
 * Run Browsersync and use middleware for Hot Module Replacement
 */
browserSync.init({
  proxy: `localhost:${SERVERPORT}`, //browser sync should proxy us to the backend
  notify: false,
  online: false,
  open: false,
  logFileChanges: false,
  middleware: [
    webpackDevMiddleware(bundler, {
      publicPath: webpackConfig.output.publicPath,
      stats: {
        colors: true,
        hash: false,
        version: false,
        timings: false,
        assets: false,
        chunks: false,
        modules: false,
        reasons: false,
        children: false,
        source: false,
        errors: false,
        errorDetails: false,
        warnings: false,
        publicPath: false
      }
    }),
    webpackHotMiddleware(bundler)
  ],
  plugins: ['bs-fullscreen-message'],
  logLevel: 'info',
  ghostMode: {
    clicks: false,
    forms: false,
    scroll: false
  },
  files: [
    "src/**/*.pug"
  ],
  browser: "google chrome"
});
