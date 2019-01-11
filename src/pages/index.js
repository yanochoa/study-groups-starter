/* global graphql */

import React from "react";
import Features from "../components/features";
import Post from "../components/post";
import "../../sass/style.scss";
import "../../sass/index.scss";
import CollaborationIcon from "../components/icons/collaboration";
import HomeworkIcon from "../components/icons/homework";

const IndexPage = props => (
  <main>
    <span className="rules">
      <Features data={props.data.allDataJson.edges[0].node.features} />
      <CollaborationIcon />
    </span>
    <span className="homework__title">
      <HomeworkIcon />
      <h1>Homework Groups:</h1>
    </span>
    <div className="homework__container">
      <Post
        category="Homework"
        title="CSC 202 (Dr. Austin) Homework 04"
        description="Starting the homework program for chapter 4: Overriding constructors."
        date="01/14/19"
        hours="11:00 am - 1:00 pm"
        location="science and engineering library #213A"
      />
      <Post
        category="Homework"
        title="MATH 146 (Dr. Johnson) Homework 6"
        description="Working on the homework for chapter 2 Applications of Integration"
        date="01/15/19"
        hours="2:30 pm - 4:00 pm"
        location="Caffe Luce"
      />
    </div>
  </main>
);

export default IndexPage;

export const pageQuery = graphql`
  query IndexQuery {
    allDataJson {
      edges {
        node {
          features {
            title
          }
          howTo {
            title
          }
        }
      }
    }
  }
`;
