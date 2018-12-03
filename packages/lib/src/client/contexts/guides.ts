import { createContext } from 'react';
import Guide from '../../types/Guide';

const {
  Provider,
  Consumer,
} = createContext<Guide[]>([]);

export {
  Provider,
  Consumer,
};