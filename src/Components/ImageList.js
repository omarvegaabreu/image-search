import "./ImageList.css";
import React from "react";
import ImageCard from "./ImageCard";

const Images = (props) => {
  console.log("props " + props);
  // <Image src={imgUrl} alt="alt" size="medium" bordered key={imgUrl} />;

  const renderToScreen = props.children.map(({ description, id, urls }) => {
    const imageDescription = description; //image description
    const imageId = id;
    const regularImage = urls.regular;

    return <ImageCard alt={imageId} />;
  });

  return <div className="image-grid">{renderToScreen}</div>;
};

export default Images;
