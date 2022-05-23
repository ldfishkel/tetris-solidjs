import { For } from "solid-js"
import AbstractShape from "../Model/AbstractShape"
import Sq from "../Model/Square"
import styles from '../Tetris.module.css'
import Square from "./Square"

const SQUARE_NET_SIZE: number = 38.3
const PADDING_LEFT : number = 4

interface ShapeProps {
    shape: AbstractShape
}

const getStyle = (shape : AbstractShape) => { return {
    'width': `${shape.getDimension() * SQUARE_NET_SIZE}px`,
    'height': `${shape.getDimension() * SQUARE_NET_SIZE}px`,
    'grid-template-columns': `repeat(${shape.getDimension()}, 1fr)`,
    'grid-template-rows': `repeat(${shape.getDimension()}, 1fr)`,
    'left': `${PADDING_LEFT + shape.getPos().x * SQUARE_NET_SIZE}px`,
    'top': `${shape.getPos().y * SQUARE_NET_SIZE}px`
}}

function Shape(props: ShapeProps) {
    return (
        <div class={styles.Shape} style={getStyle(props.shape)}>
            <For each={props.shape.render()}>
                {(square: Sq) => <Square color={undefined} square={square} />}
            </For>
        </div>
    )
}

export default Shape
