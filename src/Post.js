import React from 'react';

import NetworkHelper from './NetworkHelper.js';

import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import NavDropdown from 'react-bootstrap/NavDropdown';

import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "react-bootstrap";
import NewComment from './NewComment.js';

import CommentCard from './CommentCard.js';

const postStyle = {
  paddingTop: "30px",
};

const cardStyle = {
  width: "100%",
  height: "100%",
};

const cardTitleStyle = {
  fontSize: "30px",
};

const cardTextStyle = {
  fontSize: "14px",
};

const cardBodyStyle = {
  paddingTop: "10px",
  paddingBottom: "4px",
};

const iconStyle = {
  color: "#1C2F70",
  fontSize: "20px",
  paddingRight: "10px",
};

const iconContainerStyles = {
  paddingTop: "10px",
};

const columnStyle = {
  paddingLeft:"8px",
  paddingRight:"8px",
  textAlign:"center",
};

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.handleShow = this.handleShow.bind(this);
    this.state = {
      loading: true,
      post_title: null,
      post_text: null,
      username: null,
      show: false,
      all_comments: null,
    };

    this.closeHandler = this.closeHandler.bind(this)
    this.savedHandler = this.savedHandler.bind(this)
    this.handleLike = this.handleLike.bind(this)
  }

  componentDidMount() {
    console.log("MOUNT POST");
    console.log(this.props.location.state.post_id);

    NetworkHelper.getPost(this.props.location.state.post_id).then(res => {
      this.setState({
        loading: false,
        post_title: res.data.post_title,
        post_text: res.data.post_text,
        like_count: res.data.like_count,
        view_count: res.data.view_count,
        comment_count: res.data.comment_count,
        username: res.data.username,
        all_comments: res.data.all_comments,
      });
    });
  }

  async handleShow() {
    // check if the user is logged in
    if (await NetworkHelper.tokenValid()) {
      this.setState({ show: true });
    }
    else {
      alert("Please login / verify your account");
    }
  }

  handleLike() {
    NetworkHelper.putLike(this.props.location.state.post_id).then(res => {
      this.setState({like_count : res.data.like_count})
    });
  }

  closeHandler() {
    this.setState({show: false});
  }

  savedHandler() {
    this.setState({show: false});
    this.refreshPost();
  }

  refreshPost() {
    NetworkHelper.getPost(this.props.location.state.post_id).then(res => {
      this.setState({
        loading: false,
        post_title: res.data.post_title,
        post_text: res.data.post_text,
        like_count: res.data.like_count,
        view_count: res.data.view_count,
        comment_count: res.data.comment_count,
        username: res.data.username,
        all_comments: res.data.all_comments,
      });
    });
  }

  render() {
    const {loading, post_title, post_text, username, like_count, view_count, comment_count} = this.state;

    if (loading) {
      return (
        <h1> Loading ... </h1>
      );
    }
    
    return (
      <div style={postStyle}>
        <Container>
          <Row>
            <Col>
              <Card bsStyle="box-shadow" style={cardStyle}>
                <Card.Body>
                  <Card.Title style={cardTitleStyle}>{post_title}</Card.Title>

                  <Card.Text style={cardTextStyle}>
                    University of Washington | {username}
                  </Card.Text>

                  <NavDropdown.Divider />

                  <Card.Text style={cardBodyStyle}>
                    {post_text}
                  </Card.Text>

                  <NavDropdown.Divider />

                  <div style={iconContainerStyles}>
                    <Container>
                      <Row>
                        <Col style={columnStyle}>
                          <Button type="submit" onClick={this.handleLike}>
                            <FontAwesomeIcon style={iconStyle} icon={faThumbsUp} />
                            {like_count}
                          </Button>
                        </Col>

                        <Col style={columnStyle}>
                          <FontAwesomeIcon style={iconStyle} icon={faComment} />
                          {comment_count}
                        </Col>

                        <Col style={columnStyle}>
                          <FontAwesomeIcon style={iconStyle} icon={faEye} />
                          {view_count}
                        </Col>
                        <Col style={columnStyle}>
                              <button type="button" className="btn btn-primary" onClick={this.handleShow}>Comment</button>
                        </Col>
                      </Row>
                    </Container>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>

        <Container>
          {this.state.all_comments.map(comment =>
            <Row>
              <CommentCard comment={comment} />
            </Row>
          )}
        </Container>

        <NewComment show={this.state.show} closeHandler={this.closeHandler} savedHandler={this.savedHandler} post_id={this.props.location.state.post_id}/>
      </div>
    );
  }
}

export default Post;
