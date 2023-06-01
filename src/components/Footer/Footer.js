import React from "react";
import SanityImage from "gatsby-plugin-sanity-image";
import "./Footer.scss";
import useFooter from "../../hooks/useFooter";
import FooterLinkBlock from "./FooterLinkBlock";
import SocialMediaBlock from "./SocialMediaBlock";

const Footer = () => {
  const data = useFooter().sanityFooter;

  return (
    data !== null && (
      <footer className="footer px-2">
        <div className="container py-4 d-flex flex-wrap">
          {data.linkBlock.length !== 0 &&
            data.linkBlock.map((block) => (
              <FooterLinkBlock
                key={block._key}
                links={block.links}
                title={block.title}
              />
            ))}

          <div className="col-12 col-md-4 flex-md-grow-1 ">
            <div className="contactBlock">
              {data.qrCode && (
                <a
                  href={data.qrCode.url}
                  title={`${data.qrCode.image.alt}`}
                  className="py-2"
                >
                  <SanityImage
                    {...data.qrCode.image}
                    alt={`${data.qrCode.alt}`}
                    className="qrCode"
                  />
                </a>
              )}
              {data.socialMediaBlock && (
                <SocialMediaBlock
                  links={data.socialMediaBlock.links}
                  title={data.socialMediaBlock.title}
                />
              )}
            </div>
          </div>
        </div>
      </footer>
    )
  );
};

export default Footer;
