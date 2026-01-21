import { useEffect, useRef, useState } from 'react';
import './uploadWidget.scss';


const UploadWidget = ({ uwConfig, images, setImages }) => {
  const uploadWidgetRef = useRef(null);
  const uploadButtonRef = useRef(null);
  const [draggedIndex, setDraggedIndex] = useState(null);

  useEffect(() => {
    const initializeUploadWidget = () => {
      if (window.cloudinary && uploadButtonRef.current) {
        // Create upload widget
        uploadWidgetRef.current = window.cloudinary.createUploadWidget(
            uwConfig,
            async (error, result) => {
            if (!error && result && result.event === 'success') {
                console.log('Upload successful:', result.info);
                if (uwConfig.multiple === false) {
                    setImages([result.info.secure_url]);
                } else {
                    setImages(prev => [...prev, result.info.secure_url]);
                }
            }
            }
        );

        // Add click event to open widget
        const handleUploadClick = () => {
          if (uploadWidgetRef.current) {
            uploadWidgetRef.current.open();
          }
        };

        const buttonElement = uploadButtonRef.current;
        buttonElement.addEventListener('click', handleUploadClick);

        // Cleanup
        return () => {
          buttonElement.removeEventListener('click', handleUploadClick);
        };
      }
    };

    initializeUploadWidget();
  }, [uwConfig, setImages]);

  const handleDelete = (index) => {
    setImages(prev => prev.filter((_, i) => i !== index));
  };

  const handleDragStart = (e, index) => {
    setDraggedIndex(index);
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  const handleDrop = (e, dropIndex) => {
    e.preventDefault();
    if (draggedIndex === null || draggedIndex === dropIndex) return;

    const newImages = [...images];
    const [draggedImage] = newImages.splice(draggedIndex, 1);
    newImages.splice(dropIndex, 0, draggedImage);
    setImages(newImages);
    setDraggedIndex(null);
  };

  const handleDragEnd = () => {
    setDraggedIndex(null);
  };

  return (
    <div className="upload-widget">
      <button
        ref={uploadButtonRef}
        id="upload_widget"
        className="cloudinary-button"
      >
        Upload
      </button>
      <div className="images-container">
        {images.map((image, index) => (
          <div
            key={index}
            className="image-item"
            draggable
            onDragStart={(e) => handleDragStart(e, index)}
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, index)}
            onDragEnd={handleDragEnd}
          >
            <img src={image} alt={`upload-${index}`} />
            <button className="delete-btn" onClick={() => handleDelete(index)}>×</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UploadWidget;
