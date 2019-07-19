import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
//Components
import NAvbar from './navbar';
import Item from '../containers/all-items'
import Search from './../containers/search';
import Cart from './../containers/cart';


class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <NAvbar />
          <div>
            <Switch>
              <Route exact path="/" component={Item} />
              <Route exact path="/cart" component={Cart} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>

    )
  }
}

export default App;