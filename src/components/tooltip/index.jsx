import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import QuestionSrc from '../../assets/img/question.png';

const StyledTooltip = styled.div`
  position: relative;
  display: inline-block;

  & .text {
    text-align: left;
    min-width: 258px;
    min-height: 97px;
    color: #fff;
    padding: 10px;
    visibility: hidden;
    z-index: 1;
    position: absolute;
    left: 50%;
    bottom: 100%;
    margin-left: -129px;
    opacity: 0;
    transition: opacity 0.75s;
    opacity: 0.9;
    background: #4A4A4A;
    border-radius: 2px;
    font-family: 'Gilroy-Medium', sans-serif;;
    font-size: 12px;
    letter-spacing: 0;

    &::after {
      content: " ";
      position: absolute;
      top: 100%;
      left: 50%;
      margin-left: -5px;
      border-width: 5px;
      border-style: solid;
      border-color: #4A4A4A transparent transparent transparent;
    }
  }

  &:hover .text {
    opacity: 1;
    visibility: visible;
  }
`;

function Tooltip(props) {
  const {
    text,
  } = props;

  return (
    <StyledTooltip>
      <img
        className="tooltip__question"
        src={QuestionSrc}
        alt="Question mark"
        width={12}
        height={12}
      />
      <div className="text">
        {text}
      </div>
    </StyledTooltip>
  );
}

Tooltip.propTypes = {
  text: PropTypes.string,
};

Tooltip.defaultProps = {
  text: 'Lorem ipsum...',
};

export default Tooltip;
