import { HotModuleReplacementPlugin, Configuration } from 'webpack';
import HtmlPlugin from 'html-webpack-plugin';
import path from 'path';

export interface Options {
  context: string;
  production: boolean;
  output: string;
}

const devPlugins = [
  new HotModuleReplacementPlugin(),
];

const prodPlugins = [
  new HotModuleReplacementPlugin(),
];

const createTsLoader = (config?: string) => [{
  loader: path.join(__dirname, '../../node_modules/babel-loader'),
  options: {
    plugins: [path.join(__dirname, '../../node_modules/react-hot-loader/babel')],
  },
}, {
  loader: path.join(__dirname, '../../node_modules/ts-loader'),
  options: {
    transpileOnly: true,
    ...(config ? { configFile: config } : {}),
  },
}]

export default ({
  production,
  context,
  output,
}: Options): Configuration => ({
  context,
  mode: production ? 'production' : 'development',
  entry: [
    path.join(__dirname, '../../node_modules/webpack-hot-middleware/client'),
    path.join(context, 'stylish.ts'),
  ],
  output: {
    path: output,
    filename: 'bundle.js',
    publicPath: '.',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
    modules: [
      'node_modules',
      path.join(__dirname, '../../node_modules'),
    ],
    alias: {
      'react-native$': 'react-native-web',
      'styled': path.join(__dirname, '..'),
      'react-native-svg': 'react-native-svg-web',
      // 'prop-types': path.join(__dirname, '../interceptors/proptypes'),
    },
  },
  plugins: [
    new HtmlPlugin({
      title: 'stylish-react',
    }),
    ...(production ? prodPlugins : devPlugins),
  ],
  module: {
    rules: [{
      test: /\.tsx?/,
      include: [
        path.join(__dirname, '..'),
      ],
      use: createTsLoader(path.join(__dirname, '../../tsconfig.json')),
    }, {
      test: /\.tsx?/,
      include: [
        context,
      ],
      use: createTsLoader(),
    }, {
      test: /\.ttf$/,
      loader: 'url-loader',
      include: path.resolve(__dirname, '../node_modules/react-native-vector-icons'),
    }, {
      test: /\.json$/,
      loader: 'json-loader',
    }, {
      test: /\.(gif|jpe?g|png|svg)$/,
      loader: 'url-loader',
      query: { name: 'images/[name]-[hash:16].[ext]' },
    }, {
      test: /\.(mp3|wav)$/,
      loader: 'file-loader',
      query: { name: 'sounds/[name]-[hash:16].[ext]' },
    },]
  }
});