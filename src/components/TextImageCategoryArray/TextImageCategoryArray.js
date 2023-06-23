import React from "react";
import { PortableText } from "@portabletext/react";
import SanityImage from "gatsby-plugin-sanity-image";
import "./TextImageCategoryArray.scss";

const TextImageCategoryArray = ({ sections }) => {
  

  return (
    <div className="container section-padding textImageContainer">

      {sections.map((data, index) => (
        <div key={`data-${data.title}`} className={`textImage ${data.textRight}`}>
       <div className={`textContainer ${data.textRight}Text ${!data.category && 'textContainerCentered'} col-lg-6 col-md-6 col-12`}>
            {data.category && <p className={`textContainer__category ${(index % 3 === 0 ) ? 'firstColor' : index % 3 === 1 ? 'secondColor' : 'thirdColor'} 
           
            `}>{data.category}</p>}
            {data.textBlock.title && <h4 className="textContainer__title">{data.textBlock.title}</h4>}
            <PortableText value={data.textBlock._rawContent} />
          </div>
          <div className={`picture ${data.textRight}Picture  ${!data.category && 'smallerPicture'}  col-lg-6 col-md-6 col-12`}>
           
           {data.image && <SanityImage
             {...data.image.image}
             alt={`${data.image.alt}`}
            
           />}
        
       </div>
        </div>
      ))}

  </div>
  );
};

export default TextImageCategoryArray;
