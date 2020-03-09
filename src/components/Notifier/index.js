import React, { Component } from "react";
import "./Notifier.css";
import classnames from "classnames";

class Notifier extends Component {
  render() {
    const notifyclass = classnames("notify", {
      danger: this.props.offline
    });
    const message = `Take a picture and it will be in the cloud.`;
    return (
      <div className={notifyclass}>
        <p>
          <em>{message}</em>
        </p>
      </div>
    );
  }
}

export default Notifier;
