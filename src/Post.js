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


class Post extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      post_title: null,
      post_text: null,
      username: null,
    };
  }

  componentDidMount() {
    console.log("MOUNT POST");
    console.log(this.props.location.state.post_id);

    NetworkHelper.getPost(this.props.location.state.post_id).then(res => {
      this.setState({
        loading: false,
        post_title: res.data.post_title,
        post_text: res.data.post_text,
        username: res.data.username,
      });
    });
  }

  render() {
    const {loading, post_title, post_text, username} = this.state;

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
                        <Col>
                          <FontAwesomeIcon style={iconStyle} icon={faThumbsUp} />
                          21 likes
                        </Col>

                        <Col>
                          <FontAwesomeIcon style={iconStyle} icon={faComment} />
                          10 comments
                        </Col>

                        <Col>
                          <FontAwesomeIcon style={iconStyle} icon={faEye} />
                          1012 Views
                        </Col>

                      </Row>
                    </Container>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Post;
