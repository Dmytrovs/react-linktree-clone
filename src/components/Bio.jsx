export default function Bio({ name, bio, avatar }) {
  return (
    <div className="bio">
      <img src={avatar} alt={name} className="bio-avatar" />
      <h1 className="bio-name">{name}</h1>
      <p className="bio-descr">{bio}</p>
    </div>
  );
}
