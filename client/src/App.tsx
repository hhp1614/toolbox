import React, { FC } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { routes } from './routes';

const App: FC = () => {
  return (
    <div id="layout">
      <div className="nav">
        <Link to="/">首页</Link>
      </div>
      <Switch>
        {routes.map(route =>
          <Route key={route.path as string} path={route.path} component={route.component} exact />
        )}
      </Switch>
    </div>
  );
};

export default App;
