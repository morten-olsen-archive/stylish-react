import React from 'react';
import GuideType from 'styled/types/Guide';
import ViewPort from 'styled/client/components/ViewPort';
import Render from '.';
import Prop from './Props';
import { Link } from 'react-router-dom';

export interface Props {
  guide: GuideType;
  props: any;
  style?: any;
  variant?: number;
}

const GuidePreview = ({ guide, style, variant = 0 }: Props) => {
  return (
    <div>
      <ViewPort style={style} viewPort={guide.viewPort}>
        <Prop guide={guide} variant={variant}>
          {(props: any) => (
            <Render guide={guide} props={props} />
          )}
        </Prop>
      </ViewPort>
      <Link to={`/guide/${guide.path}/_v/${variant}`}>
        {guide.path}
      </Link>
    </div>
  );
};

export default GuidePreview;