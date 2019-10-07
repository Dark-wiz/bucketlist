import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import Layout from './components/Layout';
import login from './components/pages/account/login';
import register from './components/pages/account/register';
import landingPage from './components/Layout/landingPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" component={login} />
          <Route exact path="/register" component={register} />
          <Route exact path="/" component={landingPage} />
          <Route exact path="/dashboard" component={Layout} />

          <Layout>
            <Switch>

            </Switch>
          </Layout>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
