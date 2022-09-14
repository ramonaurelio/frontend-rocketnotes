import styled from "styled-components";

export const Container = styled.button`
  background: 0;
  color: ${({ theme, isActive }) =>
    isActive ? theme.COLORS.ORANGE : theme.COLORS.GRAY_100};

  border: 0;
  font-size: 16px;
`;
