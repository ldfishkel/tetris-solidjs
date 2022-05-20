import { Component } from "solid-js";
import styles from '../Shape.module.css';

const Square : Component = (props) => {
    


    return (
        <div style={{
            'visibility': props.exists ? 'visible' : 'hidden',
            'grid-column': props.col,
            'grid-row': props.row
        }} class={styles.Square}></div>
    )
}

export default Square;