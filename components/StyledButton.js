import styled, { css } from "styled-components";

export const StyledButton = styled.button`
  border: none;
  cursor: pointer;
  padding: 1rem;
  color: white;
  border-radius: 4px;
  /* background-color: var(--color-primary); */
  background-color: ${(props) =>
    props.$color === "danger" ? "var(--color-danger)" : "var(--color-primary)"};
  /* background-color: ${({ $color }) =>
    $color === "danger" ? "var(--color-danger)" : "var(--color-primary)"}; */

  &:hover {
    color: var(--color-primary);
    background-color: var(--color-secondary);
  }

  ${(props) =>
    props.$variant === "text" &&
    css`
      background-color: transparent;
      color: var(--color-primary);
    `}

  ${(props) =>
    props.$variant === "outlined" &&
    css`
      background-color: transparent;
      color: var(--color-primary);
      border: 2px solid var(--color-primary);
    `}

    ${(props) =>
    props.$variant === "contained" &&
    css`
      background-color: var(--color-primary);
      color: white;

      &:hover {
        color: hotpink;
      }
    `}
`;
