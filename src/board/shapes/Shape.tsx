import { Component, For } from "solid-js";
import styles from './Shape.module.css';
import { Body, Shapes } from "./Morphius";
import Square from "./square/Square";

const Shape : Component = (props) => {
    console.log(props)
    return (
        <div class={styles.Shape} style={{
            'left': props.shape.x + "px"
        }}>
            
            <For each={Body(props.shape.shape)}>
                {(row, i) => 
                    <For each={row}>
                        {(value, j) => <Square row={i} col={j} exists={value}/>}
                    </For>
                }
                    
            </For>
        </div>
    )
}

export default Shape;
