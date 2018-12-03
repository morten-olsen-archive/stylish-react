import commander from 'commander';
import run from './run';
import build from './build';

const wrap = (fn: (...args:any[]) => Promise<void>) => (...args: any[]) =>fn(...args)
  .catch(err => {
    console.error(err);
  });

commander
  .command('run [dir]')
  .action(wrap(run));

commander
  .command('build [dir]')
  .option('-o --output [output]', 'output path')
  .action(wrap(build));

commander.parse(process.argv);