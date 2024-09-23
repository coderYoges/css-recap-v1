import React from "react";
import styled from "styled-components";
import AccordianItem from "./AccordianItem";
import { QuestionList } from "./constants";

const AccordianContainer = styled.div`
  width: 90vw;
  margin: 2rem 5vw;
`;

const Accordian = ({selectedNav}) => {
  return (
    <AccordianContainer>
      <div id="accordion">
        {QuestionList[selectedNav].map((item) => {
          return <AccordianItem key={item.cardId} {...item} />;
        })}
      </div>
    </AccordianContainer>
  );
};

export default Accordian;
