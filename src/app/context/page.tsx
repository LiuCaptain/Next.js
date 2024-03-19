'use client';
import Header from './components/Header';
import Body from './components/Body';
import styles from './page.module.css';
import dataContext from './dataContext';

const Context = () => {
  return (
    <div className={styles.container}>
      <dataContext.Provider
        value={{
          name: '小明',
          age: 18
        }}
      >
        <Header></Header>
        <Body></Body>
      </dataContext.Provider>
    </div>
  );
};

export default Context;
