import React from "react";

function Card({ color }) {
  return (
    <div>
      <div className="color_card">
        <div className="color_left">
          <div className="color_leftTop">
            <h3>{color.title}</h3>
            <h2>
              by {color.userName} at {color.dateCreated}
            </h2>
          </div>
          <div className="color_leftBottom">
            <h2>{color.numViews} views</h2>
            <h2>{color.numVotes} votes</h2>
          </div>
        </div>
        <div className="color_right">
          <img
            className="color_rightPattern"
            src={color.imageUrl}
            alt={color.title}
          ></img>
        </div>
      </div>
    </div>
  );
}

export default Card;
