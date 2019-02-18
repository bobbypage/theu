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
        text: "311 is death man...",
      },
      {
        name: "Is algos good?",
        text: "yo, read this post",
      },
      {
        name: "Rejected from CS, help!!",
        text: "yo, help a brother out,
      },
      {
        name: "CSE143 vs 143x",
        text: "143......",
      },
      {
        name: "Whats the best fraternity for partying?",
        text: "let's party!!!!!",
      },
      {
        name: "Whats the best major for going to med school?",
        text: "gotta be a doctor due",
      },
      {
        name: "need an internship..... help!!!",
        text: "i gotta make those $$$$$",
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
