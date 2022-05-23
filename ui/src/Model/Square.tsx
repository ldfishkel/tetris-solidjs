import { Position } from "./Position"

class Square {
    private relative : Position
    private color: string = "#FFFFFF"

    constructor(x: number, y: number, color: string) {
        this.relative = new Position(x, y)
        this.color = color;
    }

    public getRelative = (): Position => this.relative
    public getColor = (): string => this.color
}

export default Square;