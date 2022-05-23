import { Position } from "./Position"

class Square { 
    private relX : number = 0
    private relY : number = 0
    private color : string = "#FFFFFF"

    constructor(x: number, y: number, color: string) {
        this.relX = x
        this.relY = y
        this.color = color;
    }

    public getRelative() : Position {
        return { x: this.relX, y: this.relY }
    }

    public getColor() : string {
        return this.color;
    }

    public setColor = (color: string) => this.color = color 

    public isRelative(x: number, y: number) : boolean {
        return this.relX === x && this.relY === y
    }
}

export default Square;