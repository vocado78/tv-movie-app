/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import routes from './routes';


export default function ProfileTabs() {
  return (
    <Switch>
      {routes.map(({ path, exact, component: Component }) => (
        <Route
          key={path}
          path={path}
          exact={exact}
          render={(props) => (
            <Component {...props} />
          )}
        />
      ))}
    </Switch>
  );
}
