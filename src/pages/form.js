import React, { Component } from "react";
import "../../sass/style.scss";
import "../../sass/form.scss";

export default class Form extends Component {
  render() {
    return (
      <div className="inputs">
        <form
          name="study-group"
          method="POST"
          data-netlify="true"
          action="/success"
        >
          <p>
            <label>
              Your Name:
              <input type="text" name="name" className="form-control" />
            </label>
          </p>
          <p>
            <label>
              Your Email:
              <input type="email" name="email" className="form-control" />
            </label>
          </p>
          <p>
            <label>
              Your Role:
              <select name="role[]" multiple className="form-control">
                <option value="leader">Leader</option>
                <option value="follower">Follower</option>
              </select>
            </label>
          </p>
          <p>
            <label>
              Message: <textarea name="message" className="form-control" />
            </label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
      </div>
    );
  }
}
