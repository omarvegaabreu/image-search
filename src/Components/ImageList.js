import "./ImageList.css";
import React from "react";
import ImageCard from "./ImageCard";

const Images = (props) => {
  // <Image src={imgUrl} alt="alt" size="medium" bordered key={imgUrl} />;

  const renderToScreen = props.children.map((images) => {
    const { description, id, urls } = images;
    //images object contains all info from the API

    return (
      <div key={id}>
        <ImageCard alt={description} src={urls.regular} />
      </div>
    );
  });
  //removed className=image-grid
  return <div>{renderToScreen}</div>;
};

export default Images;
