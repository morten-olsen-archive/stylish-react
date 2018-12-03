import commander from 'commander';
import run from './run';

const wrap = (fn: (...args:any[]) => Promise<void>) => (...args: any[]) =>fn(...args)
  .catch(err => {
    console.error(err);
  });

commander
  .command('run [dir]')
  .action(wrap(run));

commander.parse(process.argv);