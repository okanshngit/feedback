import React, { useState } from 'react';
import RatingSelect from './RatingSelect';
import Button from './shared/Button';

function FeedbackForm({ addFeedback }) {
  const [text, setText] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [rating, setRating] = useState(10);
  const [message, setMessage] = useState(null);

  const handleChange = (e) => {
    setText(e.target.value);
    if (text === '') {
      setDisabled(true);
      setMessage('');
    } else if (text !== '' && e.target.value.length < 10) {
      setMessage('Text must be at least 10 characters');
      setDisabled(true);
    } else {
      setMessage(null);
      setDisabled(false);
    }
  };

  const handleClick = () => {
    const newFeedback = {
      rating,
      text,
    };

    addFeedback(newFeedback);
  };

  return (
    <div>
      <div className='bg-white  ml-12 mr-12 m-6  p-2  rounded-lg  '>
        <form className='flex justify-center items-center p-4 text-xl font-bold'>
          How would you rate your service with us
        </form>
        <RatingSelect setRating={setRating} />
        <div className='flex border-2 rounded-md p-2 mb-2'>
          <input
            className='grow pl-3 outline-none'
            type='text'
            placeholder='Enter your feedback'
            value={text}
            onChange={handleChange}
          />
          <Button handleClick={handleClick} type='submit' isDisabled={disabled}>
            Send
          </Button>
        </div>
        <div className='flex justify-center text-center'>{message}</div>
      </div>
    </div>
  );
}

export default FeedbackForm;
