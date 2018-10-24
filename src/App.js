import React, { Component,Fragment } from 'react';
import Header from './common/header';
import Globalstyle from './style';
import IconFontstyle from './statics/iconfont/iconfont'
import { Provider } from 'react-redux';
import store from './store';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Globalstyle />
        <IconFontstyle />
        <Provider store={store}>
          <Header></Header>
        </Provider>
      </Fragment>
      
    );
  }
}

export default App;
