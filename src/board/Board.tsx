import { Component, createSignal, For } from "solid-js";
import randomShape from "../factory/ShapeFactory";
import BoardModel from "../Model/Board";
import Sq from "../Model/Square";
import styles from './Board.module.css';
import Shadow from "./shapes/Shadow";
import Shape from "./shapes/Shape";
import Square from "./shapes/square/Square";

const [shape, setShape] = createSignal(randomShape());
const [board, setBoard] = createSignal(new BoardModel([]));
const CLOCK_DELAY = 500;    

const onTick = () => {
    let shapeInstance = action('s')
    if (shapeInstance?.fitsIn(board())) {
        setShape(shapeInstance)
       
    }
    else {
        setBoard(new BoardModel(board().getSquares()).addSquares(shape()))
        setShape(randomShape())
    }
}

const action = (key : string) => { switch (key) {
    case 'a' : return shape().moveLeft()
    case 'd' : return shape().moveRight()
    case 'w' : return shape().rotate()
    case 's' : return shape().moveDown()
    default: return null
} }

const onKeypress = (event : any) => {
    let shapeInstance = action(event.key)
    if (shapeInstance?.fitsIn(board()))
        setShape(shapeInstance)
}

const initialize = () => {
    setInterval(onTick, CLOCK_DELAY)
    document.addEventListener("keypress", onKeypress, false);
}

const Board: Component = () => {
    initialize()
    return (
        <div class={styles.BoardView}>
            <div id="board" class={styles.Board} style={{
                width: board().getWidth() + 'px',
                height: board().getHeight() + 'px'
            }}>
                <Shadow board={board()} shape={shape()}></Shadow>
                <Shape shape={shape()}></Shape>
                <For each={board().getSquares()}>
                    {(square: Sq) => <Square color={undefined} square={square} />}
                </For>
            </div>
        </div>
    )
}

export default Board;
