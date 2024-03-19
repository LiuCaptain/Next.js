'use client';
import { useImmerReducer, ImmerReducer } from 'use-immer';
import { ChangeEvent, ChangeEventHandler } from 'react';
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

const dataReducer: ImmerReducer<ArticleData, Action> = (draft, action) => {
  switch (action.type) {
    case 'input':
      draft.inputValue = action.value.toString();
      return draft;
    case 'addItem': {
      draft.list.push({ id: draft.inputValue, value: draft.inputValue });
      draft.inputValue = '';
      return draft;
    }
    case 'deleteItem': {
      draft.list.splice(Number(action.value), 1);
      return draft;
    }
    default:
      return draft;
  }
};

export default function Home() {
  const [data, dispatch] = useImmerReducer(dataReducer, {
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
