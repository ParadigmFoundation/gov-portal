import React from 'react';
import PropTypes from 'prop-types';

function Table(props) {
  const {
    children,
  } = props;

  return (
    <table className="table">
      {children.map(child => child)}
    </table>
  );
}

Table.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Table;
