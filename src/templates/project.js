import React from 'react';
import { graphql } from 'gatsby';
import Project from '../components/project';

export const query = graphql`
  query($slug: String!) {
    projectsJson(slug: { eq: $slug }) {
      title
      description
      url
      image {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`;

const ProjectTemplate = ({ data }) => {
  const project = data.projectsJson;
  const { title } = project;
  const { description } = project;
  const imageData = project.image.childImageSharp.fluid;
  const { url } = project;

  return (
    <div>
      <Project
        title={title}
        description={description}
        imageData={imageData}
        url={url}
      />
    </div>
  );
};

export default ProjectTemplate;
