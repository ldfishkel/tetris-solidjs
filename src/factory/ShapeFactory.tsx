import AbstractShape from "../Model/AbstractShape"
import LShape from "../Model/shapes/LShape"
import ReverseLShape from "../Model/shapes/ReverseLShape"
import SquareShape from "../Model/shapes/SquareShape"
import SShape from "../Model/shapes/SShape"
import Stick from "../Model/shapes/Stick"
import TShape from "../Model/shapes/TShape"
import ZShape from "../Model/shapes/ZShape"

const randomShape = () : AbstractShape => { switch (Math.floor(Math.random() * 10)) {
    case 7:
        return new LShape()
    case 8:
        return new ReverseLShape()
    case 2:
        return new SquareShape()
    case 3:
        return new SShape()
    case 4:
        return new ZShape()
    case 5:
        return new Stick()
    case 6:
        return new TShape()
    default:
        return randomShape()
} }

export default randomShape