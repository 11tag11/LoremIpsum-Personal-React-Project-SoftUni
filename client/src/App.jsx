import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import LatestTopics from './components/home/LatestTopics';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import AllTopics from './components/allTopics/AllTopics';
import CreateTopic from './components/createTopic/CreateTopic';
import DetailsPage from './components/detailsPage/DetailsPage';
// import DetailsPageAnswers from './components/detailsPage/DetailsPageAnswers';

import Profile from './components/profile/Profile';
import PageNotFound from './components/pageNotFound/PageNotFound';



import styles from './components/styles.module.css';
// import Loader from './components/shared/Loader';

function App() {
  return (
    <div>
      <div className={styles.siteWrapper}>
        <Header />

        {/* <Loader /> */}

        <Routes>
          <Route path="/latestTopics" element={<LatestTopics />} />
          <Route path='/allTopics' element={<AllTopics />} />
          <Route path='/createTopic' element={<CreateTopic />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/profile' element={<Profile />} />
            {/* ?? */}
          <Route path='/latestTopics/:topicId' element={<DetailsPage />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
        
        <Footer />
      </div>
    </div>
  );
}

export default App;
