import React from 'react';
import styled from 'styled-components';

import { graphql, useStaticQuery } from 'gatsby';

const LandingContainer = styled.div`
  height: calc(100vh - 10px);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.6rem;
`;
const Header = styled.div`
  text-align: center;
  width: 60%;
  @media (max-width: 900px) {
    min-width: 80%;
  }
  h1 {
    font-size: 3.9rem;
  }
  p {
    margin-top: 1.3rem;
    line-height: 2.2rem;
  }
`;
const Links = styled.div`
  margin-top: 1.3rem;
  ul {
    padding-inline-start: 0;
    list-style-type: none;
    display: flex;
    justify-content: center;
  }
  a {
    padding: 0.2rem;
    border-bottom: 1px solid hsl(14, 89%, 55%);
    margin: 0px 5px;
    text-decoration: none;
    color: hsl(234, 50%, 79%);
  }
`;
export default () => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "Resume-Trevor-DeBardeleben.pdf" }) {
        publicURL
      }
    }
  `);
  return (
    <LandingContainer>
      <Header>
        <h1>
          Hi, I'm <span>Trevor DeBardeleben</span>
        </h1>
        <p>
          I graduated from Louisiana State University with a degree in Computer
          Science in May 2019. When I'm not watching LSU Football, I enjoy
          leveling up my skills as a software developer.
        </p>
        <Links>
          <ul>
            <li>
              <a
                href={data.file.publicURL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume{' '}
              </a>
            </li>
            <li>|</li>
            <li>
              <a href="mailto: trevordebard@gmail.com">Email</a>
            </li>
            <li>|</li>
            <li>
              <a href="https://github.com/trevordebard">Github</a>
            </li>
          </ul>
        </Links>
      </Header>
    </LandingContainer>
  );
};
