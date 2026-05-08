import './LinkCard.css'

export default function LinkCard({ title, url, icon, iconAlt }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="link-card"
    >
      <img src={icon} alt={iconAlt} className='icon left' />
         {title}
      <img src={icon} alt={iconAlt} className='icon right' />
    </a>
  );
}
