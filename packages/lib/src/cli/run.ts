import createBundler from '../bundler';
import path from 'path';
import express from 'express';
import middleware from 'webpack-dev-middleware';
import hotMiddleware from 'webpack-hot-middleware';

interface Options {
  output?: string;
  port?: number;
}

export default async (dir: string = process.cwd(), {
  output = path.join(dir, 'style-guide'),
  port = 1337,
}: Options) => {
  const context = path.resolve(dir);
  const buildPath = path.resolve(output);
  const bundler = createBundler({
    context,
    output: buildPath,
    production: false,
  });
  const server = express();
  server.use(middleware(bundler));
  server.use(hotMiddleware(bundler));
  server.listen(port);
}