import styles from './Text.module.css';

export default function Text({ children, type = "body" }) {
  const Tag = type === "title" ? "h2" : type === "subtitle" ? "h3" : "p";
  return <Tag className={styles[`text-${type}`]}>{children}</Tag>;
}