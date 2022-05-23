import AbstractShape from "../AbstractShape";
import Square from "../Square";

const COLOR : string = "#0000FF"

class SquareShape extends AbstractShape {

    constructor(shape: AbstractShape | void) {
        super(shape)

        if (!shape) 
            this.setBody([
                new Square(1, 1, COLOR),
                new Square(1, 2, COLOR),
                new Square(1, 3, COLOR),
                new Square(2, 1, COLOR),
                new Square(2, 2, COLOR),
                new Square(2, 3, COLOR),
                new Square(3, 1, COLOR),
                new Square(3, 2, COLOR),
                new Square(3, 3, COLOR),
            ])
    }
    
    public copyWith = (shape: AbstractShape, modification : (shape: AbstractShape) => AbstractShape) : AbstractShape => modification(new SquareShape(shape))      
}

export default SquareShape;