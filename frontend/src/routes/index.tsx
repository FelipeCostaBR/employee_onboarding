import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import EmployeeDetails from '../pages/EmployeeDetails';
import EmployeeCreate from '../pages/EmployeeForm';

const Routes: React.FC = () => (
    <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/employee/:id" component={EmployeeDetails} />
        <Route path="/employee.create" component={EmployeeCreate} />
    </Switch>
);

export default Routes;
