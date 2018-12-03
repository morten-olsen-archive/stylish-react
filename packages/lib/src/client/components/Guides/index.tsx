import React from 'react';
import { Consumer } from '../../contexts/guides';
import Preview from 'styled/client/components/Guide/Preview';

type PreviewType = (style?: any) => JSX.Element;

export interface Props {
  children: (gen: PreviewType[]) => JSX.Element | JSX.Element[];
  includeVariants?: boolean;
  filter?: {
    q?: string | RegExp;
    tags?: string[] | RegExp;
    path?: string | RegExp;
  }
}

const Guides = ({ children, includeVariants }: Props) => (
  <Consumer>
    {(guides) => children(guides.map((guide) => (style?: any) => (
      includeVariants
        ? <>{
            guide.variants.map((v, i) => (
              <Preview key={guide.path} guide={guide} variant={i} style={style} props={{}} />
            ))
          }</>
        : <Preview key={guide.path} guide={guide} style={style} props={{}} />
    )))}
  </Consumer>
)

export default Guides;