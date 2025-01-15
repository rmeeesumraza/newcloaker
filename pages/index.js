import { useState } from "react";
import Switch from "../components/Switch";
import embedConfig from "../config/embedConfig"; // Updated path

export default function Home() {
  const [embedLink, setEmbedLink] = useState(embedConfig.defaultLink);
  const [isSwitchOn, setIsSwitchOn] = useState(false);

  const handleToggle = (newState) => {
    setIsSwitchOn(newState);
    setEmbedLink(newState ? embedConfig.alternateLink : embedConfig.defaultLink);
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Embed Link Switcher</h1>
      <iframe
        src={embedLink}
        width="600"
        height="400"
        style={{ border: "none" }}
        title="Embed"
      ></iframe>
      <Switch isSwitchOn={isSwitchOn} onToggle={handleToggle} />
    </div>
  );
}
