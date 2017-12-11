import React from 'react';

const ListComponent = props => {
  return (
    <div>
      <ul>{props.listData.map((item, index) => <li key={index}>{item}</li>)}</ul>
    </div>
  );
};

export default ListComponent;
