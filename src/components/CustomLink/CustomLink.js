import React from "react";
import "./CustomLink.scss"


function CustomLink({ href, icon, style, text }) {

  return (
    <a href={href} title={text} className={`custom-link ${style}`}>
      <p className="mb-0">{text}</p>
    </a>
  );
}

export default CustomLink;
