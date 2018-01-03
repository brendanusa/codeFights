// should rotate 90 degrees (easy)

function rotateImage(a) {

  let rotatedImage = [];

  for (var row = 0; row < a.length; row++) {
    const newRow = [];
    for (var col = 0; col < a.length; col++) {
      newRow[col] = a[a.length - col - 1][row];
    }
    rotatedImage.push(newRow);
  }

  return rotatedImage;

}

a = [[1, 2, 3, 4],
     [5, 6, 7, 8],
     [9, 10, 11, 12],
     [13, 14, 15, 16]]

// rotateImage(a) =
// [[13, 9, 5, 1],
// [14, 10, 6, 2],
// [15, 11, 7, 3],
// [16, 12, 8, 4]

console.log(rotateImage(a));