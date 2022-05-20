import type { Component } from 'solid-js';
import Board from './board/Board';
import styles from './App.module.css';


const App: Component = () => {
  return (
    <div class={styles.App}>
      <Board></Board>
    </div>
  );
};

export default App;
