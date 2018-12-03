import { Component, SFC } from 'react';
import ViewPort from './ViewPort';

export type createProps<Props> = (getProps: Props, set: {[name: string]: any}) => Props;

export interface Variant<Props> {
  name: string;
  description?: string;
  props: Props | createProps<Props>;
  viewPort?: ViewPort;
}

interface Guide<Props extends {} = any> {
  path?: string;
  tags?: string[];
  component: (props: Props) => JSX.Element; // SFC<Props> | Component<Props>;
  description?: string;
  variants: Variant<Props>[];
  viewPort?: ViewPort;
}

export default Guide;