import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

/**
 * Props is an array that is the data source for the list
 */
function List (props) {
  const list = props.data;
  const listItems = list.map((i) => {
  // var icon = '';

  // if (i.purchased) {
  //   icon = <FontAwesomeIcon icon={faCheck} />
  // } 
  return (
    <li key={i.id.toString()}>
      {i.name}
      {(i.purchased) && <FontAwesomeIcon icon={faCheck} />}

    </li>
  )
  });
  return <ul className="list-group">{listItems}</ul>;
}

export default List;
