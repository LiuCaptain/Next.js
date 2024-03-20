'use client';
import { useImmerReducer, ImmerReducer } from 'use-immer';
import AddItem from './components/AddItem';
import List from './components/List';
import DataContext from './DataContext';
import DispatchContext from './DispatchContext';
import { DataState, Action } from './Type';

const dataReducer: ImmerReducer<DataState, Action> = (draft, action) => {
  switch (action.type) {
    case 'input':
      draft.inputValue = action.value;
      return draft;
    case 'addItem':
      draft.list.push({
        id: action.value,
        content: action.value
      });
      draft.inputValue = '';
      return draft;
    case 'deleteItem':
      draft.list.splice(Number(action.value), 1);
      return draft;
    default:
      return draft;
  }
};

const ReducerContext = () => {
  const [data, dispatch] = useImmerReducer(dataReducer, {
    inputValue: '',
    list: []
  });

  return (
    <DataContext.Provider value={data}>
      <DispatchContext.Provider value={dispatch}>
        <div>
          <AddItem></AddItem>
          <List></List>
        </div>
      </DispatchContext.Provider>
    </DataContext.Provider>
  );
};

export default ReducerContext;
