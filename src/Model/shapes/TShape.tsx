import AbstractShape from "../AbstractShape";
import Square from "../Square";

const COLOR : string = "#FF0000"

class TShape extends AbstractShape {

    constructor(shape: AbstractShape | void) {
        super(shape)

        if (!shape) 
            this.setBody([
                new Square(2, 2, COLOR),
                new Square(3, 3, COLOR),
                new Square(3, 2, COLOR),
                new Square(3, 1, COLOR),
            ])
    }
    
    public copyWith = (shape: AbstractShape, modification : (shape: AbstractShape) => AbstractShape) : AbstractShape => modification(new TShape(shape))      
}

export default TShape;