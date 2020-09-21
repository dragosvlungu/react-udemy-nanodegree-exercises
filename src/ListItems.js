import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';

const ListItems = (props) => (
        <ol className="item-list">
          {props.items.map((item, index) => <Item key={index} item={item} />)}
        </ol>
    );

ListItems.propTypes = {
  items: PropTypes.array.isRequired
}

export default ListItems;
