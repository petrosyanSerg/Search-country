import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Container } from "./Container";
import { IoMoonOutline, IoMoonSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
const HeaderEl = styled.header`
  box-shadow: var(--shadow);
  background-color: var(--color-ui-base);
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
`;

const Title = styled(Link).attrs({
  to: `/`,
})`
  color: var(--color-text);
  font-size: var(-fs-sm);
  text-decoration: none;
  font-weight: var(--fw-bold);
`;

const ModeSwitcher = styled.div`
  color: var(--color-text);
  font-size: var(-fs-sm);
  cursor: pointer;
  text-transform: capitalize;
  user-select: none;
`;

const ThemeText = styled.span`
  margin-left: 0.75rem;
`;

export default function Header() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <HeaderEl>
      <Container>
        <Wrapper>
          <Title>Where is the world?</Title>
          <ModeSwitcher onClick={toggleTheme}>
            {theme === "light" ? (
              <IoMoonOutline size="14px" />
            ) : (
              <IoMoonSharp size="14px" />
            )}
            <ThemeText>{theme} Theme</ThemeText>
          </ModeSwitcher>
        </Wrapper>
      </Container>
    </HeaderEl>
  );
}
