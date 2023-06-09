import React from "react";
import "./CustomLink.scss"

function CustomLink({href, icon, style, text}) {
    return (
      <a target={href.includes('http') ? "_blank": ""} href={href} title={text} className={`custom-link ${style}`}>
      {icon && icon}
      {style !== "icon" && <p className="mb-0">{text}</p>}

    </a>
    );
}
export default CustomLink;
