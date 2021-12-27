import React, { useState, useEffect, ImgHTMLAttributes} from 'react';
import { Spinner, ImageContainer, ImageStyled  } from './Image.styles';

const ImageComponent = ({ src, alt, ...rest }: ImgHTMLAttributes<HTMLImageElement>) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const handleOnLoad = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    setIsLoading(true);
  }, [src]);

  return (
    <ImageContainer>
      <Spinner
        role="progressbar"
        hidden={!isLoading}>
        <div></div><div></div>
      </Spinner>
      <ImageStyled
        src={src}
        alt={alt}
        {...rest}
        hidden={isLoading}
        onLoad={handleOnLoad}
      />
    </ImageContainer>
  );
};

export default ImageComponent;
