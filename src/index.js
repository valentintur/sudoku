module.exports = function solveSudoku(matrix) {
   
  solverSudoku(matrix);

  function checkValidation(matrix, gorizontal, vertical, number) {
    for (let i = 0; i < 9; i++) {
      let gorizontalBox = 3 * Math.floor(gorizontal / 3) + Math.floor(i / 3); 
      let verticalBox = 3 * Math.floor(vertical / 3) + i % 3;
      if (number == matrix[gorizontal][i] || number == matrix[i][vertical] || number == matrix[gorizontalBox][verticalBox]) {
        return false;
      }
    }
    return true;
  }

  function solverSudoku(matrix) {
    for (let gorizontal = 0; gorizontal < 9; gorizontal++) {
      for (let vertical = 0; vertical < 9; vertical++){
        if (matrix[gorizontal][vertical] === 0) {
        for (let number = 1; number < 10; number++) {
          if (checkValidation(matrix, gorizontal, vertical, number)) {
           matrix[gorizontal][vertical] = number;
             if (solverSudoku(matrix)) {
              return true;
             }  matrix[gorizontal][vertical] = 0;
          }
        }
        return false;
        }
      }
    }
    return true;
  }
  return matrix;
}