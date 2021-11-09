import React from 'react';
import { imageStyles } from '../styles/imageStyles';
import { Picture } from 'react-responsive-picture';
import { useMediaQuery } from '../utils/useMediaQuery';

// Image component
export const Image = (props) => {
  const isMobile = useMediaQuery('(max-width: 600px)') 
  // media query mobile screen
  if (isMobile) {
    return (
      <div style={imageStyles.columnMobile}>
        <Picture 
          style={imageStyles.pictureMobile}
          src={props.url}
        />
      <div style={imageStyles.diagonalTextMobile}>{props.title}</div>
      </div>
    )
  }
  return (
    <div style={imageStyles.column}>
      <Picture 
        style={imageStyles.picture}
        src={props.url}
      />
    <div style={imageStyles.diagonalText}>{props.title}</div>
    </div>
  )
}