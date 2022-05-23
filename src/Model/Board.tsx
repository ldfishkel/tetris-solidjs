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

    collapseLines = (lines : number[]) : Board => {
        lines.reverse().forEach(n => {
            let changedSquares : Square[] = this.squares.filter(s => s.getRelative().y < n).map(s => new Square(s.getRelative().x, s.getRelative().y + 1, s.getColor()))
            this.squares = this.squares.filter(s => s.getRelative().y > n)
            changedSquares.forEach(s => this.squares.push(s))
        })
        return this
    }
    
    checkLines = () : Board => {
        let lines = []
        for (let i = LIMITS.bottom; i >= LIMITS.top; i--)
            if (this.squares.filter(s => s.getRelative().y == i).length == LIMITS.right) {
                this.squares = this.squares.filter(s => s.getRelative().y != i)
                lines.push(i)
            }

        return this.collapseLines(lines)
    }

    addSquares(shape: AbstractShape) : Board {
        shape.render().forEach(s => this.squares.push(new Square(shape.getPos().x + s.getRelative().x, shape.getPos().y + s.getRelative().y, s.getColor())))
        return this.checkLines()
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