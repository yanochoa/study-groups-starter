import React from "react";
import "./_post.scss";

const Post = props => (
  <section className="post">
    <div className="post__card">
      <h6 className="post__category">{props.category}</h6>
      <h2 className="post__title">
        <b>{props.title}</b>
      </h2>
      <p className="post__description">
        <i>{props.description}</i>
      </p>
      <span className="post__when-and-where-label">
        <p className="post__date">
          <b> when:</b> {props.date}
        </p>
        <p className="post__hours"> {props.hours}</p>
      </span>
      <p className="post__location">
        <b>where:</b> {props.location}
      </p>
    </div>
  </section>
);

export default Post;
