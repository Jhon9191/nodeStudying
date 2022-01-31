/* eslint-disable react/react-in-jsx-scope */
import { Switch, Route } from 'react-router-dom';

import Login from '../pages/Login';
import Page404 from '../pages/Page404';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/404" component={Page404} />
    </Switch>
  );
}
