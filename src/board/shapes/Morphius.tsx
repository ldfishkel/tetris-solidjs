export enum Shapes {
    SQUARE,
    LINE, 
    LSHAPE, 
    ILSHAPE, 
    TSHAPE, 
    SSHAPE, 
    ZSHAPE
}

export enum Position {
    P0, P90, P180, P270
}

const TSHAPE = [
    [0,0,0],
    [0,1,0],
    [1,1,1],
]; 
     
export const Body = (shape : Shapes) => {
    switch (shape) {
        case Shapes.TSHAPE: return TSHAPE;
        default: return TSHAPE;
    }
}