// styling for Image component
export const imageStyles = {
  // diagonalizing text
  diagonalText: {
    position: 'absolute',    
    left: '20%',
    top: '35%',
    transform: 'rotate(-45deg)',
    fontSize: '2em'
  }, 
  // column containing each picture
  column: {
    position: 'relative',
    flex: '10%', 
    padding: '5px'
  },
  // each actual picture in the Image component
  picture: {
    borderRadius: '10%',
    margin: '0 15px',
    border: '2px solid red',
    filter: 'drop-shadow(23px 21px 11px #373434)',
    backgroundColor: 'red'
  },
  columnMobile: {
    position: 'relative',
    flex: '10%', 
    padding: '15px',
    width: '300px'
  },
  pictureMobile: {
    borderRadius: '10%',
    margin: '0 15px',
    border: '2px solid red',
    filter: 'drop-shadow(23px 21px 11px #373434)',
    backgroundColor: 'red',
    height: '300px'
  },
  diagonalTextMobile: {
    position: 'absolute',    
    left: '15%',
    top: '35%',
    transform: 'rotate(-45deg)',
    fontSize: '1em'
  }
}