import React from "react";

const Tags = ({ tags }) =>
  tags ? (
    <div className="tag-list">
      {tags.map(tag => (
        <a href="" className="tag-default tag-pill" key={tag}>
          {tag}
        </a>
      ))}
    </div>
  ) : (
    <div>Loading Tags...</div>
  );

export default Tags;
