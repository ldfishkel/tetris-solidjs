export class Position {
    x: number
    y: number
    constructor(x : number, y : number) { this.x = x; this.y = y }
    add = (pos : Position) : Position => new Position (this.x + pos.x, this.y + pos.y) 
    equals = (pos : Position) : boolean => this.x == pos.x && this.y == pos.y 
}

export interface Bounds {
    top: number
    bottom: number
    left: number
    right: number
}