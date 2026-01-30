import styled from "styled-components";
import Para from "../../components/Para";

export const Description = styled(Para)`
  margin-top: 1.5rem;
  margin-bottom: 2.5rem;
`;
export const ThemeBtn = styled.button`
  font-size: 0.625rem;
  border-radius: 12px;
  color: ${(props) => props.theme.bgColor};
  font-weight: bold;
  background-color: ${(props) => props.theme.mainColor};
  padding: 0.5rem;
  cursor: pointer;
`;

export const SidebarContainer = styled.div`
  position: sticky;
  top: 5rem;
  left: 0;

  @media (max-width: 768px) {
    margin-bottom: 2.5rem;
    text-align: center;
  }
`;
