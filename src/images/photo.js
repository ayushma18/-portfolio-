import React from 'react';

// Replace with your actual image path or URL
const photoUrl = '';

const Photo = () => (
    <img src={photoUrl} alt="My Photo" style={{ maxWidth: '100%', height: 'auto' }} />
);

export default Photo;