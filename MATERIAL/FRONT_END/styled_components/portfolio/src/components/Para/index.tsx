import { Para as StyledPara } from "./styles";

export type Props = {
  children: string;
  color?: "main" | "sec";
  fweight?: "bold" | "norm";
};
const Para = ({ color = "main", children, fweight }: Props) => (
  <StyledPara fweight={fweight} color={color}>
    {children}
  </StyledPara>
);
export default Para;
