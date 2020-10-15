
module.exports = function towelSort (matrix) {
  if(matrix === undefined) return [];
  const newArray = matrix.map((item, index) => {
    if ( index % 2 !== 0) {
        return item.reverse();
    }
    return item;
})
return matrix.flat();
}