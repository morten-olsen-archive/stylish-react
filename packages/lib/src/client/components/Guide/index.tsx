import React from 'react';
import GuideType from 'styled/types/Guide';

export interface Props {
  guide: GuideType;
  props: any;
}

const Guide = ({ guide, props }: Props) => (
  <guide.component {...props} />
);

export default Guide;