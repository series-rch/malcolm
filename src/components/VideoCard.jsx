import React from 'react';

const VideoCard = ({ videoId, title }) => {
  const embedUrl = `https://drive.google.com/file/d/${videoId}/preview`;

  return (
    <div style={styles.card}>
      <iframe
        src={embedUrl}
        width="100%"
        height="200"
        allow="autoplay; fullscreen" // Permitir pantalla completa
        allowFullScreen  // Atributo necesario
        title={title}
        style={{ border: 'none' }}
      ></iframe>
      <h3>{title}</h3>
    </div>
  );
};

const styles = {
  card: {
    width: '300px',
    margin: '10px',
    textAlign: 'center',
    boxShadow: '0 0 5px rgba(0,0,0,0.1)',
    borderRadius: '5px',
    overflow: 'hidden',
  },
};

export default VideoCard;
