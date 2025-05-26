//import "./Image.scss";

function Image({ 
  src, 
  alt, 
  size = "medium",
  rounded = false,
  className = "" 
}) {
  return (
    <img 
      src={src} 
      alt={alt}
      className={`image image--${size} ${rounded ? 'image--rounded' : ''} ${className}`}
    />
  );
}

export default Image;