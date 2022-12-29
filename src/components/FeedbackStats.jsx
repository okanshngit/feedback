import React from 'react';

function FeedbackStats({ data }) {
  let totalRating = data.reduce((acc, item) => acc + item.rating, 0);
  let averageRating = (totalRating / data.length).toFixed(1);
  const displayAverageRating = averageRating.endsWith('.0')
    ? averageRating.slice(0, -2)
    : averageRating;

  return (
    <div className='text-white  m-4 flex'>
      <h4 className='grow'> {data.length} Reviews</h4>
      <h4>
        {' '}
        Avarage {isNaN(displayAverageRating) ? 0 : displayAverageRating} Ratings
      </h4>
    </div>
  );
}

export default FeedbackStats;
