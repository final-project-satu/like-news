import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faGithub, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { Icons } from "./Menus";

const SocialIcons = () => {
  return (
    <div className="text-teal-500">
      {Icons.map((icon) => (
        <span
          key={icon.name}
          className="p-2 cursor-pointer inline-flex items-center
        rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-teal-500
        duration-300"
        >
          {renderIcon(icon.name)}
        </span>
      ))}
    </div>
  );
};

function renderIcon(iconName) {
  switch (iconName) {
    case "FACEBOOK":
      return <FontAwesomeIcon icon={faFacebook} />;
    case "TWITTER":
      return <FontAwesomeIcon icon={faTwitter} />;
    case "GITHUB":
      return <FontAwesomeIcon icon={faGithub} />;
    case "LINKEDIN":
      return <FontAwesomeIcon icon={faLinkedin} />;
    case "INSTAGRAM":
      return <FontAwesomeIcon icon={faInstagram} />;
    default:
      return null;
  }
}
export default SocialIcons;
