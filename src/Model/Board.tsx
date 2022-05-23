import AbstractShape from "./AbstractShape";
import { Bounds, Position } from "./Position";
import Square from "./Square";

const SQUARE_NET_SIZE : number = 38.3

const LIMITS : Bounds = {
    top : 0,
    bottom : 22,
    left : 0,
    right: 10
}

class Board {
    constructor(squares : Square[]) {
        this.squares = squares
    }

    addSquares(shape: AbstractShape) : Board {
        shape.render().forEach(s => this.squares.push(new Square(shape.getPos().x + s.getRelative().x, shape.getPos().y + s.getRelative().y, s.getColor())))
        return this
    }

    private squares : Square[] = []
    public getWidth = () : number => LIMITS.right * SQUARE_NET_SIZE
    public getHeight = () : number => LIMITS.bottom * SQUARE_NET_SIZE
    public bounds = () => LIMITS
    public getSquares = () => this.squares
    public inBounds = (position : Position, relative: Position): boolean => 
        position.x + relative.x > LIMITS.left && position.x + relative.x <= LIMITS.right &&
        position.y + relative.y >= LIMITS.top && position.y + relative.y <= LIMITS.bottom
}

export default Board;