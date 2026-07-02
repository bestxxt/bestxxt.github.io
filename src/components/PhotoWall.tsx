import { useState, useEffect } from 'react';
import './PhotoWall.css';
import photosData from '../data/photos.json';

const photos = photosData;

const PhotoWall = () => {
  const [colCount, setColCount] = useState(3);

  // Randomly shuffle photos once when the component mounts
  const [shuffledPhotos] = useState(() => [...photos].sort(() => Math.random() - 0.5));

  useEffect(() => {
    const updateCols = () => {
      if (window.innerWidth <= 600) setColCount(1);
      else if (window.innerWidth <= 900) setColCount(2);
      else setColCount(3);
    };
    updateCols();
    window.addEventListener('resize', updateCols);
    return () => window.removeEventListener('resize', updateCols);
  }, []);

  // Distribute shuffled photos into the shortest column
  type PhotoWithIndex = typeof photos[0] & { originalIndex: number };
  const columns: PhotoWithIndex[][] = Array.from({ length: colCount }, () => []);
  const colHeights = Array(colCount).fill(0);

  shuffledPhotos.forEach((photo, index) => {
    // Find the index of the shortest column
    let shortestCol = 0;
    let minHeight = colHeights[0];
    for (let i = 1; i < colCount; i++) {
      if (colHeights[i] < minHeight) {
        minHeight = colHeights[i];
        shortestCol = i;
      }
    }

    columns[shortestCol].push({ ...photo, originalIndex: index });
    
    // Calculate aspect ratio (height / width). 
    // This represents the relative visual height of this image in the column.
    const aspectRatio = photo.height / photo.width;
    colHeights[shortestCol] += aspectRatio;
  });

  return (
    <section className="section photowall-section">
      <div className="photowall-container">
        <h2 className="section-title fade-in-up">Photo Wall 📷</h2>
        <p className="photowall-subtitle fade-in-up" style={{ animationDelay: '0.1s' }}>
          Just capturing the world around me
        </p>

        <div className="masonry-grid-flex">
          {columns.map((col, colIndex) => (
            <div key={colIndex} className="masonry-column">
              {col.map((photo: any) => (
                <div
                  key={photo.originalIndex}
                  className="masonry-item fade-in-up"
                  style={{ animationDelay: `${0.1 + photo.originalIndex * 0.08}s` }}
                >
                  <img src={photo.src} alt={photo.alt} loading="lazy" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotoWall;
