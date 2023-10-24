import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Pastikan Anda mengimpor FontAwesomeIcon
import {
  faFacebook,
  faTwitter,
  faGithub,
  faLinkedin,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons'; // Anda dapat menambahkan ikon media sosial yang Anda butuhkan

const SocialIcons = ({ Icons }) => {
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
    case "logo-facebook":
      return <FontAwesomeIcon icon={faFacebook} />;
    case "logo-twitter":
      return <FontAwesomeIcon icon={faTwitter} />;
    case "logo-github":
      return <FontAwesomeIcon icon={faGithub} />;
    case "logo-linkedin":
      return <FontAwesomeIcon icon={faLinkedin} />;
    case "logo-instagram":
      return <FontAwesomeIcon icon={faInstagram} />;
    default:
      return null;
  }
}

export default SocialIcons;
