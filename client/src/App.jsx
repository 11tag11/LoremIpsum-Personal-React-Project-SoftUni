// 07.11. Successful :)
import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import LatestTopics from './components/home/LatestTopics';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import AllTopics from './components/allTopics/AllTopics';
import CreateTopic from './components/createTopic/CreateTopic';
import DetailsPage from './components/detailsPage/DetailsPage';
import Profile from './components/profile/Profile';
import PageNotFound from './components/pageNotFound/PageNotFound';
import './components/styles.css';
import './components/header/header.css';
import './components/home/latestTopics.css';
import './components/auth/login.css';
import './components/auth/register.css';
import './components/allTopics/allTopics.css';
import './components/createTopic/createTopic.css';
import './components/detailsPage/detailsPage.css';
import './components/profile/profile.css';
import './components/pageNotFound/pageNotFound.css'



function App() {
  return (
    <div>
      <div className="site-wrapper">
        <Header />
        <Routes>
          <Route path="/latestTopics" element={<LatestTopics />} />
          <Route path='/allTopics' element={<AllTopics />} />
          <Route path='/createTopic' element={<CreateTopic />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/detailsPage' element={<DetailsPage />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
        
        
        
        <Footer />
      </div>
    </div>
  );
}

export default App;
