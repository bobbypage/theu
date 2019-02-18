import React from 'react';

import ForumCard from './ForumCard.js';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';


const forumStyle = {
  backgroundColor: "#6c757d"
};

class Forum extends React.Component {
  constructor(props) {
    super(props);
    this.title = "Hello World!!";

    const posts = [
      {
        name: "I need help with 311",
        text: "yo, read this post",
      },
      {
        name: "Is algos good?",
        text: "yo, read this post",
      },
      {
        name: "Rejected from CS, help!!",
        text: "yo, read this post",
      },
      {
        name: "Rejected from CS, help!!",
        text: "yo, read this post",
      },
      {
        name: "Rejected from CS, help!!",
        text: "yo, read this post",
      },
      {
        name: "Rejected from CS, help!!",
        text: "yo, read this post",
      },
      {
        name: "Rejected from CS, help!!",
        text: "yo, read this post",
      },
    ]
    this.posts = posts;



  }
  render() {
    return (
      <div style={forumStyle}>
<Container>
  {this.posts.map(post =>
        <Row>
          <ForumCard title={post.name} text={post.text} />
      </Row>
        )}
</Container>
      </div>
    );
  }
}

export default Forum;
