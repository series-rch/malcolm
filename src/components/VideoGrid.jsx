import React from 'react';
import VideoCard from './VideoCard';

const VideoGrid = ({ videos }) => {
  return (
    <div style={styles.grid}>
      {videos.map((video) => (
        <VideoCard key={video.id} videoId={video.id} title={video.title} />
      ))}
    </div>
  );
};

const styles = {
  grid: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
};

export default VideoGrid;
