import { For } from "solid-js"
import Board from "../Model/Board"
import Square from "./Square"
import Sq from "../Model/Square"
import styles from '../Tetris.module.css'

interface DebrisProps {
    board: Board
}

const getStyles = (board: Board): any => { return {
    'width': `${board.getWidth()}px`,
    'height': `${board.getHeight()}px`,
    'grid-template-columns': `repeat(${board.bounds().right}, 1fr)`,
    'grid-template-rows': `repeat(${board.bounds().bottom}, 1fr)`
}}

function Debris(props: DebrisProps) {
    return (
        <div class={styles.Debris} style={getStyles(props.board)}>
            <For each={props.board.getSquares()}>
                {(square: Sq) => <Square color={undefined} square={square} />}
            </For>
        </div>
    );
}

export default Debris
