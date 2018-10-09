import React from "react";
import { Link, navigate } from "@reach/router";
import api from "../../api";

const ArticleActions = ({ article, canModify }) => {
  const del = async () => {
    await api.Articles.del(article.slug);
    navigate("/");
  };

  if (canModify) {
    return (
      <span>
        <Link
          to={`/editor/${article.slug}`}
          className="btn btn-outline-secondary btn-sm"
        >
          <i className="ion-edit" /> Edit Article
        </Link>
        <button className="btn btn-outline-danger btn-sm" onClick={del}>
          <i className="ion-trash-a" /> Delete Article
        </button>
      </span>
    );
  }

  return <span />;
};

export default ArticleActions;
