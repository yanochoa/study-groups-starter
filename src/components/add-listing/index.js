import React from "react";

import "./_add-listing.scss";
import Link from "gatsby-link";
const AddListing = props => (
  <section className="addlisting" id="addlisting">
    {/*<div className="row">
         <div className="col-12">
          <h2 className="addlisting-title">Because learning is better together</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <p> Let's do this together </p>
        </div>
      </div> */}
    <Link to="/form">
      <button type="button" className="btn btn-primary">
        New study group
      </button>
    </Link>
  </section>
);

export default AddListing;
