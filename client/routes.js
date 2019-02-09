import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from 'pages/Home';
import Articles from 'pages/Articles';

export default () => <Switch>
  <Route exact path="/" component={Home} />
  <Route path="/articles" component={Articles} />
</Switch>