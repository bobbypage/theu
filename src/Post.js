import React from 'react';

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
  }
  render() {
    const title = "Stay at Goldman vs Squarespace or Datadog";
    const text = `

    Currently a mid level engineer on a client facing tech team at GS but have been interviewing around to gauge the market and see what else is out there as I'm getting tired of finance.

TC for 2018 - 200k (140k base + 60k bonus)
Base for 2019 - 151k
YOE: 3.5

Managed to land offers from (base/bonus/stock per year/sign on):
1. Squarespace - 151k/0/$18k RSUs/20k
2. Data Dog - 160k/0/900 options/20k

Also had offers from:
1. Jet - 130k/15%/5k/0 - but were not willing to negotiate up from there
2. Amazon (NYC) - but they downleveled me to SDE 1 and therefore we'rent able to match current TC due to pay bands

Logic is telling me to stay at GS for another year for TC or passively interview at other Big N companies in NYC this year.
Just trying to get feedback from this community as to whether that's the right decision here given that I'm looking to move from finance.

Thank you in advance for your input!
    `
    
    
    ;
	  const titleClicked = this.props.location.state.title;
    return (
      <div style={postStyle}>
        <Container>
          <Row>
            <Card bsStyle="box-shadow" style={cardStyle}>
              <Card.Body>
                <Card.Title style={cardTitleStyle}>{titleClicked}</Card.Title>

                <Card.Text style={cardTextStyle}>
                  University of Washington | vavacoda
                </Card.Text>

                <NavDropdown.Divider />

                <Card.Text style={cardBodyStyle}>
                  {text}
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

          </Row>


        </Container>

      </div>
    );
  }
}

export default Post;
