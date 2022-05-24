import axios from "axios";
import { Component, createSignal } from "solid-js";
import randomShape from "../Factory/ShapeFactory";
import BoardModel from "../Model/Board";
import styles from '../Tetris.module.css';
import Debris from "./Debris";
import Shadow from "./Shadow";
import Shape from "./Shape";

const [shape, setShape] = createSignal(randomShape());
const [board, setBoard] = createSignal(new BoardModel());

const CLOCK_DELAY = 500;    

const onTick = () => {
    let shapeInstance = action('s')
    if (shapeInstance?.fitsIn(board()))
        setShape(shapeInstance)
    else {
        let newBoard = new BoardModel(board()).addSquares(shape())
        setBoard(newBoard.collapseLines(newBoard.checkLines()))
        setShape(randomShape())
    }
}

const action = (key : string) => { switch (key) {
    case 'a' : return shape().moveLeft()
    case 'd' : return shape().moveRight()
    case 'w' : return shape().rotate()
    case 's' : return shape().moveDown()
    case ' ' : return shape().moveBottom(board())
    default: return null
} }

const onKeypress = (event : any) => {
    let shapeInstance = action(event.key)
    if (shapeInstance?.fitsIn(board()))
        setShape(shapeInstance)
}

const init = async()  => {
    try {
        const response = await axios.get("/hello")
        console.log(response)
    } catch (ex) {
        console.log(ex)
    }
}

const initialize = () => {
    // init()
    document.addEventListener("keypress", onKeypress, false);
    setInterval(onTick, CLOCK_DELAY)
}

const Board: Component = () => {
    initialize()
    return (
        <div class={styles.BoardView}>
            <div class={styles.Board} style={{ width: `${board().getWidth()}px`, height: `${board().getHeight()}px` }}>
                <Shadow board={board()} shape={shape()}/>
                <Shape shape={shape()}/>
                <Debris board={board()}/>
            </div>
        </div>
    )
}

export default Board;
