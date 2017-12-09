import * as webpack from 'webpack';
import * as path from 'path';
import { TsConfigPathsPlugin, CheckerPlugin } from 'awesome-typescript-loader';

const merge = require('webpack-merge');

module.exports = (env: any) => {
  const isDevBuild = process.argv.indexOf('-p') < 0;

  const sharedConfig: webpack.Configuration = ({
    context: path.resolve(__dirname, './App'),
    stats: {
      modules: false,
      warnings: false
    },
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      plugins: [
        new TsConfigPathsPlugin()
      ]
    },
    output: {
      filename: '[name].js',
      publicPath: 'dist/'
    },
    module: {
      rules: [
        { test: /\.tsx?$/, loader: "awesome-typescript-loader?silent=true" },
        { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
      ]
    },
  });

  const clientBundleConfig: webpack.Configuration = merge(sharedConfig, {
    entry: {
      'client': './boot-client.tsx'
    },
    output: {
      path: path.resolve(__dirname, './wwwroot/dist')
    }
  });

  const serverBundleConfig: webpack.Configuration = merge(sharedConfig, {
    entry: {
      'server': './boot-server.tsx'
    },
    plugins: [
    ],
    output: {
      libraryTarget: 'commonjs',
      path: path.resolve(__dirname, './wwwroot/dist')
    },
    target: 'node',
    devtool: 'inline-source-map'
  });

  return [clientBundleConfig, serverBundleConfig];
}
