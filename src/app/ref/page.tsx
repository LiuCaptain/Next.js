'use client';
import { useState, useRef, RefObject } from 'react';
import Input from './components/Input';

const RefPage = () => {
  const [time, setTime] = useState(0);
  const timer = useRef<NodeJS.Timeout>();

  const handleStart = () => {
    timer.current = setInterval(() => {
      setTime(new Date().getTime());
    }, 1000);
  };

  const handleStop = () => {
    clearInterval(timer.current);
  };

  const inputDom: RefObject<HTMLInputElement> = useRef<HTMLInputElement>(null);
  const handleComponentFocus = () => {
    inputDom.current!.focus();
  };

  return (
    <>
      <div>
        <button onClick={handleStart}>start</button>
        <button onClick={handleStop}>stop</button>
        <div>{time}</div>
      </div>
      ----------------------------------------------------
      <div>
        <Input ref={inputDom}></Input>
        <button onClick={handleComponentFocus}>聚焦</button>
      </div>
    </>
  );
};

export default RefPage;
