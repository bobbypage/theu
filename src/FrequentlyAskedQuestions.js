import React, { Component } from 'react';
import './FrequentlyAskedQuestions.css';

class FrequentlyAskedQuestions extends Component {
  render() {
    return (
      <div className="FrequentlyAskedQuestions">
        <div id="header">
            <h3>
                Frequently Asked Questions
            </h3>
        </div>
        <div id="questions">
            <div class="questionAndAnswer">
                <h5 class="question">
                    How do you know everyone is a student?
                </h5>
                <div class="answer">
                    After you sign up using your university email, we require you to click on the verification email we send you.
                </div>
            </div>
            <div class="questionAndAnswer">
                <h5 class="question">
                    Wait then how do you keep everyone anonymous if you have to use your student email?
                </h5>
                <div class="answer">
                    While you use your student email to sign up, other users will only see your username.
                </div>
            </div>
        </div>
      </div>

    );
  }
}

export default FrequentlyAskedQuestions;