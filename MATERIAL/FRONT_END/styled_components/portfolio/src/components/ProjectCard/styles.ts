import styled from "styled-components";

export const Card = styled.div`
  border: 1px solid ${(props) =>(props.theme.borderColor )};
  padding: 1rem;
`;

export const BtnLink = styled.a`
  color: ${(props) =>(props.theme.bgColor )};
  font-size: 0.875rem;
  background-color: ${(props) =>(props.theme.bgBtn )};
  text-decoration: none;
  padding: 0.5rem;
  display: inline-block;
  margin-top: 1.5rem;
`;
