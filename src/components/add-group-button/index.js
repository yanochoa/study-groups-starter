import React from "react";

import Link from "gatsby-link";
import "./_add-group-button.scss";
const AddListing = props => (
  <section className="addGroupButton">
    {/* link to /form to complete functionality */}
    <Link to="/form">
      <button type="button" className="btn btn-primary">
        Add a new group
      </button>
    </Link>
  </section>
);

export default AddListing;
