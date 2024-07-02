import styled from "styled-components";
import { StyledButton } from "@/components/StyledButton.js";

const StyledContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  padding: 1rem;
`;

export default function HomePage() {
  return (
    <div>
      <h1>Styled Components with Props</h1>
      <h2>Props using the ternary operator</h2>
      <StyledContainer>
        <StyledButton>Button</StyledButton>
        <StyledButton $color="danger">Button Danger</StyledButton>
      </StyledContainer>

      <h2>Using Props: CSS Block / Complex Component</h2>
      <StyledContainer>
        <StyledButton $variant="text">Button - Text</StyledButton>
        <StyledButton $variant="outlined">Button - Outlined</StyledButton>
        <StyledButton $variant="contained">Button - Contained</StyledButton>
      </StyledContainer>
    </div>
  );
}
