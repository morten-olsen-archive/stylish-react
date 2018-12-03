import React, { Component, createRef, RefObject } from 'react';
import ReactDOM from 'react-dom';
import ViewPortType from 'styled/types/ViewPort';
import styled from 'styled-components';

export interface Props {
  children: JSX.Element;
  viewPort?: ViewPortType;
  style?: {[name: string]: any};
}

interface State {
  scale: number,
}

const Outer = styled.div<{
  background?: string;
}>`
  min-width: 100px;
  min-height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ background }) => background && `background: ${background}`};
`;

const Inner = styled.div<{
 width?: number;
 height?: number;
 scale: number;
}>`
  ${({ height }) => height && `height: ${height}px`};
  ${({ width }) => width && `width: ${width}px`};
  position: absolute;
  transform: scale(${({scale}) => scale});
`;

class ViewPort extends Component<Props, State> {
  private inner: RefObject<HTMLDivElement> = createRef();
  private outer: RefObject<HTMLDivElement> = createRef();
  state: State = {
    scale: 1,
  }

  componentDidMount() {
    if (this.inner.current && this.outer.current) {
      const innerNode = ReactDOM.findDOMNode(this.inner.current);
      const outerNode = ReactDOM.findDOMNode(this.outer.current);
      if (innerNode && innerNode instanceof Element && outerNode && outerNode instanceof Element) {
        const innerWidth = innerNode.clientWidth;
        const innerHeight = innerNode.clientHeight;
        const outerWidth = outerNode.clientWidth;
        const outerHeight = outerNode.clientHeight;
        const xAspect = outerWidth / innerWidth;
        const yAspect = outerHeight / innerHeight;
        const aspect = Math.min(xAspect, yAspect);
        this.setState({
          scale: Math.min(aspect, 1),
        });
      }
    }
  }

  render() {
    const { children, viewPort, style } = this.props;
    const { scale } = this.state;

    return (
      <Outer style={style} ref={this.outer as any} background={viewPort && viewPort.background}>
        <Inner {...viewPort} scale={scale} ref={this.inner as any}>
          {children}
        </Inner>
      </Outer>
    );
  }
}

export default ViewPort;