import React from "react";
import styled from "styled-components";
import { NavbarList } from "./constants";

const StyledContainer = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;
  pointer-events: auto;
  cursor: pointer;
`;

const StyledList = styled.li`
  font-size: 1rem;
  font-weight: 600;
  user-select: none;
  pointer-events: auto;
  cursor: pointer;
`;

const NavbarPage = ({ selectedNav, onSelectNav }) => {
  return (
    <StyledContainer>
      {NavbarList.map(({ navId, navTitle }) => {
        return (
          <StyledList
            key={navId}
            onClick={() => {
              onSelectNav(navId);
              return false;
            }}
            className={`${
              selectedNav === navId ? "text-success" : "text-secondary"
            }`}
          >
            {navTitle}
          </StyledList>
        );
      })}
    </StyledContainer>
  );
};

export default NavbarPage;
