import AbstractShape from "../Model/AbstractShape"
import LShape from "../Model/Shapes/LShape"
import ReverseLShape from "../Model/Shapes/ReverseLShape"
import SquareShape from "../Model/Shapes/SquareShape"
import SShape from "../Model/Shapes/SShape"
import Stick from "../Model/Shapes/Stick"
import TShape from "../Model/Shapes/TShape"
import ZShape from "../Model/Shapes/ZShape"

const randomShape = () : AbstractShape => { 
    switch (Math.floor(Math.random() * 10)) {
        case 2: return new SquareShape()
        case 3: return new SShape()
        case 4: return new ZShape()
        case 5: return new Stick()
        case 6: return new TShape()
        case 7: return new LShape()
        case 8: return new ReverseLShape()
        default: return randomShape()
    }
}

export default randomShape