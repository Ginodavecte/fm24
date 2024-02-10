import React from 'react';

const ContentPageImage = ( {imageSrc} ) => {

  return (
    <div className="content-page-image">
      <img src={imageSrc} alt={"page image"} />
    </div>
  );
}

export default ContentPageImage;