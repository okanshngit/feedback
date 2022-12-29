import React from 'react';
import FeedbackItem from './FeedbackItem';

function FeedbackList({ data, deleteItem }) {
  return (
    <div>
      {data.map((item) => (
        <FeedbackItem key={item.id} item={item} handleDelete={deleteItem} />
      ))}
    </div>
  );
}

export default FeedbackList;
