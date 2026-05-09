import Bio from "./components/Bio";
import LinkList from "./components/LinksList";
import "./App.css";

const DATA = {
  name: "Dmytro",
  bio: "Frontend Developer | Content Creator",
  avatar: "/react-linktree-clone/Photo_Dmytro_sympson.png",
  links: [
    {
      id: 1,
      title: "YouTube Channel",
      url: "https://www.youtube.com/@DmytroReactDev",
      icon: "/react-linktree-clone/icon/youtube.svg",
      iconAlt: "YouTube logo",
    },
    {
      id: 2,
      title: "TikTok Profile",
      url: "https://www.tiktok.com/@voicejourney",
      icon: "/react-linktree-clone/icon/tik-tok.svg",
      iconAlt: "YouTube logo",
    },
    {
      id: 3,
      title: "GitHub",
      url: "https://github.com/Dmytrovs",
      icon: "/react-linktree-clone/icon/github.svg",
      iconAlt: "GitHab logo",
    },
    {
      id: 4,
      title: "Telegram",
      url: "https://t.me/@Dima_li2025",
      icon: "/react-linktree-clone/icon/telegram.svg",
      iconAlt: "YouTube logo",
    },
  ],
};

function App() {
  return (
    <div className="app-wrapper">
      <img src='/react-linktree-clone/decor/blob-left.svg' alt="blob-left-decor" className="decor-blob left" />
      <img src='/react-linktree-clone/decor/blob-right.svg' alt="blob-right-decor" className="decor-blob right"/>

      <div className="content-container">
        <Bio name={DATA.name} bio={DATA.bio} avatar={DATA.avatar} />
        <LinkList links={DATA.links} />
      </div>
    </div>
  );
}

export default App;
