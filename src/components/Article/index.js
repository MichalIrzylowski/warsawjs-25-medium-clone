import React, { Component } from "react";
import api from "../../api";
import ArticleMeta from "./ArticleMeta";

class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    api.Articles.get(this.props.slug).then(response => {
      this.setState({ article: response.article });
    });
  }

  render() {
    const { currentUser } = this.props;

    if (!this.state.article) {
      return null;
    }

    const { title, body, author } = this.state.article;
    const canModify = currentUser && author.username === currentUser.username; // Change canModify so only the author can modify the post

    return (
      <div className="article-page">
        <div className="banner">
          <div className="container">
            <h1>{title}</h1>
            <ArticleMeta article={this.state.article} canModify={canModify} />
          </div>
        </div>
        <div className="container page">
          <div className="row article-content">
            <div className="col-xs-12">
              <div>{body}</div>
            </div>
          </div>
          <hr />
          <div className="article-actions" />
          <div className="row" />
        </div>
      </div>
    );
  }
}

export default Article;
