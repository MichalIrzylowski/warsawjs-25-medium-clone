import React, { Component } from "react";
import api from "../api";
import { navigate } from "@reach/router";

class Editor extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      description: "",
      body: ""
    };
  }

  componentDidMount() {
    if (this.props.slug) {
      const { slug } = this.props;
      api.Articles.get(slug).then(response => {
        this.setState({ ...response.article });
      });
    }
  }

  handleInputChange = ev => {
    const { name, value } = ev.target;
    this.setState({ [name]: value });
  };

  submitForm = async (ev) => {
    ev.preventDefault();

    const article = { ...this.state };

    const call = this.props.slug
      ? api.Articles.update(article)
      : api.Articles.create(article);

    const response = await call;

    navigate(`/article/${response.article.slug}`);
  }

  render() {
    const { title, description, body } = this.state;

    return (
      <div className="editor-page">
        <div className="container page">
          <div className="row">
            <div className="col-md-10 offset-md-1 col-xs-12">
              <form>
                <fieldset>
                  <fieldset className="form-group">
                    <input
                      className="form-control form-control-lg"
                      type="text"
                      name="title"
                      placeholder="Article Title"
                      value={title}
                      onChange={this.handleInputChange}
                    />
                  </fieldset>
                  <fieldset className="form-group">
                    <input
                      className="form-control"
                      type="text"
                      name="description"
                      placeholder="What's this article about?"
                      value={description}
                      onChange={this.handleInputChange}
                    />
                  </fieldset>
                  <fieldset className="form-group">
                    <textarea
                      className="form-control"
                      rows="8"
                      name="body"
                      placeholder="Write your article (in markdown)"
                      value={body}
                      onChange={this.handleInputChange}
                    />
                  </fieldset>
                  <button
                    className="btn btn-lg pull-xs-right btn-primary"
                    type="button"
                    onClick={this.submitForm}
                  >
                    Publish Article
                  </button>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Editor;
