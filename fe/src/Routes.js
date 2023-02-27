import { Switch, Route, withRouter } from 'react-router-dom';

import Home from './pages/Home';
import NewContact from './pages/NewContact';
import { Container as EditContact } from './pages/EditContact';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={withRouter(Home)} />
      <Route path="/new" component={withRouter(NewContact)} />
      <Route path="/edit/:id" component={withRouter(EditContact)} />
    </Switch>
  );
}
