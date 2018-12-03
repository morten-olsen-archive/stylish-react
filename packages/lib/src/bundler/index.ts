import webpack from 'webpack';
import createConfig, { Options } from './createConfig';

export {
  Options,
}

export default (options: Options) => {
  const config = createConfig(options);
  const bundler = webpack(config);
  return bundler;
};