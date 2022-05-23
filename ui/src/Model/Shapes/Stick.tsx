import AbstractShape from "../AbstractShape";
import Square from "../Square";

const COLOR: string = "#00FF00"

class Stick extends AbstractShape {

    constructor(shape: AbstractShape | void) {
        super(shape)

        if (!shape) {
            this.setBody([
                new Square(1, 2, COLOR),
                new Square(2, 2, COLOR),
                new Square(3, 2, COLOR),
                new Square(4, 2, COLOR),
            ])

            this.setDimension(4)
        }
    }

    public copyWith = (shape: AbstractShape, modification: (shape: AbstractShape) => AbstractShape): AbstractShape => modification(new Stick(shape))
}

export default Stick;