import React from 'react';

import QuestionIconSrc from '../../assets/img/question.png';

import './index.scss';

function QuestionIcon() {
  return (
    <img
      src={QuestionIconSrc}
      alt="Question"
      className="question-icon"
    />
  );
}

export default QuestionIcon;
