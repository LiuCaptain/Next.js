import { forwardRef } from 'react';

const Input = forwardRef<HTMLInputElement>((props, ref) => {
  return <input type="text" ref={ref} />;
});

Input.displayName = 'Input';

export default Input;
