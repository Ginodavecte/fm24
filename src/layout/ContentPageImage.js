import React from 'react';

const ContentPageImage = ( {imageSrc} ) => {

  return (
    <div className="content-page-image">
      <img src={imageSrc} alt="" />
    </div>
  );
}

export default ContentPageImage;