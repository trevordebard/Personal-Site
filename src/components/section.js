import React from 'react';
import styled from 'styled-components';

const LayoutContainer = styled.div`
  max-width: 90%;
  width: 80%;
  margin: 5rem auto;
  h1 {
    margin-bottom: 2rem;
    display: grid;
    grid-template-columns: minmax(20px, 1fr) auto minmax(20px, 1fr);
    align-items: center;
    text-align: center;
    grid-gap: 20px;
    width: 100%;

    :before,
    :after {
      content: '';
      border-top: 1px solid;
    }
  }
`;

const Items = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const Section = ({ children, title }) => (
  <LayoutContainer>
    <h1>{title}</h1>
    <Items>{children}</Items>
  </LayoutContainer>
);

export default Section;
