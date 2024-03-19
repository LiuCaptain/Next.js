import { useContext } from 'react';
import dataContext from '@/app/context/dataContext';

const Context = () => {
  const data = useContext(dataContext);

  return <div style={{ marginLeft: '100px' }}>{data.name}</div>;
};

export default Context;
