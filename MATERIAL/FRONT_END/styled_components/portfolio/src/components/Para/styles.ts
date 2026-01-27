import styled from "styled-components";
import type { Props } from "./index";

export const Para = styled.p<Props>`
  font-size: 0.875rem;
  color: ${(props) => (props.color === "main" ? "#282a35" : "#949494")};
  line-height: 1.375rem;
  font-weight: ${(props) => (props.fweight === "bold" ? "550" : "350")};
`;
