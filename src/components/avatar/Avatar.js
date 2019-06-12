import React from "react";

import "./style.scss";

const Avatar = ({ name }) => (
  <div className="avatar" style={generateAvatarColor()}>
    <span>{generateAvatar(name)}</span>
  </div>
);

const generateAvatar = name =>
  name
    .split(" ")
    .map(name => name.substr(0, 1))
    .join("");

const generateAvatarColor = () => {
  return {
    backgroundColor: `rgba(${randomColor()}, ${randomColor()}, ${randomColor()}, 0.3)`
  };
};

const randomColor = () => Math.floor(Math.random() * 255).toString();

export default Avatar;
