import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as topicService from '../../services/topicService';
import styles from './DeleteTopic.module.css';

const DeleteTopic = ({ topicId, onClose }) => {
  const navigate = useNavigate();
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    setIsDeleting(true);

    try {
      await topicService.remove(topicId);
      onClose(); 
      navigate('/allTopics'); 
    } catch (error) {
      console.error('Error deleting topic:', error);
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <div className={`${styles.modalOverlay} ${isDeleting ? 'show' : ''}`}>
      <div className={styles.modal}>
        <div className={styles.modalContent}>
          <span className={styles.close} onClick={onClose}>&times;</span>
          <h2>Confirm Deletion</h2>
          <p>Are you sure you want to delete this topic?</p>
          <div className={styles.modalButtons}>
            <button className={styles.deleteButton}
            onClick={handleDelete} disabled={isDeleting}>
              {isDeleting ? 'Deleting...' : 'Delete'}
            </button>
            <button className={styles.cancelButton}
            onClick={onClose} disabled={isDeleting}>Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteTopic;