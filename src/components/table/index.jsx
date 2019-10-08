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
  margin-bottom: 20px;
  display: block;
  empty-cells: show;

  & thead {
    position: relative;
    display: block;
    width: 100%;
    overflow-y: hidden;
  }

  & tbody {
    max-height: 600px;
    overflow-y: auto;
    display: block;
    position: relative;
    width: 100%;
  }

  & td {
    border: none;
    font-family: 'DINPro-Light', sans-serif;
    font-size: 18px;
    color: #4a4a4a;
    text-align: left;
    white-space: nowrap;
    flex-basis: 100%;
    flex-grow: 2;
    display: block;
    padding: 10px 18px;
    border-top: 1px solid #ededed;
  }

  & th {
    padding: 17px 10px 17px 18px;
    font-family: 'Gilroy-Medium', sans-serif;
    font-size: 20px;
    color: #4a4a4a;
    text-align: left;
    font-weight: normal;
    border: none;
    white-space: nowrap;
    flex-basis:100%;
    flex-grow:2;
    display: block;
  }

  tr {
    width: 100%;
    display:flex;
  }

  & th:last-child,
  & td:last-child {
    margin-right: 15px;
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
