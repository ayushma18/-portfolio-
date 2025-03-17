import React from 'react';
import styles from './Photo.module.css';

const Photo = () => {
  return (
    <img 
      src="/images/profile.jpg"
      alt="Profile"
      className={styles.photo}
    />
  );
};

export default Photo;