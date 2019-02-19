import React, { Component } from 'react';
import './ContactUs.css';

class ContactUs extends Component {
  render() {
    return (
      <div>
          <div id="header">
            <h3>
                Contact Us
            </h3>
          </div>
          <div id="content">
            <form>
                <div>
                  <input type="text" name="email" placeholder="Email Address" />
                </div>
                <div>
                  <select>
                    <option value="selection">Please Select an Option...</option>
                    <option value="new_uni">New University Request</option>
                    <option value="other">Other...</option>
                  </select>
                </div>
                <div>
                  <textarea name="message" rows="10" cols="30" placeholder="What do you want to tell us?" />
                </div>
                <div>
                  <input type="submit" value="Submit" />
                </div>
            </form>
          </div>
      </div>
    );
  }
}

export default ContactUs;