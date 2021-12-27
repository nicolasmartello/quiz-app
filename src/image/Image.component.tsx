import React, { useState, useEffect, ImgHTMLAttributes} from 'react';

const ImageComponent = ({ src, alt, ...rest }: ImgHTMLAttributes<HTMLImageElement>) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const handleOnLoad = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    setIsLoading(true);
  }, [src]);

  return (
    <div className="image-container">
      <div role="progressbar" className={isLoading ? 'spinner' : 'spinner hide'}><div></div><div></div></div>
      <img src={src} alt={alt} {...rest} className={isLoading ? 'hide' : ''} onLoad={handleOnLoad} />
    </div>
  );
};

export default ImageComponent;
