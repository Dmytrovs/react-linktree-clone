import "./Bio.css";

export default function Bio({ name, bio, avatar }) {
  return (
    <div className="bio">
      <div className="bio-avatar-wrapper">
        <img src={avatar} alt={name} className="bio-avatar" />
      </div>

      <h1 className="bio-name">{name}</h1>
      <p className="bio-descr">{bio}</p>
    </div>
  );
}
