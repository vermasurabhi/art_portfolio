import React from 'react';
import protectionStyles from './ImageProtection.module.css';

const ProtectedImage = ({ src, alt, className, style, wrapper = true, ...props }) => {
  const handleContextMenu = (e) => {
    e.preventDefault();
    return false;
  };

  const handleDragStart = (e) => {
    e.preventDefault();
    return false;
  };

  const imgElement = (
    <img
      src={src}
      alt={alt}
      className={`${protectionStyles.protectedImage} ${className || ''}`}
      style={style}
      onContextMenu={handleContextMenu}
      onDragStart={handleDragStart}
      draggable="false"
      {...props}
    />
  );

  // If wrapper is false, return just the image (for absolutely positioned images like flip cards)
  if (!wrapper) {
    return imgElement;
  }

  return (
    <div className={protectionStyles.imageWrapper}>
      {imgElement}
      <div className={protectionStyles.imageProtectionOverlay}></div>
    </div>
  );
};

export default ProtectedImage;

