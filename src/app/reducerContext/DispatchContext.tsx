import { createContext, Dispatch } from 'react';
import { Action } from './Type';

const DispatchContext = createContext<Dispatch<Action>>(() => {});

export default DispatchContext;
