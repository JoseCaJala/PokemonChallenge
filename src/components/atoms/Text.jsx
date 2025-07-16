import styles from './Text.module.css';

export default function Text({ children, type = "body", className }) {
  const Tag = type === "title" ? "h2" : type === "subtitle" ? "h3" : "p";
  const combinedClassName = `${styles[`text-${type}`]} ${className}`;
  return <Tag className={combinedClassName}>{children}</Tag>;
}