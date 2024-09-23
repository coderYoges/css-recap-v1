import React, { useState } from "react";
import styled from "styled-components";
import Accordian from "./Accordian";
import NavbarPage from "./NavBar";
import { NavbarList } from "./constants";

const HeaderStyled = styled.header`
  background-color: #f2f2f2;
  color: #111111;
  font-family: "Open Sans", sans-serif;
  font-size: 1rem;
  width: 100vw;
`;

const HeaderBox = styled.div`
  display: flex;
  flex-direction: row;
  pointer-events: none;
  padding: 1rem 5vw;
  justify-content: space-between;
`;

const HeaderTitle = styled.h2`
  font-size: 2rem;
  font-weight: 600;
`;

const SectionStyled = styled.section`
  background-image: none;
  color: #111111;
  text-align: center;
  font-size: 1rem;
  line-height: 1.6;
  font-family: "Open Sans", sans-serif;
`;

const PageHeader = styled.h2`
  font-size: 3rem;
  background-image: none;
  width: 565px;
  text-transform: uppercase;
  font-weight: 700;
  margin: 2rem auto 0;
  line-height: 1.1;
  color: #f16fa9 !important;
  word-wrap: break-word;
  position: relative;
`;

const PageSubheader = styled.p`
  font-style: italic;
  width: 864px;
  margin: 20px auto 0;
  font-size: 1.125rem;
  font-weight: 300;
  line-height: 1.6;
  word-wrap: break-word;
  position: relative;
`;

const App = () => {
  const [nav, selectNav] = useState(NavbarList[0].navId);
  const onSelectNav = (navId) => selectNav(navId);

  return (
    <React.Fragment>
      <HeaderStyled>
        <HeaderBox>
          <HeaderTitle>CSS RECAP</HeaderTitle>
          <NavbarPage onSelectNav={onSelectNav} selectedNav={nav}/>
        </HeaderBox>
      </HeaderStyled>
      <SectionStyled>
        <PageHeader>FACTS & QUESTIONS</PageHeader>
        <PageSubheader>Click to select the text box.</PageSubheader>
      </SectionStyled>
      <Accordian selectedNav={nav}/>
    </React.Fragment>
  );
};

export default App;
