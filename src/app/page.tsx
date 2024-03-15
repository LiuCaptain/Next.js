'use client';
import { useReducer, ChangeEvent, ChangeEventHandler } from 'react';
import styles from '@/app/page.module.css';

interface ArticleItem {
  id: string;
  value: string;
}
interface ArticleData {
  inputValue: string;
  list: ArticleItem[];
}

interface Action {
  type: string;
  value: string | number;
}

const articleReducer: (state: ArticleData, action: Action) => ArticleData = (state, action) => {
  const newState = { ...state };
  switch (action.type) {
    case 'input':
      newState.inputValue = action.value.toString();
      return newState;
    case 'addItem': {
      newState.list = [...newState.list, { id: state.inputValue, value: state.inputValue }];
      newState.inputValue = '';
      return newState;
    }
    case 'deleteItem': {
      newState.list = [...newState.list];
      newState.list.splice(Number(action.value), 1);
      return newState;
    }
    default:
      return state;
  }
};

export default function Home() {
  const [data, dispatch] = useReducer(articleReducer, {
    inputValue: '',
    list: []
  });

  const handleInput: ChangeEventHandler<HTMLInputElement> = (e: ChangeEvent<HTMLInputElement>) => {
    const action = { type: 'input', value: e.target.value };
    dispatch(action);
  };

  const handleAddItem = () => {
    const action = { type: 'addItem', value: data.inputValue };
    dispatch(action);
  };

  const handleDeleteItem = (index: number) => {
    const action = { type: 'deleteItem', value: index };
    dispatch(action);
  };

  return (
    <main className={styles.main}>
      <input type="text" onChange={handleInput} value={data.inputValue} />
      <button type="button" onClick={handleAddItem}>
        提交
      </button>
      <ul className={styles.ul}>
        {data.list.map((item, index) => {
          return (
            <li className={styles.li} key={item.id} onClick={() => handleDeleteItem(index)}>
              {item.value}
            </li>
          );
        })}
      </ul>
    </main>
  );
}
