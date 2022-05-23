import Board from "./Board"
import flipClowise from "./MatrixHelper"
import { Position } from "./Position"
import Square from "./Square"

abstract class AbstractShape {
    private dimension : number = 3
    private posX : number = 0
    private posY : number = 0
    private body : Square[] = []

    constructor(shape: AbstractShape | void) {
        if (shape) {
            this.dimension = shape.getDimension()
            this.posX = shape.getPos().x
            this.posY = shape.getPos().y
            this.body = shape.render()
            this.dimension = shape.getDimension()
        }
    }

    public moveBottom = (board: Board) : AbstractShape => this.copyWith(this, (shape) => {
        for (let y = board.bounds().top; y <= board.bounds().bottom + 3; y++) {
            
            if (!shape.fitsInHeight(board, y)) {         
                console.log("setting", y)
                shape.setYPos(y - 1)
                return shape
            }
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

    public getPos = () : Position => { return { x: this.posX, y: this.posY } }

    public getDimension = () : number => this.dimension
    
    public render = () : Square[] => this.body
    
    protected setBody = (body : Square[]) => this.body = body
    
    protected setDimension = (dim : number) => this.dimension = dim
    
    public setYPos = (y : number) => this.posY = y  
    
    public setXPos = (x: number) => this.posX = x

    public setColor = (color : string) => this.body.forEach(sq => sq.setColor(color))
    
    public fitsIn = (board : Board) : boolean =>  
        !this.body.some((square : Square) => !board.inBounds(this.getPos(), square.getRelative())) //bounds
    && !this.body.some((square : Square) => board.getSquares().some(s => s.getRelative().x == square.getRelative().x + this.posX 
                                                                      && s.getRelative().y == square.getRelative().y + this.posY)) 

    public fitsInHeight = (board : Board, y : number) : boolean => 
        !this.body.some((square : Square) => !board.inBounds({ x: this.posX, y: y}, square.getRelative())) 
     && !this.body.some((square : Square) => board.getSquares().some(s => s.getRelative().x == square.getRelative().x + this.posX 
                                                                       && s.getRelative().y == square.getRelative().y + y)) 

    public abstract copyWith(shape : AbstractShape, modification : (shape: AbstractShape) => AbstractShape) : AbstractShape
}

export default AbstractShape;
