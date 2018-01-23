import React, { Component } from "react";
import "./App.css";
import Posts from "./components/Posts";
import { getAccessToken, getHomeContent } from "./umbraco_api";

class App extends Component {
  state = {
    posts: []
  };

  async componentDidMount() {
    const token = await getAccessToken();
    const posts = await getHomeContent(token);
    this.setState({ posts });
  }

  render() {
    const { posts } = this.state;
    if (posts.length === 0) return <div>Loading...</div>;

    return (
      <div className="App">
        <Posts posts={posts} />
      </div>
    );
  }
}

export default App;
