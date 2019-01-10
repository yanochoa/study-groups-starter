import React, { Component } from "react";
import "../../sass/style.scss";
import "../../sass/form.scss";

export default class Form extends Component {
  render() {
    return (
      <div>
        <form
          name="property"
          method="post"
          data-netlify="true"
          data-netlify-bot="bot-field"
        >
          <div className="inputs">
            <div className="form-group">
              <label for="formGroupTypeOfPropertyInputs">Type of Session</label>
              <select
                className="form-control"
                id="formGroupTypeOfPropertyInput"
              >
                <option>Study Group</option>
                <option>Homework Group</option>
                <option>Office Hours</option>
              </select>

              <label for="formGroupExampleInput">Group Name</label>
              <input
                type="text"
                className="form-control"
                id="formGroupExampleInput"
                placeholder="Example input"
              />

              <label for="formGroupExampleInput2">Where</label>
              <input
                type="text"
                className="form-control"
                id="formGroupExampleInput2"
                placeholder="Another input"
              />
            </div>

            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}
