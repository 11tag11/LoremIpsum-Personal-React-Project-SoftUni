import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import styles from './Search.module.css';
import * as topicService from '../../services/topicService';

const initialValue = {
  search: '',
};

const Search = () => {
  const location = useLocation();
  const [searchValue, setSearchValue] = useState(initialValue);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (location.state && location.state.searchTerm) {
      setSearchValue({ search: location.state.searchTerm });
    }
  }, [location.state]);

  const onChangeHandler = (e) => {
    const { value } = e.target;

    setSearchValue((state) => ({
      ...state,
      search: value,
    }));
  };

  useEffect(() => {
    topicService
      .getAll()
      .then((result) =>
        setSearchResults(
          result.filter((topic) =>
            topic.heading.toLowerCase().includes(searchValue.search.toLowerCase())
          )
        )
      )
      .catch((error) => console.log(error));
  }, [searchValue.search]);

  return (
    <div className={styles.siteSearch}>
      <div className={styles.searchResults}>
        {searchResults.length > 0 ? (
          <div>
            {searchResults.map((topic) => (
              <i key={topic._id} className={styles.search}>
                <Link to={`/details/${topic._id}`}>{topic.heading}</Link>
              </i>
            ))}
          </div>
        ) : (
          <p>No results found</p>
        )}
      </div>
    </div>
  );
};

export default Search;
