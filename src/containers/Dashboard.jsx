import React from 'react';
import '../assets/styles/containers/Dashboard.scss';

import Header from '../components/Header';
import Sidenav from '../components/Dashboard/Sidenav';
import Main from '../components/Dashboard/Main';
import Footer from '../components/Footer';

const Dashboard = () => (

  <div className="grid">
    <Header/>
    <Sidenav/>
    <Main/>
    <Footer/>
  </div>

);

export default Dashboard;
