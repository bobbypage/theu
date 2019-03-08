import React from 'react';
import NetworkHelper from './NetworkHelper.js';

import ForumCard from './ForumCard.js';
import NewPost from './NewPost.js';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Redirect } from 'react-router-dom';
import ScrollUpButton from "react-scroll-up-button";

import './Forum.css';

class Forum extends React.Component {
  constructor(props) {
    super(props);
    this.handleShow = this.handleShow.bind(this);

    this.state = {
      redirectToPost: false,
      loaded: false,
      show: false,
    }
    this.closeHandler = this.closeHandler.bind(this)
    this.savedHandler = this.savedHandler.bind(this)
  }

  closeHandler() {
    this.setState({
      show: false
    })
  }

  savedHandler() {
    this.setState({
      show: false
    })
    this.refreshPosts();
  }

  refreshPosts() {
    NetworkHelper.getPosts().
      then(res => {
        this.setState({posts: res.data, loaded:true}); 
      });
  }

  renderRedirect = (post, e ) => {
    console.log(post);
    this.setState({ redirectToPost: true, post_id: post.id});
  }

  componentDidMount() {
    this.refreshPosts();
  }

  handleShow() {
    // check if the user is logged in
    if (NetworkHelper.tokenValid()) {
      this.setState({ show: true });
    }
    else {
      alert("Please login / verify your account");
    }
  }
  handleClose() {
    this.setState({ show: false });
  }

  render() {
    const { redirectToPost, postNameClicked, posts, loaded, post_id } = this.state;

    if (redirectToPost) {
      return <Redirect push to={{ 
        pathname: "/post", 
        state: { post_id: post_id } 
      }} />;
    }

    if (!loaded) {
      return(
        <h1> loading ... </h1> 
      )
    }

    return (
      <div>

        <div className="header">
            <Button variant="primary" onClick={this.handleShow} className="pull-right">
              Create post
            </Button>
        </div>

        <NewPost show={this.state.show} closeHandler={this.closeHandler} savedHandler={this.savedHandler}/>

        <div className="posts">
            <Container>
              {posts.map(post =>
                <Row onClick={(e) => this.renderRedirect(post, e) }>
                  <ForumCard post={post} />
                </Row>
              )}
            </Container>

        <ScrollUpButton ShowAtPosition={0} EasingType='easeOutCubic' />
        </div>

      </div>
    );
  }
}

export default Forum;
