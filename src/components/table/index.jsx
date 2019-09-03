import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledTable = styled.table`
  width: 100%;
  background: #fff;
  border: 1px solid #ededed;
  box-shadow: 3px 9px 15px 0 rgba(0, 0, 0, 0.07);
  font-size: 20px;
  color: #4a4a4a;
  text-align: left;
  border-radius: 2px;

  & td {
    border: none;
    font-family: 'DINPro-Light', sans-serif;
    font-size: 18px;
    color: #4a4a4a;
    text-align: left;
  }

  & th {
    padding: 17px 10px 17px 18px;
    font-family: 'Gilroy-Medium', sans-serif;
    font-size: 20px;
    color: #4a4a4a;
    text-align: left;
    font-weight: normal;
    border: none;
  }

  & th:last-child {
    border-right: 1px solid #ededed;
  }

  & td {
    padding: 10px 18px;
    border-top: 1px solid #ededed;
  }
`;

function Table(props) {
  const {
    children,
  } = props;

  return (
    <StyledTable>
      {children.map(child => child)}
    </StyledTable>
  );
}

Table.propTypes = {
  children: PropTypes.oneOfType(
    [PropTypes.element, PropTypes.arrayOf(PropTypes.element)],
  ).isRequired,
};

export default Table;
