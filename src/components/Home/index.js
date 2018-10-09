import React, { Component } from "react";
import Banner from "./Banner";
import Main from "./Main";
import Tags from "./Tags";
import api from "../../api";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: ["react", "vue", "angular", "preact", "inferno"],
      pageNumber: 0,
      articles: []
    };
  }

  componentDidMount() {
    this.fetchItems();
  }

  changeNumber = page => {
    this.setState({ ...this.state, pageNumber: page }, () => this.fetchItems());
  };

  fetchItems = () => {
    api.Articles.all(this.state.pageNumber).then(response => {
      this.setState({
        ...this.state,
        articles: response.articles,
        articlesCount: response.articlesCount
      });
    });
  };

  render() {
    return (
      <div className="home-page">
        <Banner />
        <div className="container page">
          <div className="row">
            <Main
              articles={this.state.articles}
              articlesCount={this.state.articlesCount}
              changeNumber={this.changeNumber}
            />
            <div className="col-md-3">
              <div className="sidebar">
                <p>Popular Tags:</p>
                <Tags tags={this.state.tags} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
