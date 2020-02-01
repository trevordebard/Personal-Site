import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Helmet } from 'react-helmet';
import Section from '../components/section';
import Preview from '../components/preview-card';
import Landing from '../components/landing';

import '../components/layout.css';

const Home = () => {
  const data = useStaticQuery(graphql`
    {
      allProjectsJson {
        edges {
          node {
            title
            slug
            description
            tools
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
      }
      allExperienceJson {
        nodes {
          title
        }
        edges {
          node {
            title
            tools
            description
          }
        }
      }
    }
  `);
  const projects = data.allProjectsJson.edges;
  const experiences = data.allExperienceJson.edges;
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Trevor DeBardeleben</title>
      </Helmet>
      <Landing />
      <Section title="Projects">
        {projects.map(({ node: project }) => {
          const { title } = project;
          const { description } = project;
          const { slug } = project;
          const { tools } = project;
          const { url } = project;
          const imageData = project.image.childImageSharp.fluid;

          return (
            <Preview
              title={title}
              description={description}
              slug={slug}
              imageData={imageData}
              tools={tools}
              url={url}
            />
          );
        })}
      </Section>
      <Section title="Experience">
        {experiences.map(({ node: project }) => {
          const { title } = project;
          const { description } = project;
          const { slug } = project;
          const { tools } = project;
          const { url } = project;
          return (
            <Preview
              title={title}
              description={description}
              slug={slug}
              tools={tools}
              url={url}
            />
          );
        })}
      </Section>
    </>
  );
};

export default Home;
