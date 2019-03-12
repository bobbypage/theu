import React from 'react';

import Card from 'react-bootstrap/Card';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import NavDropdown from 'react-bootstrap/NavDropdown';

const cardStyle = {
  backgroundColor: "#fff",
  width: "100%",
  height: "100%",
};

const forumDivStyle = {
  paddingTop: "-10px",
  height:"100%",
  width:"100%",
};

class CommentCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="card-body">
        <Card bsStyle="box-shadow" style={cardStyle}>
          <Card.Body>
            <Card.Text>
              {this.props.comment[1]}
            </Card.Text>
            <NavDropdown.Divider />
            <Card.Text>
              University of Washington | {this.props.comment[0]} {this.props.op ? "OP" : "" }
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default CommentCard;
