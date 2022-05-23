import { For } from "solid-js";
import AbstractShape from "../../Model/AbstractShape";
import Board from "../../Model/Board";
import Sq from "../../Model/Square";
import styles from './Shape.module.css';
import Square from "./square/Square";

const SQUARE_NET_SIZE : number = 38.3
const COLOR : string = "rgba(255, 255, 255, 0.5)"

interface ShadowProps {
    shape : AbstractShape
    board : Board
}

const fitsIn = (board : Board, shape : AbstractShape, y: number) => !shape.render().some((square : Sq) => !board.inBounds({x : shape.getPos().x, y: y}, square.getRelative()))
const place = (board : Board, shape : AbstractShape) : number => {
    for (let y = board.bounds().bottom; y >= 0; y--)
        if (fitsIn(board, shape, y))
            return y

    return 0
}
const getPosX = (shape : AbstractShape) => `${shape.getPos().x * SQUARE_NET_SIZE}px`
const getPosY = (board : Board, shape : AbstractShape) => `${place(board, shape) * SQUARE_NET_SIZE}px`
const getDimension = (shape: AbstractShape) => `repeat(${shape.getDimension()}, 1fr)`
const getDimensionPx = (shape: AbstractShape) => `${shape.getDimension() * SQUARE_NET_SIZE}px`

function Shadow(props: ShadowProps) {
    return (
        <div class={styles.Shape} style={{
            'width': getDimensionPx(props.shape),
            'height': getDimensionPx(props.shape),
            'grid-template-columns': getDimension(props.shape),
            'grid-template-rows': getDimension(props.shape),
            'left': getPosX(props.shape),
            'top': getPosY(props.board, props.shape)
        }}>

            <For each={props.shape.render()}>
                {(square: Sq) => <Square color={COLOR} square={square} />}
            </For>

        </div>        
    );
}

export default Shadow;
