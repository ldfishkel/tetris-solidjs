import AbstractShape from "../AbstractShape";
import Square from "../Square";

const COLOR : string = "#FF00FF"

class ZShape extends AbstractShape {

    constructor(shape: AbstractShape | void) {
        super(shape)

        if (!shape) 
            this.setBody([
                new Square(1, 1, COLOR),
                new Square(2, 1, COLOR),
                new Square(2, 2, COLOR),
                new Square(3, 2, COLOR),
            ])        
    }
    
    public copyWith = (shape: AbstractShape, modification : (shape: AbstractShape) => AbstractShape) : AbstractShape => modification(new ZShape(shape))
}

export default ZShape;