const path = require('path');
const webpack = require('webpack');
var nodeExternals = require('webpack-node-externals');

module.exports = (env) => {
  return {
    target: 'node',
    node: {
      __dirname: false,
      __filename: false,
    },
    externals: [nodeExternals()],
    entry: {
      server: [
        process.env.BUILDING ? './server/server.js' : './server/index.js',
      ],
    },
    mode: 'production',
    output: {
      filename: '[name]-bundle.js',
      path: path.resolve(__dirname, '../dist'),
      publicPath: '/',
    },
    optimization: {
      splitChunks: {
        automaticNameDelimiter: '_',
        cacheGroups: {
          vendor: {
            name: 'vendor',
            test: /[\\/]node_modules[\\/]/,
            chunks: 'initial',
            minChunks: 2,
          },
        },
      },
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
            },
          ],
        },
        {
          test: /\.css$/,
          use: {
            loader: 'css-loader',
          },
        },
        {
          test: /\.jpg$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: 'images/[name].[ext]',
                emitFile: false,
              },
            },
          ],
        },
        {
          test: /\.md$/,
          use: [
            {
              loader: 'markdown-with-front-matter-loader',
            },
          ],
        },
      ],
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify(env.NODE_ENV),
        },
      }),
    ],
  };
};
