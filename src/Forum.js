import React from 'react';
import NetworkHelper from './NetworkHelper.js';

import ForumCard from './ForumCard.js';
import NewPost from './NewPost.js';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Redirect } from 'react-router-dom'

const forumStyle = {
  //  backgroundColor: "#adb5bd"
};

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
    this.setState({ show: true });
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
      <div style={forumStyle}>

        <Button variant="primary" onClick={this.handleShow}>
          Create post
        </Button>

        <NewPost show={this.state.show} closeHandler={this.closeHandler} savedHandler={this.savedHandler}/>

        <Container>
          {posts.map(post =>
            <Row onClick={(e) => this.renderRedirect(post, e) }>
              <ForumCard post={post} />
            </Row>
          )}
        </Container>
      </div>
    );
  }
}

export default Forum;
