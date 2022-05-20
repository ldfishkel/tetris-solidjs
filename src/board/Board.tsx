import { Component, createSignal } from "solid-js"

import styles from './Board.module.css';
import Shape from "./shapes/Shape";
import { Position, Shapes } from "./shapes/Morphius";

const [shape, setShape] = createSignal({
    x: 0,
    position : Position.P0,
    shape: Shapes.TSHAPE
});
const CLOCK_DELAY = 500;

const onTick = () => {
}

const onKeypress = (event : any) => {
    console.log(event)
    if (event.key === 'a')
        setShape({...shape(), x: shape().x - 50})
    else if (event.key === 'd') 
        setShape({...shape(), x: shape().x + 50})
}

const Board: Component = () => {
  
    setInterval(onTick, CLOCK_DELAY)

    document.addEventListener("keypress", onKeypress, false);


    return (
        <div class={styles.BoardView}>
            
            <div id="board" class={styles.Board}>
                <Shape shape={shape()}></Shape>
            </div>
        </div>
    )
}

export default Board;


