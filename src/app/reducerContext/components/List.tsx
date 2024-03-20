import { useContext } from 'react';
import DataContext from '../DataContext';
import DispatchContext from '../DispatchContext';

const List = () => {
  const data = useContext(DataContext);
  const dispatch = useContext(DispatchContext);

  const handleClickItem = (index: number) => {
    const action = {
      type: 'deleteItem',
      value: index.toString()
    };
    dispatch(action);
  };

  return (
    <div>
      <ul>
        {data.list.map((item, index) => {
          return (
            <li key={item.id} onClick={() => handleClickItem(index)}>
              {item.content}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default List;
