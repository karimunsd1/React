import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './counterSlice';

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();                                   //send actions (like increment or decrement) to the Redux store

  return (
   <div className="flex flex-col items-center gap-4 mt-10">
  <h2 className="text-2xl font-bold text-gray-800">Count: {count}</h2>
  <div className="flex gap-4">
    <button
      onClick={() => dispatch(increment())}                                     //action (increment or decrement) to update the state
      className="bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded shadow"
    >
      +
    </button>
    <button
      onClick={() => dispatch(decrement())}
      className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded shadow"
    >
      -
    </button>
  </div>
</div>
 
  );
};

export default Counter;
