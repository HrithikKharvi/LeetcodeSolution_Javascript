/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let currentRow = new Array(rowIndex + 1).fill(0).map(d => []);
   for(let i=0; i<=rowIndex; i++){
       currentRow[i][0] = currentRow[i][i] = 1;
       for(let k=1; k<i;k++){
           currentRow[i][k] = currentRow[i-1][k-1] + currentRow[i-1][k];
       }
   }
    
    return currentRow[rowIndex];
    
};
