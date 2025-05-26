//import "./Typography.scss";

function Typography({ 
  children, 
  variant = "body", 
  size = "medium", 
  color = "default",
  weight = "normal",
  className = "" 
}) {
  return (
    <span 
      className={`typography typography--${variant} typography--${size} typography--${color} typography--${weight} ${className}`}
    >
      {children}
    </span>
  );
}

export default Typography;