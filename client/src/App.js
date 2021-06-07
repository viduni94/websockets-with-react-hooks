import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import constants from './utils/constants';

function App() {
  return (
    <Switch>
      <Route path={constants.paths.home} component={Home} />
    </Switch>
  );
}

export default App;
