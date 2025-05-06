import React from 'react';
import { useDispatch } from 'react-redux';
import { showNotification } from './notificationSlice';

const NotifyButton = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(showNotification({ message: 'This is a success message!', type: 'success' }));
  };

  return (
    <button
      onClick={handleClick}
      className="bg-purple-600 text-green px-4 py-2 rounded mt-6 hover:bg-purple-700"
    >
      Show Notification
    </button>
  );
};

export default NotifyButton;

