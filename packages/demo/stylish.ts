import {
  setup,
} from 'stylish-react';

setup({
  guides: (require as any).context('./src', true, /.guide\.ts$/)
});