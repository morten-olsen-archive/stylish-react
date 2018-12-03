import React, { Component } from 'react';
import Guide from 'styled/types/Guide';

export interface Props {
  variant: number;
  guide: Guide;
  children: (props: any) => JSX.Element;
}

interface State {
  props: any;
}

class GuideProps extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      props: {},
    };
    this.setProps = this.setProps.bind(this);
    this.getProps = this.getProps.bind(this);
  }

  componentWillMount() {
    this.update(this.props);
  }

  update(props: Props) {
    const {
      variant = 0,
      guide,
    } = props;
    const propsGen = guide.variants[variant];
    if (!propsGen) {
      return;
    }
    const propsRes = typeof propsGen.props === 'function'
      ? propsGen.props(this.getProps, this.setProps)
      : propsGen.props;
    this.setState({
      props: propsRes,
    });
  }

  setProps(props: any) {
    this.setState({
      props: {
        ...this.state.props,
        ...props,
      },
    });
  }

  getProps() {
    return this.state.props;
  }

  render() {
    const { children } = this.props;
    const { props } = this.state;
    return children(props);
  }
}

export default GuideProps;