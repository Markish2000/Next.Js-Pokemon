'use client';

import { useDispatch } from 'react-redux';

import {
  addOne,
  initCounterState,
  subtractOne,
} from '@/store/counter/counterSlice';
import { useAppSelector } from '@/store';
import { useEffect } from 'react';

interface Props {
  value?: number;
}

interface CounterResponde {
  method: string;
  count: number;
}

const getApiCounter = async (): Promise<CounterResponde> => {
  const data = await fetch('/api/counter').then((res) => res.json());

  return data;
};

export const CartCounter = ({ value = 0 }: Props) => {
  const count = useAppSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  useEffect(() => {
    getApiCounter().then(({ count }) => dispatch(initCounterState(count)));
  }, [dispatch]);

  return (
    <>
      <span className='text-9xl'>{count}</span>

      <div className='flex'>
        <button
          onClick={() => dispatch(subtractOne())}
          className='flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2'
        >
          -1
        </button>

        <button
          onClick={() => dispatch(addOne())}
          className='flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2'
        >
          +1
        </button>
      </div>
    </>
  );
};
