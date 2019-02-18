import React from 'react';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const cardStyle = {
  backgroundColor: "#f8f9fa",
  width: "100%",
  height: "100%",
};

const forumDivStyle = {
  paddingBottom: "30px",
  height:"100%",
  width:"100%",
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
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>
            {this.props.text}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
    );
  }
}

export default ForumCard;
