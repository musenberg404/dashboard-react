import React from 'react';
import '../assets/styles/containers/Dashboard.scss';

import Header from '../components/Header';
import Sidenav from '../components/Home/Sidenav';
// import Main from '../components/Dashboard/Main';
import Footer from '../components/Footer';

const Home = () => (
  <div className="grid">
    <Header />
    <Sidenav />
    <Footer />
  </div>
);

export default Home;
