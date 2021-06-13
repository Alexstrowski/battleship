import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/layout/NavBar';
import { Home, Settings, Records } from './pages';
import { ROUTES } from './utils/constants/routes';

const App = () => (
    <Router>
        <Header />
        <Switch>
            <Route exact path={ROUTES.home.path} component={Home} />
            <Route exact path={ROUTES.settings.path} component={Settings} />
            <Route exact path={ROUTES.records.path} component={Records} />
        </Switch>
    </Router>
);

export default App;
