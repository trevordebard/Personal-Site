import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';

import { graphql, useStaticQuery } from 'gatsby';

const LandingContainer = styled.div`
  height: calc(100vh - 10px);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.6rem;
`;
const Header = styled(animated.div)`
  text-align: center;
  width: 60%;
  @media (max-width: 900px) {
    min-width: 80%;
  }
  h1 {
    font-size: 4.3rem;
  }
  p {
    margin-top: 1.3rem;
    line-height: 2.2rem;
    font-style: italic;
  }
`;
const Links = styled(animated.div)`
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
    color: hsl(215, 100%, 95%);
    font-weight: 300;
  }
`;
const Arrow = styled.i`
  border: solid white;
  border-width: 0 1px 1px 0;
  display: inline-block;
  transform: rotate(45deg);
  padding: 10px;
  position: absolute;
  bottom: 15px;
  opacity: 1;
  animation: fade 3s infinite linear;

  @keyframes fade {
    0%,
    100% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
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
  const props = useSpring({ opacity: 1, from: { opacity: 0 } });
  const linksAnimation = useSpring({
    marginTop: 13,
    from: { marginTop: 300 },
    delay: 100,
  });
  const [arrowRef, inView] = useInView({ rootMargin: '-100px' });
  return (
    <LandingContainer>
      <Header style={props}>
        <animated.h1>
          Hi, I'm <span>Trevor DeBardeleben</span>
        </animated.h1>
        <p>
          I graduated from Louisiana State University with a degree in Computer
          Science in May 2019. When I'm not watching LSU Football, I enjoy
          leveling up my skills as a software developer.
        </p>
        <Links style={linksAnimation}>
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
        {!inView && <Arrow ref={arrowRef} />}
      </Header>
    </LandingContainer>
  );
};
