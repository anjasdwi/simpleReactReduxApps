import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link, NavLink} from 'react-router-dom';
import DashboardPage from '../components/DashboardPage';
import ExpensePage from '../components/ExpensePage';
import EditPage from '../components/EditPage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';

const AppRouter = () => (
    <Router>
        <div>
            <Header/>
            <Switch>
                <Route path="/" component={DashboardPage} exact={true}/>
                <Route path="/create" component={ExpensePage}/>
                <Route path="/edit/:id" component={EditPage}/>
                <Route path="/help" component={HelpPage}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
    </Router>
)

export default AppRouter