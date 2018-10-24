import React, { Component } from 'react';
import Header from './common/header';
import Globalstyle from './style';
import IconFontstyle from './statics/iconfont/iconfont'
class App extends Component {
  render() {
    return (
      <div>
        <Globalstyle />
        <IconFontstyle />
        <Header></Header>
      </div>
      
    );
  }
}

export default App;
