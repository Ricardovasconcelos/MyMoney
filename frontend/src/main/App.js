import React from 'react';
import '../common/template/dependencies'

import Header from '../common/header'
import Sidebar from '../common/template/sidebar';
import Footer from '../common/template/footer';
import Routes from './routes'
const App = props => {
  return (
    <div className="wrapper">
      <Header/>
      <Sidebar/>
      <div className="content-wrapper">
        <Routes/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
