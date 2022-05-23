import AbstractShape from "../AbstractShape";
import Square from "../Square";

const COLOR : string = "#00FFFF"

class SShape extends AbstractShape {

    constructor(shape: AbstractShape | void) {
        super(shape)

        if (!shape) 
            this.setBody([
                new Square(3, 1, COLOR),
                new Square(2, 1, COLOR),
                new Square(2, 2, COLOR),
                new Square(1, 2, COLOR),
            ])        
    }
    
    public copyWith = (shape: AbstractShape, modification : (shape: AbstractShape) => AbstractShape) : AbstractShape => modification(new SShape(shape))
}

export default SShape;