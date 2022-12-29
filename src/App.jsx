import FeedbackStats from './components/FeedbackStats';
import FeedbackData from './data/FeedbackData';
import FeedbackForm from './components/FeedbackForm';
import Header from './components/Header';
import { useState } from 'react';
import './App.css';

import FeedbackList from './components/FeedbackList';

function App() {
  const [feedbackArray, setFeedbackArray] = useState(FeedbackData);

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this feedback?')) {
      const newFeedbackArray = feedbackArray.filter((item) => item.id !== id);
      setFeedbackArray(newFeedbackArray);
    }
  };

  const addFeedback = (newFeedback) => {
    newFeedback.id = Math.random();
    setFeedbackArray([newFeedback, ...feedbackArray]);
  };

  return (
    <div className=' bg-[#202142] min-h-screen pb-5 '>
      <Header />
      <div className='flex-inline mx-auto'>
        <FeedbackForm addFeedback={addFeedback} />
        <FeedbackStats data={feedbackArray} />
        <FeedbackList data={feedbackArray} deleteItem={handleDelete} />
      </div>
    </div>
  );
}

export default App;
