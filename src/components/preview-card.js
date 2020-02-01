import React from 'react';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';
import { animated, useSpring } from 'react-spring';
import 'intersection-observer'; // polyfill

const PreviewContainer = styled(animated.div)`
  margin-bottom: 2rem;
  width: 100%;
  background-color: hsl(220, 67%, 17%);
  padding: 1.6rem;
  border-radius: 3px;
  box-shadow: 0 4px 6px hsla(0, 0%, 0%, 0.2);
  :hover {
    box-shadow: 0 6px 8px hsla(0, 0%, 0%, 0.4);
  }
  @media (min-width: 600px) {
    flex: 1 50%;
    max-width: calc(50% - 0.5rem);
  }

  h3 {
    font-size: 2.9rem;
  }

  h3 a {
    text-decoration: none;
  }

  p {
    margin-top: 1rem;
    font-size: 1.5rem;
  }
  hr {
    border: 0.5px solid white;
  }
`;
const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const Tag = styled.div`
  border-radius: 4px;
  margin-top: 1rem;
  border: 1px solid ${props => props.borderColor};
  color: ${props => props.borderColor};
  width: fit-content;
  padding: 5px;
  margin-right: 1rem;
  p {
    font-size: 1rem;
    margin: 0;
  }
`;
function renderTags(tools) {
  return tools.map(tool => (
    <Tag id={tool} borderColor="hsl(14, 89%, 55%)">
      <p>{tool}</p>
    </Tag>
  ));
}
const Preview = ({ title, description, tools, url }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const entrance = useSpring({
    marginTop: inView ? 0 : 100,
  });

  return (
    <PreviewContainer style={entrance} ref={ref}>
      <h3>
        <a href={url} target="_blank" rel="noopener noreferrer">
          {title}
        </a>
      </h3>
      <p>{description}</p>
      <TagContainer>{tools && renderTags(tools)}</TagContainer>
    </PreviewContainer>
  );
};

export default Preview;
