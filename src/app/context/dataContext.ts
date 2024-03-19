'use client';
import { createContext } from 'react';

const dataContext = createContext({
  name: '',
  age: 100
});

export default dataContext;
