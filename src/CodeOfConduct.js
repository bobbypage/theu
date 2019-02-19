import React, { Component } from 'react';
import './CodeOfConduct.css';

class CodeOfConduct extends Component {
  render() {
    return (
      <div>
          <div id="header">
            <h3>
                Code of Conduct
            </h3>
          </div>
          <div id="description">
            We know that being anonymous grants you great power. But with great power comes great responsibility.
            Please review our Code of Conduct below.
          </div>
          <div id="rules">
            <h4>
                Rules
            </h4>
            <ol>
                <li>We are a tolerant community, please be respectful of all genders, races, creeds, etc...</li>
                <li>There is no harassment, bullying, threats, etc...</li>
                <li>There is no cheating. The Bounty system is to get help not answers.</li>
                <li>Do not ask users for any personal information, including names, addresses, emails, phone numbers etc...</li>
            </ol>
          </div>
          <div id="punishments">
            <h4>
                Punishments
            </h4>
            <ol>
                <li>Minor offenses, such as cheating, will be given a warning and the post removed.</li>
                <li>Two warnings are a strike.</li>
                <li>Three strikes and you will be permanently banned.</li>
                <li>Inappropriate comments, such as name calling, will result in a temporary ban of one week and one strike.</li>
                <li>Serious offenses such as racism, sexism, etc.... will result in a permanent ban.</li>
                <li>Threatening the safety of users, making bomb threats, etc... will result in a permanent ban and
                your email address and message sent to your University for disciplinary action.</li>
                <li>Temporary bans will result in a 10% deduction from your digital wallet.
                    Permanent bans will result in a 100% deduction from your digital wallet.</li>
            </ol>
          </div>
      </div>
    );
  }
}

export default CodeOfConduct;