import AbstractShape from "../AbstractShape";
import Square from "../Square";

const COLOR : string = "#F0F0F0"

class LShape extends AbstractShape {

    constructor(shape: AbstractShape | void) {
        super(shape)

        if (!shape) 
            this.setBody([
                new Square(1, 2, COLOR),
                new Square(2, 2, COLOR),
                new Square(3, 2, COLOR),
                new Square(3, 3, COLOR),
            ])
    }
    
    public copyWith = (shape: AbstractShape, modification : (shape: AbstractShape) => AbstractShape) : AbstractShape => modification(new LShape(shape))
}

export default LShape;