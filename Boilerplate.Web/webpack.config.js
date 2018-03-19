const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');
const { TsConfigPathsPlugin, CheckerPlugin } = require('awesome-typescript-loader');

module.exports = (env) => {
  const isDevBuild = process.argv.indexOf('-p') < 0;

  const sharedConfig = ({
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

  const clientBundleConfig = merge(sharedConfig, {
    entry: {
      'client': './boot-client.tsx'
    },
    output: {
      path: path.resolve(__dirname, './wwwroot/dist')
    }
  });

  const serverBundleConfig = merge(sharedConfig, {
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
