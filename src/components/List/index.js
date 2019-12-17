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

List.propTypes = {
  listClass: PropTypes.string.isRequired,
  itemClass: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  component: PropTypes.func.isRequired
};
