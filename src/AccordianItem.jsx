import React from "react";
import styled from "styled-components";

const StyledQuestion = styled.span`
  font-size: 1rem;
  font-weight: 600;
  color: red;
  text-decoration: none;
`;

const StyledAnswer = styled.span`
  font-size: 1rem;
  font-weight: 400;
  color: #808080;
  text-decoration: none;
  line-height: 1.2;
`;

const AccordianItem = ({
  cardId,
  collapseId,
  collapseTarget,
  show,
  question,
  answers,
  answerImg,
  answerImgAlt,
}) => {
  return (
    <div className="card">
      <div className="card-header" id={cardId}>
        <h5 className="mb-0">
          <button
            className="btn btn-link w-100 text-left"
            data-toggle="collapse"
            data-target={collapseTarget}
            aria-expanded="true"
            aria-controls={collapseId}
          >
            <StyledQuestion> {question}</StyledQuestion>
          </button>
        </h5>
      </div>

      <div
        id={collapseId}
        className={`collapse ${show ? "show" : ""}`}
        aria-labelledby={cardId}
        data-parent="#accordion"
      >
        <div className="card-body">
          <StyledAnswer>
            <ul className="list-group list-group-flush">
              {answers.map((answer, index) => (
                <li className="list-group-item" key={"ansnwer" + index}>
                  {answer}
                </li>
              ))}
            </ul>
          </StyledAnswer>
          {answerImg && <img src={answerImg} alt={answerImgAlt} />}
        </div>
      </div>
    </div>
  );
};

export default AccordianItem;
