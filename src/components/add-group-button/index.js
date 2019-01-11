import React from "react";

import Link from "gatsby-link";
import "./_add-group-button.scss";
const AddListing = props => (
  <section className="addGroupButton">
    <Link to="/form">
      <button type="button" className="btn btn-primary">
        New study group
      </button>
    </Link>
  </section>
);

export default AddListing;
