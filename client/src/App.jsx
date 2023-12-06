import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import LatestTopics from './components/home/LatestTopics';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import AllTopics from './components/allTopics/AllTopics';
import CreateTopic from './components/createTopic/CreateTopic';
import DetailsPage from './components/detailsPage/DetailsPage';
import EditTopic from './components/detailsPage/EditTopic';
import EditAnswer from './components/detailsPage/EditAnswer';
import Search from './components/allTopics/Search';
import Profile from './components/profile/Profile';
import PageNotFound from './components/pageNotFound/PageNotFound';

import styles from './components/styles.module.css';
// import Loader from './components/shared/Loader';

function App() {
  return (
    <AuthProvider>
      
        <div className={styles.siteWrapper}>
          <Header />
          {/* <Loader /> */}
          <Routes>
            <Route path="/latestTopics" element={<LatestTopics />} />
            <Route path='/allTopics' element={<AllTopics />} />
            <Route path='/createTopic' element={<CreateTopic />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path="/search" element={<Search />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/edit/:topicId' element={<EditTopic />} />
            <Route path='/edit/answer/:answerId' element={<EditAnswer />} />

            <Route path='/details/:topicId' element={<DetailsPage />} />
            <Route path='*' element={<PageNotFound />} />
          </Routes>
          <Footer />
        </div>
        
    </AuthProvider>
  );
};

export default App;
