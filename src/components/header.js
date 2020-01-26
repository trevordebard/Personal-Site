import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const Header = styled.header`
  padding: 10px 70px;
  border-bottom: 1px solid #e9e9e9;
  a {
    color: black;
    font-weight: 700;
    text-decoration: none;
  }
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Left = styled.div``;
const Right = styled.div`
  font-size: 1.2rem;
`;
function header(props) {
  return (
    <Header>
      <Left>
        <Link to="/">Trevor DeBardeleben</Link>
      </Left>
      <Right>
        <p>Projects / Resume / Contact</p>
      </Right>
    </Header>
  );
}

export default header;
