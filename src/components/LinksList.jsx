import LinkCard from './LinkCard'

export default function LinkList({ links }) {
  return (
    <div className="LinksList">
      {links.map((link) => (
        <LinkCard key={link.id} title={link.title} url={link.url} />
      ))}
    </div>
  );
}
