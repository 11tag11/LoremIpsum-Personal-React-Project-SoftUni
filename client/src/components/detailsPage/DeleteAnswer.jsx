import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as answerService from '../../services/answerService';
import styles from './DeleteAnswer.module.css';

const DeleteAnswer = ({ answerId, onClose, topicId }) => {
  const navigate = useNavigate();
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    setIsDeleting(true);

    try {
      await answerService.remove(answerId);
      onClose();
      navigate('/allTopics');

    } catch (error) {
      console.error('Error deleting answer:', error);
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
          <p>Are you sure you want to delete your answer?</p>
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

export default DeleteAnswer;