import React, { PureComponent,Fragment } from 'react';
import Header from './common/header';
import Globalstyle from './style';
import IconFontstyle from './statics/iconfont/iconfont'
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/home';
import Detail from './pages/detail/loadable';
import Login from './pages/login';
import Write from './pages/write';
import store from './store';

class App extends PureComponent {

  render() {
    return (
      <Fragment>
        <Globalstyle />
        <IconFontstyle />
        <Provider store={store}>
          <Fragment>
            <BrowserRouter>
              <Fragment>
                <Header></Header>
                <Route path='/' exact component = {Home}></Route>
                <Route path='/login' exact component = {Login}></Route>
                <Route path='/write' exact component = {Write}></Route>
                <Route path='/detail/:id' exact component = {Detail}></Route>
              </Fragment>
            </BrowserRouter>
          </Fragment>
          
        </Provider>
      </Fragment>
      
    );
  }
}

export default App;
