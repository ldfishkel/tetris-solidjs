import Sq from "../Model/Square"
import styles from '../Tetris.module.css'

interface SquareProps {
    square : Sq,
    color : string | undefined
}

function Square(props: SquareProps) {
    return (
        <div style={{
            'grid-column': props.square.getRelative().x,
            'grid-row': props.square.getRelative().y,
            'background-color': props.color || props.square.getColor()
        }} class={styles.Square}></div>
    )
}

export default Square