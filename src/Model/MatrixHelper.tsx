import Square from "./Square"

const rotateMatrix = (matrix: any[][]) => {
    flipMajorDiagonal(matrix)
    reverseEachRow(matrix)
    return matrix
}

const flipMajorDiagonal = (matrix: any[][]) => {
    for (let i = 0; i < matrix.length; i++)
        for (let j = i; j < matrix[0].length; j++) {
            let temp = matrix[i][j]
            matrix[i][j] = matrix[j][i]
            matrix[j][i] = temp
        }

    return matrix;
}

const reverseEachRow = (matrix: any[][]) => {
    for (let i = 0; i < matrix.length; i++) 
        matrix[i].reverse();

    return matrix
}

const initStructure = (dim: number) => {
    var matrix : (Square | null)[][] = []
    
    for(var i: number = 0; i < dim; i++) {
        matrix[i] = []
        for(var j: number = 0; j < dim; j++) 
            matrix[i][j] = null
    }

    return { 
        fillWithData : (data : Square[]) => {
            data.forEach(s => matrix[s.getRelative().x - 1][s.getRelative().y - 1] = s)
            return matrix;
        } 
    }
}

const buildNewBody = (matrix: any[][]) => {
    let newBody = []
    let square : Square | null = null
    
    for (let i = 0; i < matrix.length; i++)
        for (let j = 0; j < matrix[i].length; j++)
            if (square = matrix[i][j])
                newBody.push(new Square(i + 1, j + 1, square?.getColor()))

    return newBody
}

const flip = (dimension : number, body: Square[]) => {
    let matrix : any[][] = initStructure(dimension).fillWithData(body)
    return buildNewBody(rotateMatrix(matrix))
}
    
export default flip