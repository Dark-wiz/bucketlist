import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import Layout from './components/Layout';
import login from './components/pages/account/login';
import register from './components/pages/account/register';
import landingPage from './components/Layout/landingPage';
import AddBucketlist from './components/pages/bucketlist/add_bucketlist';
import AddItem from './components/pages/bucketlistitem/add_item';
import AllItems from './components/pages/bucketlistitem/all_items';
import dashboard from './components/pages/dashboard';
import ProtectedRoute from './components/Layout/protectionHOC';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" component={login} />
          <Route exact path="/register" component={register} />
          <Route exact path="/" component={landingPage} />

          <Layout>
            <Switch>
              <Route exact path="/dashboard" component={ProtectedRoute(dashboard)} />
              <Route exact path="/add_bucketlist" component={ProtectedRoute(AddBucketlist)} />
              <Route exact path="/add_bucketlistItem" component={ProtectedRoute(AddItem)} />
              <Route exact path="/all_bucketlistItems/:bucketlistId" component={ProtectedRoute(AllItems)} />
            </Switch>
          </Layout>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
