import Bio from "./components/Bio";
import LinkList from "./components/LinksList";

import avatarImg from "./assets/Photo_Dmytro_sympson.png";

const DATA = {
  name: "Dmytro",
  bio: "Frontend Developer | Content Creator",
  avatar: avatarImg,
  links: [
    {
      id: 1,
      title: "YouTube Channel",
      url: "https://www.youtube.com/@DmytroReactDev",
    },
    {
      id: 2,
      title: "TikTok Profile",
      url: "https://www.tiktok.com/@voicejourney",
    },
    { id: 3, title: "GitHub", url: "https://github.com/Dmytrovs" },
    { id: 4, title: "Telegram", url: "https://t.me/@Dima_li2025" },
  ],
};

function App() {
  return (
    <div className="app-wrapper">
      <Bio name={DATA.name} bio={DATA.bio} avatar={DATA.avatar} />
      <LinkList links={DATA.links} />
    </div>
  );
}

export default App;
