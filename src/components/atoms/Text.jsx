export default function Text({ children, type = "body" }) {
  const Tag = type === "title" ? "h2" : type === "subtitle" ? "h3" : "p";
  return <Tag className={`text-${type}`}>{children}</Tag>;
}