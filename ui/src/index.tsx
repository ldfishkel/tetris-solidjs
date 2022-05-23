/* @refresh reload */
import { render } from 'solid-js/web';

import './index.css';
import Board from './View/Board';

render(() => <Board />, document.getElementById('root') as HTMLElement);
