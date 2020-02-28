import React from 'react';
import Header from './modules/header/header';
import Sidebar from "./modules/sidebar/sidebar";
import {connect} from "react-redux";
import Main from "./modules/main/main";

const App = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <Main />
    </>
  );
}

export default connect(null, null)(App);
