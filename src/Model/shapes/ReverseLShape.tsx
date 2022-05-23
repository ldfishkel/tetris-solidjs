import AbstractShape from "../AbstractShape";
import Square from "../Square";

const COLOR : string = "#FFFF00"

class ReverseLShape extends AbstractShape {

    constructor(shape: AbstractShape | void) {
        super(shape)

        if (!shape) 
            this.setBody([
                new Square(1, 2, COLOR),
                new Square(2, 2, COLOR),
                new Square(3, 2, COLOR),
                new Square(3, 1, COLOR),
            ])
    }

    public copyWith = (shape: AbstractShape, modification : (shape: AbstractShape) => AbstractShape) : AbstractShape => modification(new ReverseLShape(shape))   
}

export default ReverseLShape;