import React from 'react';

import ForumCard from './ForumCard.js';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { Redirect } from 'react-router-dom'




const forumStyle = {
  backgroundColor: "#adb5bd"
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
        text: "yo, help a brother out",
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
      {
        name: "need an internship..... help!!!",
        text: "i gotta make those $$$$$",
      },
      {
        name: "need an internship..... help!!!",
        text: "i gotta make those $$$$$",
      },
      {
        name: "need an internship..... help!!!",
        text: "i gotta make those $$$$$",
      },
      {
        name: "need an internship..... help!!!",
        text: "i gotta make those $$$$$",
      },
    ]
    this.posts = posts;
	
	this.state = {
		redirectToPost: false
	}

  }

  renderRedirect = (post, e ) => {
	console.log(post);
	this.setState({ redirectToPost: true, postNameClicked: post.name });
  }

  render() {
    const { redirectToPost, postNameClicked } = this.state;

	if (redirectToPost) {
	  return <Redirect to={{ 
		pathname: "/post", 
		state: { title: postNameClicked } 
	  }} />;
	}

	return (
	  <div style={forumStyle}>
	  <Container>
		{this.posts.map(post =>
		  <Row onClick={(e) => this.renderRedirect(post, e) }>
			<ForumCard title={post.name} text={post.text} />
		  </Row>
		)}
	  </Container>
	</div>
    );
  }
}

export default Forum;
