import React from 'react';
import NetworkHelper from './NetworkHelper.js';

import ForumCard from './ForumCard.js';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Redirect } from 'react-router-dom'

class NewComment extends React.Component {
  constructor(props) {
    super(props);
    this.saveHandler = this.saveHandler.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  saveHandler() {
    console.log(this.state.post_id);
    NetworkHelper.createComment(this.state.text, this.state)
                 .then(res => {this.props.savedHandler();
                              });
  }

  handleChange(e) {
    let change = {}
    change[e.target.name] = e.target.value
    this.setState(change)
  }

  render() {
    return (
      <Modal show={this.props.show} onHide={this.props.closeHandler}>
        <Modal.Header closeButton>
          <Modal.Title>Add a New comment</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <Form>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Comment Text</Form.Label>
              <Form.Control name="text" onChange={this.handleChange.bind(this)}  type="text" as="textarea" rows="3" />
            </Form.Group>
          </Form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.closeHandler}>
            Close
          </Button>
          <Button variant="primary" type="submit" onClick={this.saveHandler}>
            Post
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default NewComment;

