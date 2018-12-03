import createBundler from '../bundler';
import path from 'path';

interface Options {
  output?: string;
  port?: number;
}

export default async (dir: string = process.cwd(), {
  output = path.join(dir, 'style-guide'),
}: Options) => {
  const context = path.resolve(dir);
  const buildPath = path.resolve(output);
  const bundler = createBundler({
    context,
    output: buildPath,
    production: false,
  });
  bundler.run((err, stats) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    console.log(stats.toString());
    if (stats.hasErrors()) {
      process.exit(2);
    }
  });
}