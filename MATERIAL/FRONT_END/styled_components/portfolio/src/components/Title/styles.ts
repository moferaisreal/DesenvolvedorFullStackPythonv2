import styled from "styled-components";
import type { Props } from "./index";

export const Title = styled.h3<Props>`
  font-size: ${(props) => (props.fontSize ? props.fontSize : "1.4rem")};
  color: #282a35;
  font-weight: bold;
  margin-bottom: 1rem;
`;
