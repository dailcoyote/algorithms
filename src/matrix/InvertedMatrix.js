const solution = (matrix) => {
    let invertedMatrix = new Array();

    for (let row = matrix.length - 1; row >= 0; row--) {
        let nestedArray = new Array();

        /* SLICE ROW */
        for (let col = 0; col < matrix[row].length; col++) {
            nestedArray.push(matrix[row][col])
        }

        /* INVERT */
        for (let index = 0; index < nestedArray.length; index++) {
            if (!Array.isArray(invertedMatrix[index])) {
                invertedMatrix[index] = new Array();
            }
            invertedMatrix[index].push(nestedArray[index])
        }
    }

    return invertedMatrix;
}

export default {
    solution
}