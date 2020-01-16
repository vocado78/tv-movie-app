import React from 'react';
import PropTypes from 'prop-types';


export default function List({ listClass, itemClass, items, component }) {
  return (
    <ul className={listClass}>
      {items.map((item) => {
        const newProps = { key: item.id, className: itemClass, ...item };
        return React.createElement(component, newProps);
      })}
    </ul>
  );
}

List.defaultProps = {
  itemClass: ''
};

List.propTypes = {
  listClass: PropTypes.string.isRequired,
  itemClass: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  component: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired
};
