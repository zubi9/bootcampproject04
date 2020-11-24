import React from "react";

function MediaCard({title,body,imageUrl}) {
    return (
      <div>
        <p>Name of the Media card is <h2>{title}</h2></p>
        <p>This is body of media card : {body}</p>
        <img src={imageUrl} alt="momory card" />
      </div>
    );
  }

export default MediaCard;