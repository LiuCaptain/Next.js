'use client';
import { createContext } from 'react';
import { DataState } from './Type';

const DataContext = createContext<DataState>({
  inputValue: '',
  list: []
});

export default DataContext;
