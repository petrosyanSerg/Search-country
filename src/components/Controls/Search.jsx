import React from "react";
import styled from "styled-components";
import { IoSearch } from "react-icons/io5";

const InputContainer = styled.label`
  background-color: var(--color-bg);
  padding: 1rem 2rem;
  display: flex;
  align-items: center;

  border-radius: var(--radii);
  box-shadow: var(--shadow);

  width: 100%;
  margin-bottom: 1rem;
  @media (min-width: 768px) {
    margin-bottom: 0;
    width: 280px;
  }
`;
const Input = styled.input.attrs({
  type: "search",
  placeholder: "Search for a country...",
})`
  margin-left: 2rem;
  border: none;
  outline: none;
  background-color: var(--color-bg);
  color: var(--color-text);
`;
export default function Search({ search, setSearch }) {
  return (
    <InputContainer>
      <IoSearch />
      <Input
        onChange={(event) => {
          setSearch(event.target.value);
        }}
        value={search}
      />
    </InputContainer>
  );
}
