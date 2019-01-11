/* global graphql */

import React from "react";
import Features from "../components/features";
import Post from "../components/post";
import "../../sass/style.scss";
import "../../sass/index.scss";
import CollaborationIcon from "../components/icon/collaboration";
import HomeworkIcon from "../components/icon/homework";
import StudyIcon from "../components/icon/study";

const IndexPage = props => (
  <main>
    <span className="rules">
      <Features data={props.data.allDataJson.edges[0].node.features} />
      <CollaborationIcon />
    </span>
    <span className="posts-section__title">
      <HomeworkIcon />
      <h1>Homework Groups:</h1>
    </span>
    <div className="posts-section__container">
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

    <span className="posts-section__title">
      <StudyIcon />
      <h1>Study Groups:</h1>
    </span>
    <div className="posts-section__container">
      <span className="posts-section__single-study-post">
        <Post
          category="Study Group"
          title="Physics 141 Test 1"
          description="If we fail, we fail together. We'll be working through the homeworks. Bring snacks if you can!"
          date="01/16/19"
          hours="12:30 pm - 5:00 pm"
          location="Main library room #411G"
        />
      </span>
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
