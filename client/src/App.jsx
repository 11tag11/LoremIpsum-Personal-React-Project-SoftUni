// 07.11. Successful :)
import React, { useState, useEffect } from 'react';

import Footer from './components/Footer';
import Header from './components/Header';
import LatestTopics from './components/LatestTopics';
import Register from './components/Register';
import AllTopics from './components/AllTopics';
import CreateTopic from './components/CreateTopic';
import DetailsPage from './components/DetailsPage';
import Profile from './components/Profile';

import './components/styles.css';
import './components/register.css';
import './components/allTopics.css';
import './components/createTopic.css';
import './components/detailsPage.css';
// import './components/profile.css';


function App() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3030/jsonstore/latestTopics')
      .then((response) => response.json())
      .then((data) => {
        // Convert the object to an array
        const articlesArray = Object.values(data);

        setArticles(articlesArray);
      });
    
  }, []);

  return (
    <div>
      <div className="site-wrapper">
        <Header />
        <LatestTopics articles={articles}/>
        {/* <AllTopics articles={articles}/> */}
        {/* <CreateTopic /> */}
        {/* <Register /> */}
        {/* <DetailsPage />  */}
        {/* <Profile /> */}
        <Footer />
      </div>
    </div>

  );
}

export default App;
