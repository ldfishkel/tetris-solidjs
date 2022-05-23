import AbstractShape from "./AbstractShape";
import { Bounds, Position } from "./Position";
import Square from "./Square";

const SQUARE_NET_SIZE: number = 38.3

const LIMITS: Bounds = {
    top: 0,
    bottom: 22,
    left: 0,
    right: 10
}

class Board {
    private squares: Square[] = []

    constructor(board: Board | void) {
        if (board)
            this.squares = board.getSquares()
    }

    public collapseLines = (lines: number[]): Board => {
        lines.reverse().forEach(n => {
            let topSquares = this.squares.filter(s => s.getRelative().y < n)
            this.squares = this.squares.filter(s => s.getRelative().y > n)
            topSquares.map(s => new Square(s.getRelative().x, s.getRelative().y + 1, s.getColor()))
                .forEach(s => this.squares.push(s))
        })

        return this
    }

    public checkLines = (): number[] => {
        let lines = []
        for (let i = LIMITS.bottom; i >= LIMITS.top; i--)
            if (this.squares.filter(s => s.getRelative().y == i).length == LIMITS.right) {
                this.squares = this.squares.filter(s => s.getRelative().y != i)
                lines.push(i)
            }

        return lines
    }

    public addSquares = (shape: AbstractShape): Board => {
        shape.render().forEach(s => {
            let pos = shape.getPos().add(s.getRelative())
            this.squares.push(new Square(pos.x, pos.y, s.getColor()))
        })

        return this
    }

    public inBounds = (position: Position): boolean => position.x > LIMITS.left && position.x <= LIMITS.right && position.y >= LIMITS.top && position.y <= LIMITS.bottom
    public onSquare = (pos: Position): boolean => this.squares.some(s => s.getRelative().equals(pos))

    public getWidth = (): number => LIMITS.right * SQUARE_NET_SIZE
    public getHeight = (): number => LIMITS.bottom * SQUARE_NET_SIZE
    public bounds = () => LIMITS
    public getSquares = () => this.squares
}

export default Board;