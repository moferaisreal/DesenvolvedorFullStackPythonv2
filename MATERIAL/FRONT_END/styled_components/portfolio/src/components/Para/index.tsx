import { Para as StyledPara } from "./styles";

export type Props = {
  children: string;
  color?: "main" | "sec";
  fweight?: "bold" | "norm";
  fontSize?: string;
};

// Usage with defaults
const Para = ({
  color = "main",
  children,
  fweight = "norm",
  fontSize = ".8rem",
}: Props) => (
  <StyledPara fontSize={fontSize} fweight={fweight} color={color}>
    {children}
  </StyledPara>
);
export default Para;
