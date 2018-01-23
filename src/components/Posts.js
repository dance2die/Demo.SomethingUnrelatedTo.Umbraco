import React from "react";

const Posts = ({ posts }) => {
  const postComponents = posts.map(post => (
    <Post key={post.id} title={post.title} body={post.body} />
  ));

  return <div>{postComponents}</div>
};

const boldStyle = { fontWeight: "bold" };

const Post = ({title, body}) => {
    return (
        <div>
            <p><span style={boldStyle}>Title:</span> {title}</p>
            <p><span style={boldStyle}>Body:</span> {body}</p>
            <hr />
        </div>
    );
}

export default Posts;
