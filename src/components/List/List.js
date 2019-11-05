import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';


export default function List({ listStyle, itemStyle, items, component }) {
  return (
    <ul className={listStyle}>
      {items.map((item) => {
        const newProps = { key: item.id, className: itemStyle, ...item };
        return React.createElement(component, newProps);
      })}
    </ul>
  );
}

List.propTypes = {
  listStyle: PropTypes.string.isRequired,
  itemStyle: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  component: PropTypes.func.isRequired
};
