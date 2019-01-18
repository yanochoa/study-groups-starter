import React from "react";
import "./_form.scss";

const Form = () => (
  <div className="form">
    <form
      name="study-group"
      method="POST"
      data-netlify="true"
      action="/success"
      data-netlify-honeypot="bot-field"
    >
      {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
      <input type="hidden" name="form-name" value="study-group" />
      <p hidden>
        <label>
          Don’t fill this out: <input name="bot-field" />
        </label>
      </p>
      <p>
        Type of Group:
        <br />
        <span className="form__radio__cluster">
          <input type="radio" name="type" value="Study Group" checked />
          <p>Study</p>
          <br />
        </span>
        <span className="form__radio__cluster">
          <input type="radio" name="type" value="Homework Group" />
          <p>Homework</p>
        </span>
      </p>
      <p>
        <label>
          Group Title:
          <input type="text" name="title" className="form-control" />
        </label>
      </p>
      <span className="form__description">
        <p>
          <label>
            Description:{" "}
            <textarea name="description" className="form-control" />
          </label>
        </p>

        <p>
          <label>
            When:
            <input type="text" name="when" className="form-control" />
          </label>
        </p>

        <p>
          <label>
            Where:
            <input type="text" name="where" className="form-control" />
          </label>
        </p>
      </span>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
  </div>
);

export default Form;
