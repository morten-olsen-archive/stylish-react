import Test, { Props } from './test';
import { Guide } from 'stylish-react';

const guide: Guide<Props> = {
  component: Test,
  variants: [{
    name: 'test',
    props: {
      a: 'sdf',
    }
  }, {
    name: 'test',
    props: {
      a: 'asdasdad',
    }
  }],
  viewPort: {
    height: 200,
  }
};

export default guide;