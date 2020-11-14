import { Route, Switch } from 'react-router-dom';

import DashboardLayout from '../../components/layout/dashboard';
import Home from './home';
import Share from './share';
import NeutralForm from './neutral-form';

const Dashboard = () => {
  return (
    <DashboardLayout>
      <Switch>
        <Route exact path="/page">
          Public Page
        </Route>
        <Route exact path="/report">
          Annual Report
        </Route>
        <Route exact path="/analytics">
          Analytics
        </Route>
        <Route exact path="/share">
          <Share />
        </Route>
        <Route exact path="/dashboard">
          <Home />
        </Route>
        <Route exact path="/neutral">
          <NeutralForm />
        </Route>
      </Switch>
    </DashboardLayout>
  );
};

Dashboard.propTypes = {};

export default Dashboard;
