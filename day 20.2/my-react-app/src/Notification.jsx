import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { hideNotification } from './notificationSlice';

const Notification = () => {
  const { message, type } = useSelector((state) => state.notification);
  const dispatch = useDispatch();                    //dispatch function so you can later trigger actions like hideNotification

  if (!message) return null;

  const colorMap = {
    success: 'bg-green-500',
    error: 'bg-red-500',
    info: 'bg-blue-500',
  };

  return (
    <div
      className={`fixed top-4 right-4 text-white px-4 py-2 rounded shadow-lg ${colorMap[type] || 'bg-gray-700'}`}
    >
      <div className="flex items-center justify-between gap-4">
        <span>{message}</span>
        <button onClick={() => dispatch(hideNotification())} className="text-xl font-bold">
          ×
        </button>
      </div>
    </div>
  );
};

export default Notification;

