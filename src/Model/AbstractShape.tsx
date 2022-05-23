import Board from "./Board"
import flipClowise from "./MatrixHelper"
import { Position } from "./Position"
import Square from "./Square"

abstract class AbstractShape {
    private dimension : number = 3
    private position : Position = new Position(3, 0)
    private body : Square[] = []

    constructor(shape: AbstractShape | void) {
        if (shape) {
            this.dimension = shape.getDimension()
            this.position = new Position(shape.getPos().x, shape.getPos().y)
            this.body = shape.render()
        }
    }

    public moveBottom = (board: Board) : AbstractShape => this.copyWith(this, (shape) => {
        for (let y = board.bounds().top; y <= board.bounds().bottom + 3; y++)
            if (!shape.fitsInHeight(board, y)) {         
                shape.setYPos(y - 1)
                return shape
            }
        
        return shape
    })

    public moveDown = () : AbstractShape => this.copyWith(this, (shape) => {
        shape.setYPos(shape.getPos().y + 1)
        return shape
    })

    public moveLeft = () : AbstractShape => this.copyWith(this, (shape) => {
        shape.setXPos(shape.getPos().x - 1)
        return shape
    })

    public moveRight = () : AbstractShape => this.copyWith(this, (shape) => {
        shape.setXPos(shape.getPos().x + 1)
        return shape
    })

    public rotate = () : AbstractShape => this.copyWith(this, (shape) => {
        shape.setBody(flipClowise(shape.getDimension(), shape.render()))
        return shape
    })

    public getPos = () : Position => this.position
    public getDimension = () : number => this.dimension
    public render = () : Square[] => this.body
    public setYPos = (y : number) => this.position = new Position(this.getPos().x, y)  
    public setXPos = (x: number) => this.position = new Position(x, this.getPos().y)
    
    public fitsIn = (board : Board) : boolean =>  
        !this.body.some((square : Square) => !board.inBounds(this.getPos().add(square.getRelative()))) && 
        !this.body.some((square : Square) => board.onSquare(square.getRelative().add(this.getPos())))
    
    public fitsInHeight = (board : Board, y : number) : boolean =>  
        !this.body.some((square : Square) => !board.inBounds(new Position(this.getPos().x, y).add(square.getRelative()))) && 
        !this.body.some((square : Square) => board.onSquare(square.getRelative().add(new Position(this.getPos().x, y)))) 

    public abstract copyWith(shape : AbstractShape, modification : (shape: AbstractShape) => AbstractShape) : AbstractShape
    
    protected setBody = (body : Square[]) => this.body = body
    protected setDimension = (dim : number) => this.dimension = dim
}

export default AbstractShape;
