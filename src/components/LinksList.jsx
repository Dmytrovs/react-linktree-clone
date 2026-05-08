import LinkCard from "./LinkCard";
import "./LinksList.css";

export default function LinkList({ links }) {
  return (
    <div className="links-list">
      {links.map((link) => (
        <LinkCard
          key={link.id}
          title={link.title}
          url={link.url}
          icon={link.icon}
          iconAlt={link.iconAlt}
        />
      ))}
    </div>
  );
}
