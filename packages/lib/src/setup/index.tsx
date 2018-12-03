import React, { Component, SFC, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader';
import createApp from '../client';
import { Provider } from '../client/contexts/guides';

const root = document.createElement('div');
document.body.appendChild(root);

export interface Options {
  guides?: any;
  home: () => JSX.Element;
  wrapper?: () => JSX.Element;
}

export default ({
  guides: guideContext,
  home,
  wrapper,
}: Options) => {
  const guides = guideContext.keys().map((key: any) => ({
    path: key,
    ...guideContext(key).default,
  }));

  const App = createApp({
    Home: home,
  })
  const Wrapper: any = wrapper || Fragment;
  
  const Root = hot(module)(App);

  ReactDOM.render(
    <Provider value={guides}>
      <Wrapper>
        <Root />
      </Wrapper>
    </Provider>,
    root,
  );
}