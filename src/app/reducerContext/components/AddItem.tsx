import { useContext, ChangeEvent, ChangeEventHandler } from 'react';
import DataContext from './../DataContext';
import DispatchContext from '../DispatchContext';

const AddItem = () => {
  const data = useContext(DataContext);
  const dispatch = useContext(DispatchContext);

  const handleInput: ChangeEventHandler<HTMLInputElement> = (e: ChangeEvent<HTMLInputElement>) => {
    const action = {
      type: 'input',
      value: e.target.value
    };
    dispatch(action);
  };

  const handleSubmit = () => {
    const action = {
      type: 'addItem',
      value: data.inputValue
    };
    dispatch(action);
  };

  return (
    <div>
      <input type="text" value={data.inputValue} onInput={handleInput} />
      <button type="button" onClick={handleSubmit}>
        提交
      </button>
    </div>
  );
};

export default AddItem;
