import React from "react";
import "../../sass/success.scss";
import SuccessIcon from "../components/icon/success";

const Success = props => (
  <section>
    <div className="success">
      <h4 className="success__message">Thank you for your submission</h4>
      <SuccessIcon />
    </div>
  </section>
);

export default Success;
