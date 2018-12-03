import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import HomeView from './routes/Home';
import GuideView from './routes/Guide';

export interface Options {
  Home?: (...args: any[]) => JSX.Element;
  Guide?: (...args: any[]) => JSX.Element;
}

export default ({
  Home = HomeView,
  Guide = GuideView,
}: Options) => {
  const App = () => (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/guide/:path*/_v/:variant" component={Guide} />
        <Route path="/guide/:path*" component={Guide} />
      </Switch>
    </Router>
  );

  return App;
};