import React from 'react';
import { useParams } from 'react-router-dom';
import VideoGrid from '../components/VideoGrid';

const TopicPage = () => {
  const { topicId } = useParams();

  // Videos organizados por tema
  const videosByTopic = {
    T1: [
      { id: '1V_zYlBclxx8bYjomzvivnMTCfEA-xsWP', title: 'T1C1: Piloto' },
      { id: '1_XRGCSuVq1EoVdJlgURl4qVnFdku1040', title: 'T1C2: El Vestido Rojo' },
      { id: '1gV5yTQ5uiEbV8WgGJlQeVRE6kyqNYaMr', title: 'T1C3: Mis Pobres Angelitos' },

      
    ],
    T2: [],
    T3: [],
    T4: [],
    T5: [],
    T6: [],
    T7: [],
  };

  const videos = videosByTopic[topicId] || [];

  return (
    <div>
      <h2>{`Capítulos de la ${topicId}`}</h2>
      {videos.length > 0 ? (
        <VideoGrid videos={videos} />
      ) : (
        <p style={{ fontSize: '18px', marginTop: '20px' }}>
          No hay videos disponibles aún. 🚧
        </p>
      )}
    </div>
  );
};

export default TopicPage;
