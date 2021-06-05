import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/layout/NavBar';
import { Home, Settings } from './pages';
import { ROUTES } from './utils/constants/routes';

const App = () => (
    <Router>
        <Header />
        <Switch>
            <Route exact path={ROUTES.home.path} component={Home} />
            <Route exact path={ROUTES.settings.path} component={Settings} />
        </Switch>
    </Router>
);

export default App;
