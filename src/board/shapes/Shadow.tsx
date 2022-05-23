import { For } from "solid-js";
import AbstractShape from "../../Model/AbstractShape";
import Board from "../../Model/Board";
import Sq from "../../Model/Square";
import Shape from "./Shape";
import styles from './Shape.module.css';
import Square from "./square/Square";

const SQUARE_NET_SIZE : number = 38.3
const COLOR : string = "rgba(255, 255, 255, 0.5)"

interface ShadowProps {
    shape : AbstractShape
    board : Board
}

const fitsIn = (board : Board, shape : AbstractShape, y: number) => 
        !shape.render().some((square : Sq) => !board.inBounds({x : shape.getPos().x, y: y}, square.getRelative()))
     && !shape.render().some((square : Sq) => board.getSquares().some(s => s.getRelative().x == square.getRelative().x + shape.getPos().x 
                                                                      && s.getRelative().y == square.getRelative().y + y)) 

const place = (board : Board, shape : AbstractShape) : number => {
    for (let y = board.bounds().top; y <= board.bounds().bottom; y++)
        if (!fitsIn(board, shape, y))
            return y - 1

    return 0
}

const getStyles = (board : Board, shape : AbstractShape) => { return  {
    'width': `${shape.getDimension() * SQUARE_NET_SIZE}px`,
    'height': `${shape.getDimension() * SQUARE_NET_SIZE}px`,
    'grid-template-columns': `repeat(${shape.getDimension()}, 1fr)`,
    'grid-template-rows': `repeat(${shape.getDimension()}, 1fr)`,
    'left': `${shape.getPos().x * SQUARE_NET_SIZE}px`,
    'top': `${place(board, shape) * SQUARE_NET_SIZE}px`
}}

function Shadow(props: ShadowProps) {
    return (
        <div class={styles.Shape} style={getStyles(props.board, props.shape)}>
            <For each={props.shape.render()}>
                {(square: Sq) => <Square color={COLOR} square={square} />}
            </For>
        </div>        
    );
}

export default Shadow;
