import React from "react";
import ArticleList from "../ArticleList";

const Main = props => (
  <div className="col-md-9">
    <div className="feed-toggle">
      <ul className="nav nav-pills outline-active" />
    </div>
    <ArticleList
      articles={props.articles}
      articlesCount={props.articlesCount}
      changeNumber={props.changeNumber}
    />
  </div>
);

export default Main;
