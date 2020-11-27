import { Route, Switch } from 'react-router-dom';
import DashboardLayout from 'components/layout/dashboard';
import Home from './home';
//import Share from './share';

const Dashboard = () => {
  return (
    <DashboardLayout>
      <Switch>
        {/*<Route exact path="/share">
          <Share />
        </Route>*/}
        <Route exact path="/dashboard">
          <Home />
        </Route>
      </Switch>
    </DashboardLayout>
  );
};

Dashboard.propTypes = {};

export default Dashboard;
