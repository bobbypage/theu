import React from 'react';

import Card from 'react-bootstrap/Card';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const cardStyle = {
  backgroundColor: "#f8f9fa",
  width: "100%",
  height: "100%",
};

const forumDivStyle = {
  paddingBottom: "10px",
  height:"100%",
  width:"100%",
};

const iconStyle = {
  color: "#1C2F70",
  fontSize: "20px",
  paddingRight: "10px",
};

const detailsDivStyle = {
  paddingTop: "5px",
};

class ForumCard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div style={forumDivStyle}>
      <Card bsStyle="box-shadow" style={cardStyle}>
        <Card.Body>
          <Card.Title>{this.props.post.title}</Card.Title>
          <Card.Text>
            {this.props.post.text}
            <div style={detailsDivStyle}>
            <Card.Text>
              <Container>
                <Row>
                  <Col>
                    <FontAwesomeIcon style={iconStyle} icon={faThumbsUp} />
                    {this.props.post.like_count}
                  </Col>

                  <Col>
                    <FontAwesomeIcon style={iconStyle} icon={faComment} />
                    {this.props.post.comment_count}
                  </Col>

                  <Col>
                    <FontAwesomeIcon style={iconStyle} icon={faEye} />
                    {this.props.post.view_count}
                  </Col>

                </Row>
              </Container>
            </Card.Text>
          </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
    );
  }
}

export default ForumCard;
