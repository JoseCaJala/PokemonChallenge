//import "./Badge.scss";

function Badge({ label, color, size = "medium" }) {
  return (
    <span className={`badge badge--${color} badge--${size}`}>
      {label}
    </span>
  );
}

export default Badge;