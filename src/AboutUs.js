import React, { Component } from 'react';
import './AboutUs.css';

class AboutUs extends Component {
  render() {
    return (
      <div>
          <div class="header">
            <h3>
                About Us
            </h3>
          </div>
          <div class="content">
            We are an anonymous social media platform for students by students.
            We require a student email with verification, and....
          </div>

          <div class="content">
            <h4>
            What is The U?
            </h4>
          </div>
          <div class="content">
            <p>             
              The U is an anonymous social networking platform for university students. 
              University email-verified students can connect with other students and alumni 
              other company/industry professionals by holding meaningful conversations on a variety of different topics.
            </p>

            Whether you are new to your job or have been in the industry for a while, 
            you can find relevant information and advice from verified professionals in your field, anonymously.

            Connect with your colleagues based on interests and topics, not levels or titles. Benchmark your career with others just like you.

Our Mission
Professionals need a place to interact, and share/ask questions freely. The way we engage in conversations about career and work today is fundamentally broken.

Our vision in creating this space is to empower employees by giving an equitable voice to everyone. At Blind, we value what is said over who has said it. Through anonymity and community, we aim to flatten corporate hierarchy and remove professional barriers in order to initiate open conversations and create transparency.

Join us in our mission to empower every individual in the workplace.

Transparency helps to uplift voices that have been silenced, and we believe this results in change for the better.
</div>
      </div>
    );
  }
}

export default AboutUs;