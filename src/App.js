import React, { Component,Fragment } from 'react';
import Header from './common/header';
import Globalstyle from './style';
import IconFontstyle from './statics/iconfont/iconfont'
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/home';
import Detail from './pages/detail';
import store from './store';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Globalstyle />
        <IconFontstyle />
        <Provider store={store}>
          <Fragment>
            <Header></Header>
            <BrowserRouter>
              <Fragment>
                <Route path='/' exact component = {Home}></Route>
                <Route path='/detail' exact component = {Detail}></Route>
              </Fragment>
            </BrowserRouter>
          </Fragment>
          
        </Provider>
      </Fragment>
      
    );
  }
}

export default App;
