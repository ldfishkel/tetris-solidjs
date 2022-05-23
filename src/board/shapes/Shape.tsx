import { For } from "solid-js";
import AbstractShape from "../../Model/AbstractShape";
import Sq from "../../Model/Square";
import styles from './Shape.module.css';
import Square from "./square/Square";

const SQUARE_NET_SIZE : number = 38.3

interface ShapeProps {
    shape : AbstractShape
}

const getPosX = (shape : AbstractShape) => `${shape.getPos().x * SQUARE_NET_SIZE}px`
const getPosY = (shape : AbstractShape) => `${shape.getPos().y * SQUARE_NET_SIZE}px`
const getDimension = (shape: AbstractShape) => `repeat(${shape.getDimension()}, 1fr)`
const getDimensionPx = (shape: AbstractShape) => `${shape.getDimension() * SQUARE_NET_SIZE}px`

function Shape(props: ShapeProps) {
    return (
        <div class={styles.Shape} style={{
            'width': getDimensionPx(props.shape),
            'height': getDimensionPx(props.shape),
            'grid-template-columns': getDimension(props.shape),
            'grid-template-rows': getDimension(props.shape),
            'left': getPosX(props.shape),
            'top': getPosY(props.shape)
        }}>

            <For each={props.shape.render()}>
                {(square: Sq) => <Square color={undefined} square={square} />}
            </For>

        </div>

        
    );
}

export default Shape;
